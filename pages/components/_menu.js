import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import './_menu.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        const links = [
            {
                target: '/projekte/',
                title: 'projekte'
            },
            {
                target: '/vo/',
                title: 'über uns'
            }
        ]

        const renderedLinks = links.map((link) => {
            return (
                <li key={link.target}>
                    <Link to={prefixLink(link.target)}
                        activeClassName="vo-link-active">
                        {link.title}
                    </Link>
                </li>
            )
        });

        return (
            <menu className="vo_menu">
                {renderedLinks}
            </menu>
        )
    },
})
