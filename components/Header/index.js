import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Menu from 'components/Menu'

import './style.less'

export default class Header extends React.Component {
    render () {
        const v = require('!svg-inline-loader!./v.svg')
        const sternchen = require('!svg-inline-loader!./sternchen.svg')

        return (
            <nav className="vo_header">
                <Link to={prefixLink('/')} className="vo_header-logo">
                    <span className="vo_header-v" dangerouslySetInnerHTML={{ __html: v }}>
                    </span>
                    <span className="vo_header-sternchen" dangerouslySetInnerHTML={{ __html: sternchen }}>
                    </span>
                </Link>
                <Menu></Menu>
            </nav>
        )
    }
}
