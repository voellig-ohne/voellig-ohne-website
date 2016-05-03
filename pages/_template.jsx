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
      <div>
        <div>
          <Link
            to={prefixLink('/')}
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            völlig ohne
          </Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  },
})
