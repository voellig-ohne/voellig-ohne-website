import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import LandingPage from 'components/LandingPage'
import { startsWith, filter } from 'lodash'

export default class Index extends React.Component {
    render () {

        const projects = filter (this.props.route.pages, (project) => {
            return startsWith(project.path, '/projekte') && project.data.featured
        })

        return (
            <DocumentTitle title={config.siteTitle}>

                <LandingPage projects={projects} />

            </DocumentTitle>
        )
    }
}
