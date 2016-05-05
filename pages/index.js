import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import vsternchen from 'pages/vsternchen.svg'
import Menu from 'pages/components/_menu.js'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>

        <div>
        </div>

      </DocumentTitle>
    )
  }
}
