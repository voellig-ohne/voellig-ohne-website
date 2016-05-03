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
			projectList.push(
				<li className="vo-project">
					<Link to={prefixLink(page.path)}>
						<img src={`${page.path}${page.data.mainImage}`} 
								className="vo-project-image" />
						<div className="vo-project-description">
							{page.data.title}
						</div>
					</Link>
				</li>
			)
		})

    return (
      <DocumentTitle title={`${config.siteTitle} | projekte`}>
        
          <main>
            <h1>
              Projekte
            </h1>
            <ul>
            	{projectList}
            </ul>
          </main>

      </DocumentTitle>
    )
  }
}
