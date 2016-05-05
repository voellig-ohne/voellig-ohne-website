import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Header from 'pages/components/_header.js'

import 'style/main.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        console.log(this.props.location.pathname)

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
