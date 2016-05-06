import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/sternchen.svg'
import Header from 'pages/components/_header.js'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        const projectList = [];

        const currentPath = '/projekte/'

        const projects = this.props.route.pages.filter((page) => {
            return page.path.startsWith(currentPath) && page.path !== currentPath
        })

        console.log(this.props.location.pathname)

        projects.forEach((page) => {
            const backgroundImage = {
                backgroundImage: `url(${page.path}${page.data.mainImage})`
            }

            const subDir = page.path.replace(currentPath, '')

            let responsiveImage = require('responsive?sizes[]=500,sizes[]=1000,sizes[]=2000!./' + subDir + page.data.mainImage + '.jpg')

            console.log(page.path)
            let classNames = 'vo_project_list-item';

            if (this.props.location.pathname !== currentPath) {
                classNames += (this.props.location.pathname === page.path) ? ' active' : ' passive';
            }

            projectList.push(
                <li className={classNames}
                    key={page.path}>
                    <Link to={prefixLink(page.path)}>
                        <img srcSet={responsiveImage.srcSet} src={responsiveImage.src} />
                        <div className="vo_project_list-description">
                            <h2>{page.data.title}</h2>
                            <div>{page.data.description}</div>
                            <div className="vo-trenner"/>
                            <div>{page.data.date}</div>
                            <div>{page.data.what}</div>
                            <div className="vo-trenner"/>
                            <div>{page.data.what2}</div>
                            <div className="vo_project_list-body"
                                dangerouslySetInnerHTML={{ __html: page.data.body }}>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        })

        return (
            <div>
                <main>
                    <ul className="vo_project_list">
                        {projectList}
                    </ul>
                </main>
                {this.props.children}
            </div>
        )
    },
})
