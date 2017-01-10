import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class htmlWrapper extends React.Component {
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
        <div className="markdown">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  }
}
