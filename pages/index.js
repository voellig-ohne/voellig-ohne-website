import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import LandingPage from 'components/LandingPage'
import { startsWith, filter, flow, sortBy, reverse } from 'lodash'

export default class Index extends React.Component {
    render () {

        const projects = flow(
            pages => filter(pages, (page) => {
                return startsWith(page.path, '/projekte') && page.data.featured
            }),
            projects => sortBy(projects, (project) => {
                return project.data.order
            }), 
            projects => reverse(projects)
        )(this.props.route.pages)

        return (
            <DocumentTitle title={config.siteTitle}>

                <LandingPage projects={projects} />

            </DocumentTitle>
        )
    }
}
