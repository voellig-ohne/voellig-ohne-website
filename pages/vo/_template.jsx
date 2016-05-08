import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/sternchen.svg'
import Header from 'pages/components/_header.js'

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
            return page.path.startsWith(currentPath) && page.path !== currentPath
        })

        members.forEach((page) => {
            let responsiveImage = require('responsive?sizes[]=500,sizes[]=700,sizes[]=1100!./' + page.data.image + '.jpg')

            memberList.push(
                <section key={page.path}
                    className="vo_about-section vo_about-member">
                    <h1>{page.data.name}</h1>
                    <img
                        className="vo_about-image"
                        srcSet={responsiveImage.srcSet} src={responsiveImage.src} />
                </section>
            )
        })

        console.log()

        return (
            <div className="vo_about">
                <section className="vo_about-section vo_about-description">
                    {this.props.children}
                </section>
                {memberList}
            </div>
        )
    },
})
