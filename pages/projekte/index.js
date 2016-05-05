import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import sternchen from 'pages/sternchen.svg'

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

			const subDir = page.path.replace(currentPath, '')

			let responsiveImage = require('responsive?sizes[]=500,sizes[]=1000,sizes[]=2000!./' + subDir + page.data.mainImage + '.jpg')

			projectList.push(
				<li className="vo-project_list-item">
					<Link to={prefixLink(page.path)}>
						<img srcSet={responsiveImage.srcSet} src={responsiveImage.src} />
						<div className="vo-project_list-item-description">
							<h2>{page.data.title}</h2>
							<div>{page.data.description}</div>
							<div className="vo-trenner"/>
							<div>{page.data.date}</div>
							<div>{page.data.what}</div>
							<div className="vo-trenner"/>
							<div>{page.data.what2}</div>
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
