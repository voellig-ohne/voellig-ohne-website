import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class Projects extends React.Component {

	render () {
		const projectList = [];

		const currentPath = this.props.route.page.path

		const projects = this.props.route.pages.filter((page) => {
			return page.path.startsWith(currentPath) && page.path !== currentPath
		})

		projects.forEach((page) => {
			const backgroundImage = {
				backgroundImage: `url(${page.path}${page.data.mainImage})`
			}

			projectList.push(
				<li className="vo-project_list-item"
						style={backgroundImage}>
					<Link to={prefixLink(page.path)}>
						<div className="vo-project_list-item-description">
							{page.data.title}<br />
							{page.data.date}
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
            <ul className="vo-project_list">
            	{projectList}
            </ul>
          </main>

      </DocumentTitle>
    )
  }
}
