import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/sternchen.svg'
import Header from 'pages/components/_header.js'

import './vo-about.less'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {

        return (
            <div className="vo_about">
                {this.props.children}
            </div>
        )
    },
})
