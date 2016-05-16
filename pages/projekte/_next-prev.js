import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/comp-sternchen.svg'

import './_next-prev.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        const props = this.props
        return (
            <nav className="vo_next_prev">
                <Link to={prefixLink(props.next.path)}>
                    {props.next.data.title}
                </Link><br />
                <Link to={prefixLink(props.prev.path)}>
                    {props.prev.data.title}
                </Link>
            </nav>
        )
    },
})
