import React from 'react'

export default class ResponsiveImage extends React.Component {
    render () {
        const { source, location, alt, className, sizes } = this.props

        if (process.env.NODE_ENV !== 'production') {
            const path = location + source + '.jpg'
            return (
                <img key={source} src={path} className={className} alt={alt} />
            )
        } else {
            const path = location.substr(1)

            const size1 = '/' + require('!file!scale?size=400!../.././pages/' + path + source + '.jpg')
            const size2 = '/' + require('!file!scale?size=1000!../.././pages/' + path + source + '.jpg')
            const size4 = '/' + require('!file!scale?size=1800!../.././pages/' + path + source + '.jpg')
            const size6 = '/' + require('!file!scale?size=2500!../.././pages/' + path + source + '.jpg')

            const srcSet = size1 + ' 400w, ' + size2 + ' 1000w, ' + size4 + ' 1800w, ' + size6 + ' 2500w'

            return (
                <img key={source}
                        src={size2}
                        srcSet={srcSet}
                        sizes={sizes}
                        alt={alt}
                        className={className}/>
            )
        }
    }
}
