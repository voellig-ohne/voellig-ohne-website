import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Image from 'components/ResponsiveImage'

import './style.module.less'

export default class Project extends React.Component {
    constructor() {
        super()
        if (typeof window !== 'undefined') {
            this.state = { windowWidth: window.innerWidth };
        } else {
            this.state = { windowWidth: 700 };
        }
    }

    componentDidMount () {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleResize);
        }
    }

    componentWillUnmount () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.handleResize);
        }
    }

    handleResize () {
        if (typeof window !== 'undefined') {
            this.setState({windowWidth: window.innerWidth});
        }
    }

    render () {
        const { page, className } = this.props

        const crossRotation = Math.atan(350 / this.state.windowWidth) * (180 / Math.PI)

        const crossTransform = {transform: 'rotate(' + crossRotation + 'deg)'}
        const crossTransform2 = {transform: 'rotate(-' + crossRotation + 'deg)'}

        return (
            <li className={className}
                    key={page.path}>
                <Link to={prefixLink(page.path)}
                    className="vo_project_list-link">
                    mehr infos
                </Link>
                <Image location={page.path} source={page.data.mainImage} className="vo_project_list-main_image"/>
                <div className="vo-section_wrapper">
                    <div className="vo_project_list-section vo-section vo-section--half">
                        <h2>{page.data.title}</h2>
                        <div>{page.data.description}</div>
                        <div className="vo-trenner"/>
                        <div>{page.data.date}</div>
                        <div>{page.data.what}</div>
                        <div className="vo-trenner"/>
                        <div>{page.data.what2}</div>
                        {
                            page.data.link ? 
                            <span className="vo_project-link">
                                <div className="vo-trenner" />
                                <div>
                                    website:&nbsp;
                                    <a href={page.data.link.href}>
                                        {page.data.link.title}
                                    </a>
                                </div>
                            </span> 
                            : null
                        }
                        <div className="vo_project-full_text">
                            <div className="vo-trenner"/>
                            <div className="vo_project_list-body"
                                dangerouslySetInnerHTML={{ __html: page.data.body }}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cross cross--1"
                    style={crossTransform} />
                <div className="cross cross--2"
                    style={crossTransform2}  />

                { this.props.children }

            </li>
        )
    }
}