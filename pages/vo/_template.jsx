import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/sternchen.svg'
import Header from 'pages/components/_header.js'
import Image from 'pages/components/_responsive-image-vo.js'

import './vo-about.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {

        const memberList = [];

        const currentPath = '/vo/'

        const members = this.props.route.pages.filter((page) => {
            return page.path.substr(0, currentPath.length) === currentPath && page.path !== currentPath
        })

        members.forEach((page) => {
            memberList.push(
                <section key={page.path}
                    className="vo-section vo-section--half vo_about-member">
                    <h1>{page.data.name}</h1>

                    <Image
                        className="vo_about-image"
                        sizes="(max-width: 500px) 100vw, 300px"
                        source={page.data.image} />

                    <div className="vo_about-body"
                        dangerouslySetInnerHTML={{ __html: page.data.body }}>
                    </div>
                </section>
            )
        })

        return (
            <div className="vo_about vo-section_wrapper">
                <section className="vo-section vo_about-description">
                    {this.props.children}
                </section>
                {memberList}
            </div>
        )
    },
})
