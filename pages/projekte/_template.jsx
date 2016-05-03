import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import 'style/main.less'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <div className="vo-header">
          <Link to={prefixLink('/')} className="vo-sternchen">
            <img src=".././sternchen.svg" />
          </Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  },
})
