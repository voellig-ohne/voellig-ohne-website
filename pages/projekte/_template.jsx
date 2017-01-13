import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Header from 'components/Header'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import NextPrev from 'pages/projekte/_next-prev.js'
import Image from 'components/ResponsiveImage'
import Project from 'components/Project'

import style from './project-list.module.less'

export default class ProjectTemplate extends React.Component {
    render () {
        const projectList = [];
        const currentPath = '/projekte/'

        const projects = this.props.route.pages.filter((page) => {
            return page.path.substr(0, currentPath.length) === currentPath && page.path !== currentPath
        }).sort((a, b) => {
            return (a.data.order < b.data.order) ? 1 : (a.data.order > b.data.order) ? -1 : 0
        })

        projects.forEach((page) => {
            const subDir = page.path.replace(currentPath, '')
            let gallery;
            const isOpen = this.props.location.pathname === page.path
            const status = {
                isOpen,
                isActive: isOpen && this.props.location.pathname !== currentPath,
                isPassive: !isOpen && this.props.location.pathname !== currentPath,
                isListed: this.props.location.pathname === currentPath,
            }

            const backgroundImage = {
                backgroundImage: `url(${page.path}${page.data.mainImage})`
            }

            if (page.data.images && this.props.location.pathname === page.path) {
                const galleryImages = page.data.images.map((image) => {
                    if (image.vimeo) {
                        return (
                            <li key={image}>
                                <div className="embed_container">
                                    <iframe 
                                        src={image.vimeo} 
                                        frameBorder='0' 
                                        allowFullScreen />
                                </div>
                            </li>
                        )
                    }
                    return (
                        <li key={image}>
                            <Image location={page.path} source={image} />
                        </li>
                    )
                })

                const nextProject = projects.find((project, index, projects) => {
                    const prevIndex = mod((index + 1), projects.length)
                    return page.path === projects[prevIndex].path
                })

                const prevProject = projects.find((project, index, projects) => {
                    const prevIndex = mod((index - 1), projects.length)
                    return page.path === projects[prevIndex].path
                })

                gallery = (
                    <footer>
                        <ul className={style.gallery}>
                            {galleryImages}
                        </ul>

                        <NextPrev next={nextProject} prev={prevProject} />
                    </footer>
                )
            }

            projectList.push(
                <Project 
                        page={page}
                        status={status}
                        key={page.path}>

                    { gallery }

                </Project>
            )
        })

        return (
            <DocumentTitle title={`${config.siteTitle} | projekte`}>
                <main>
                    <ul className={style.list}>
                        {projectList}
                    </ul>
                </main>
            </DocumentTitle>
        )
    }
}

function mod(n, m) {
        return ((n % m) + m) % m;
}
