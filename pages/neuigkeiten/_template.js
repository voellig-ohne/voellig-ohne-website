import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/sternchen.svg'
import Header from 'pages/components/_header.js'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Image from 'pages/components/_responsive-image-neuigkeiten.js'

import './neuigkeiten.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },

    render () {

        let newsIntro
        const galleryImages = []

        const currentPath = '/neuigkeiten/'

        const news = this.props.route.pages.filter((page) => {
            return page.path.substr(0, currentPath.length) === currentPath && page.path !== currentPath
        })

        if (this.props.location.pathname === currentPath) {
            const newsItems = []

            news.forEach((page) => {
                newsItems.push(
                    <Link to={prefixLink(page.path)}
                            key={page.path}>
                        <section
                            className="vo-section vo-section--half vo_news-item">
                            <span class="vo_news-date">
                                {page.data.date}
                            </span>
                            <h1>{page.data.title}</h1>
                            <Image location={page.path} source={page.data.mainImage} className="vo_news-main_image"/>
                        </section>
                    </Link>
                )
            })

            newsIntro = (
                <div className="vo-section_wrapper">
                    <section className="vo-section">
                        {this.props.children}
                    </section>
                    {newsItems}
                </div>
            )
        } else {
            const page = news.find((page) => {
                return page.path === this.props.location.pathname
            })

            const gallery = page.data.images.map((image) => {
                return (
                    <li key={image}>
                        <Image location={page.path} source={image} />
                    </li>
                )
            })

            newsIntro = (
                <div>
                    <div className="vo-section_wrapper">
                        <section className="vo-section">
                            <h1>
                                {page.data.title}
                            </h1>
                            {this.props.children}
                        </section>
                    </div>

                    <ul className='vo_news-gallery'>
                        {gallery}
                    </ul>
                </div>
            )
        }


        return (
            <DocumentTitle title={`${config.siteTitle} | projekte`}>
                {newsIntro}
            </DocumentTitle>
        )
    },
})
