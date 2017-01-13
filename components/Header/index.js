import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Menu from 'components/Menu'

import style from './style.module.less'

export default class Header extends React.Component {
    render () {
        const v = require('!svg-inline-loader!./v.svg')
        const sternchen = require('!svg-inline-loader!./sternchen.svg')

        return (
            <nav className={style.header}>
                <Link to={prefixLink('/')} className={style.logo}>
                    <span className={style.v} dangerouslySetInnerHTML={{ __html: v }} />
                    <span className={style.sternchen} dangerouslySetInnerHTML={{ __html: sternchen }} />
                </Link>
                <Menu />
            </nav>
        )
    }
}
