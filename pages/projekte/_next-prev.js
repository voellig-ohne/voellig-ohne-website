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
                <div className="vo_next_prev-prev">
                    <Link to={prefixLink(props.next.path)}>
                        vorheriges
                    </Link>
                </div>
                <div>
                <div>
                    <Link to={prefixLink('/projekte/')}>
                        übersicht
                    </Link>
                </div>
                </div>
                <div className="vo_next_prev-next">
                    <Link to={prefixLink(props.prev.path)}>
                        nächstes
                    </Link>
                </div>
            </nav>
        )
    }
})
