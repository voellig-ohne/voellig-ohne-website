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
            let responsiveImage = require('responsive?sizes[]=500,sizes[]=700,sizes[]=1100,quality=75!pages/vo/' + page.data.image + '.jpg')

            // WORST HACK DAMN IT
            const srcSet = responsiveImage.images.map((image) => {
                const linkPrefix = (process.env.NODE_ENV === 'production') ? '/' : '';
                return linkPrefix + prefixLink(image.path) + ' ' + image.width + 'w'
            }).join(', ')

            memberList.push(
                <section key={page.path}
                    className="vo-section vo-section--half vo_about-member">
                    <h1>{page.data.name}</h1>
                    <img
                        className="vo_about-image"
                        sizes="(max-width: 500px) 100vw, 300px"
                        srcSet={srcSet} src={responsiveImage.src} />
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
