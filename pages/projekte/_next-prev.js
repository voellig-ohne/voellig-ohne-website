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
                    vorheriges projekt:<br />
                    <Link to={prefixLink(props.next.path)}>
                        {props.next.data.title}
                    </Link>
                </div>
                <div>
                <div>
                    <Link to={prefixLink('/projekte/')}>
                        projektübersicht
                    </Link><br />
                    gefällt?&nbsp;
                    <Link to={prefixLink('/kontakt/')}>
                        kontaktiere uns!
                    </Link>
                </div>
                </div>
                <div className="vo_next_prev-next">
                    nächtes projekt:<br />
                    <Link to={prefixLink(props.prev.path)}>
                        {props.prev.data.title}
                    </Link>
                </div>
            </nav>
        )
    }
})
