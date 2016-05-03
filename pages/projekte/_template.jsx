import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import sternchen from 'pages/sternchen.svg'

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
          <Link to={prefixLink('/')} className="vo-sternchen"
              dangerouslySetInnerHTML={{ __html: sternchen }}>
          </Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  },
})
