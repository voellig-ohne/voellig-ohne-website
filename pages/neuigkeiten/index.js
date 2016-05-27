import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class Neuigkeiten extends React.Component {
    render () {
        return (
            <DocumentTitle title={`${config.siteTitle} | neuigkeiten`}>
                <div>
                    huhu! hier gibt es neuigkeiten
                    <Link to={prefixLink('eroeffnung/')}>
                        yehu
                    </Link>
                </div>
            </DocumentTitle>
        )
    }
}
