import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Header from 'components/Header';
import Helmet from 'react-helmet';
import { config } from 'config';
import { filter, sortBy, flow } from 'lodash';
import Image from 'components/ResponsiveImage';
import ImagePath from 'components/ImagePath';

import './neuigkeiten.less';

export default class NeuigkeitenTemplate extends React.Component {
    render() {
        let newsIntro;
        const galleryImages = [];

        const currentPath = '/neuigkeiten/';

        const news = flow(
            pages =>
                filter(pages, page => {
                    return page.path.substr(0, currentPath.length) === currentPath && page.path !== currentPath;
                }),
            pages =>
                sortBy(pages, page => {
                    return page.data.date;
                })
        )(this.props.route.pages);

        if (this.props.location.pathname === currentPath) {
            const newsItems = [];

            news.forEach(page => {
                let mainImage;

                if (page.data.mainImage) {
                    mainImage = (
                        <Image
                            location={page.path}
                            sizes="(max-width: 500px) 100vw, 300px"
                            source={page.data.mainImage}
                            className="vo_news-main_image"
                        />
                    );
                }

                newsItems.push(
                    <Link
                        to={prefixLink(page.path)}
                        key={page.path}
                        className="vo_news-link vo-section vo-section--half vo_news-item"
                    >
                        <section>
                            <span className="vo_news-date">
                                {formatDate(page.data.date)}
                            </span>
                            <h1>
                                {page.data.title}
                            </h1>
                            <div className="vo_news-main_image-wrapper">
                                {mainImage}
                            </div>
                        </section>
                    </Link>
                );
            });

            newsIntro = (
                <div className="vo-section_wrapper vo_news-wrapper">
                    {this.props.children}
                    {newsItems}
                    <Helmet title={`${config.siteTitle} | neuigkeiten`} />
                </div>
            );
        } else {
            const page = news.find(page => {
                return page.path === this.props.location.pathname;
            });

            let gallery;

            if (page.data.images) {
                gallery = page.data.images.map(image => {
                    return (
                        <li key={image}>
                            <Image location={page.path} source={image} />
                        </li>
                    );
                });
            }

            const meta = [
                {
                    property: 'og:title',
                    content: `völlig ohne neuigkeit: ${page.data.title}`,
                },
                {
                    property: 'og:image',
                    content: ImagePath({ source: page.data.mainImage, location: page.path }),
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
            ];

            newsIntro = (
                <div>
                    <div className="vo-section_wrapper">
                        <section className="vo-section">
                            <span className="vo_news-date">
                                {formatDate(page.data.date)}
                            </span>
                            <h1>
                                {page.data.title}
                            </h1>
                            {this.props.children}
                        </section>
                    </div>

                    <ul className="vo_news-gallery">
                        {gallery}
                    </ul>

                    <Helmet meta={meta} title={`${config.siteTitle} | neuigkeiten | ${page.data.title}`} />
                </div>
            );
        }

        return (
            <div>
                {newsIntro}
            </div>
        );
    }
}

function formatDate(date) {
    const parsedDate = new Date(date);
    return parsedDate.getDate() + '.' + (parsedDate.getMonth() + 1) + '.' + parsedDate.getFullYear();
}
