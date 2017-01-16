import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Image from 'components/ResponsiveImage'
import classNames from 'classnames'

import style from './style.module.less'

export default class Project extends React.Component {
    constructor() {
        super()
        this.onResize = this.handleResize.bind(this)

        if (typeof window !== 'undefined') {
            this.state = { windowWidth: window.innerWidth };
        } else {
            this.state = { windowWidth: 700 };
        }
    }

    componentDidMount () {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.onResize);
        }
    }

    componentWillUnmount () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize);
        }
    }

    handleResize () {
        if (typeof window !== 'undefined') {
            this.setState({windowWidth: window.innerWidth});
        }
    }

    render () {
        const { page, className } = this.props

        const status = this.props.status || {
            isOpen: false,
            isListed: true,
        }

        const crossRotation = Math.atan(350 / this.state.windowWidth) * (180 / Math.PI)

        const crossTransform = {transform: 'rotate(' + crossRotation + 'deg)'}
        const crossTransform2 = {transform: 'rotate(-' + crossRotation + 'deg)'}

        const containerClasses = classNames(className, 
            style.container, 
            {[style.container__open]: status.isOpen}, 
            {[style.container__listed]: status.isListed}
        );

        return (
            <li className={containerClasses}>
                { status.isOpen ? null :
                    <Link to={prefixLink(page.path)}
                        className={style.link}>
                        mehr infos
                    </Link> 
                }
                
                <Image location={page.path} 
                    source={page.data.mainImage} 
                    className={classNames(style.main_image, {[style.main_image__open   ]: status.isOpen} )} />

                <div className="vo-section_wrapper">
                    <div className={classNames(style.section, 'vo-section vo-section--half')}>
                        <h2>{page.data.title}</h2>
                        <div>{page.data.description}</div>
                        <div className={style.separator}/>
                        <div>{page.data.date}</div>
                        <div>{page.data.what}</div>
                        <div className={style.separator}/>
                        <div>{page.data.what2}</div>
                        {
                            page.data.link && status.isOpen ? 
                            <span>
                                <div className={style.separator} />
                                <div>
                                    website:&nbsp;
                                    <a href={page.data.link.href}>
                                        {page.data.link.title}
                                    </a>
                                </div>
                            </span> 
                            : null
                        }
                        { status.isOpen ? 
                            <div>
                                <div className={style.separator}/>
                                <div className={style.body}
                                    dangerouslySetInnerHTML={{ __html: page.data.body }}>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>

                { status.isOpen ? null :
                    <span>
                        <div className={style.cross}
                            style={crossTransform} />
                        <div className={style.cross}
                            style={crossTransform2}  />
                    </span>
                }

                { this.props.children }

            </li>
        )
    }
}