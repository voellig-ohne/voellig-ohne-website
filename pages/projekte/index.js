import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class Projects extends React.Component {
	render () {
    return (
		<DocumentTitle title={`${config.siteTitle} | projekte`}>

		</DocumentTitle>
    )
  }
}
