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
        <div>
          <Link to={prefixLink('/')}>
            völlig ohnö
          </Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  },
})