import React from 'react'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        const props = this.props
        const source = props.source
        const suffix = props.suffix || '.jpg'
        const alt = props.alt
        const linkPrefix = (process.env.NODE_ENV === 'production') ? '/' : '';

        const size1 = linkPrefix + require('!file!scale?size=500!.././vo/' + source + '.jpg')
        const size2 = linkPrefix + require('!file!scale?size=700!.././vo/' + source + '.jpg')
        const size3 = linkPrefix + require('!file!scale?size=1100!.././vo/' + source + '.jpg')

        const srcSet = size1 + ' 500w, ' + size2 + ' 700w, ' + size3 + ' 1100w'

        return (
            <img src={size1}
                    srcSet={srcSet}
                    alt={alt}
                    sizes={props.sizes}
                    className={props.className}/>
        )
    },
})
