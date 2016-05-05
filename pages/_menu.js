import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

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
            <menu class="vo-menu">
                {renderedLinks}
            </menu>
        )
    },
})
