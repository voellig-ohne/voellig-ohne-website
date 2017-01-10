import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Header from 'components/Header'

import 'style/main.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        const isRoot = this.props.location.pathname === '/'

        return (
            <div className={isRoot ? 'vo-root': ''}>
                <Header></Header>
                <div className="vo-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    },
})
