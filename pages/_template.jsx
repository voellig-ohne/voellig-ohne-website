import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Header from 'components/Header'
import Helmet from 'react-helmet';
import { config } from 'config';

import 'style/main.less'

export default class IndexTemplate extends React.Component {
    render () {
        const isRoot = this.props.location.pathname === '/'

        const meta = [{
            name: 'description',
            content: config.description
        }, {
            property: 'og:url',
            content: config.domain + this.props.location.pathname
        }, {
            property: 'og:description',
            content: config.description
        }, {
            property: 'og:image',
            content: require('!file-loader!./default-og-image.png')
        }, {
            name: 'twitter:site',
            content: '@volligohne'
        },{
            property: 'og:title',
            content: config.siteTitle,
        }, {
            property: 'og:type',
            content: 'website'
        }]

        return (
            <div className={isRoot ? 'vo-root': ''}>
                <Helmet title={config.siteTitle} meta={meta} />
                <Header isRoot={isRoot}></Header>
                <div className="vo-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
