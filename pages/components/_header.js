import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import v from 'pages/comp-v.svg'
import sternchen from 'pages/comp-sternchen.svg'
import Menu from 'pages/components/_menu.js'

import './_header.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        return (
            <nav className="vo_header">
                <Link to={prefixLink('/')} className="vo_header-logo">
                    <span dangerouslySetInnerHTML={{ __html: v }}>
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: sternchen }}>
                    </span>
                </Link>
                <Menu></Menu>
            </nav>
        )
    },
})
