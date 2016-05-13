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
        return (
            <div className="vo-section_wrapper">
                <section className="vo-section vo-section--half">
                    {this.props.children}
                </section>
            </div>
        )
    },
})
