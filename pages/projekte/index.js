import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Isvg from 'react-inlinesvg'

export default class Projects extends React.Component {

	render () {
		console.log(this);
		const projectList = [];

		const currentPath = this.props.route.page.path

		const projects = this.props.route.pages.filter((page) => {
			return page.path.startsWith(currentPath) && page.path !== currentPath
		})

		projects.forEach((page) => {
			console.log(page)
			projectList.push(
				<li>
					<Link to={prefixLink(page.path)}>
						{page.data.title}
					</Link>
				</li>
			)
		})

		console.log(projects)

		console.log('hello?!')

    return (
      <DocumentTitle title={`${config.siteTitle} | projekte`}>
        
          <main>
            <p>
              all our projects so far:
            </p>
            <ul>
            	{projectList}
            </ul>
          </main>

      </DocumentTitle>
    )
  }
}
