import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Isvg from 'react-inlinesvg'

export default class Sass extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        
        <div>
          <div className="vo-intro">
            <Link to={prefixLink('/')}>
              <div className="vo-logo">
                <Isvg src="vsternchen.svg">
                </Isvg>
              </div>
            </Link>
          </div>
          <Link to={prefixLink('/projekte/planetarium/')}>planetarium</Link>
        </div>

      </DocumentTitle>
    )
  }
}
