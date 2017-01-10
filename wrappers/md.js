import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class mdWrapper extends React.Component {
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
        <div className="markdown">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  }
}
