import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/sternchen.svg'
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
                <Link to={prefixLink('/')} className="vo-sternchen"
                    dangerouslySetInnerHTML={{ __html: sternchen }}>
                </Link>
                <Menu></Menu>
            </nav>
        )
    },
})
