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
        }]

        return (
            <div className={isRoot ? 'vo-root': ''}>
                <Header isRoot={isRoot}></Header>
                <div className="vo-wrapper">
                    {this.props.children}
                </div>
                <Helmet title={config.siteTitle} meta={meta} />
            </div>
        )
    }
}
