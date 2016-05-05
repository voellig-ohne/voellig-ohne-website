import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/sternchen.svg'

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
                title: 'projektee'
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
            <nav className="vo-header">
                <Link to={prefixLink('/')} className="vo-sternchen"
                    dangerouslySetInnerHTML={{ __html: sternchen }}>
                </Link>
                <menu class="vo-menu">
                    {renderedLinks}
                </menu>
            </nav>
        )
    },
})
