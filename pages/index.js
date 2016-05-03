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
        
        <div className="vo-wrapper">
          <div className="vo-intro">
            <Link to={prefixLink('/')}>
              <div className="vo-logo">
                <Isvg src="vsternchen.svg">
                </Isvg>
              </div>
            </Link>
          </div>
          <main>
            <p>
              <Link to={prefixLink('/projekte/')}>pojekte</Link>
            </p>
          </main>
        </div>

      </DocumentTitle>
    )
  }
}
