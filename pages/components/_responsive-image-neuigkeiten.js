import React from 'react'

export default function ResponsiveImageNeuigkeiten (props) {

    const source = props.source
    const location = props.location.replace('/neuigkeiten/', '')
    const suffix = props.suffix || '.jpg'
    const alt = props.alt
    const linkPrefix = (process.env.NODE_ENV === 'production') ? '/' : '';

    const size1 = linkPrefix + require('!file!scale?size=500!.././neuigkeiten/' + location + source + '.jpg')
    const size2 = linkPrefix + require('!file!scale?size=1000!.././neuigkeiten/' + location + source + '.jpg')
    const size3 = linkPrefix + require('!file!scale?size=1500!.././neuigkeiten/' + location + source + '.jpg')
    const size4 = linkPrefix + require('!file!scale?size=2000!.././neuigkeiten/' + location + source + '.jpg')

    const srcSet = size1 + ' 500w, ' + size2 + ' 1000w, ' + size3 + ' 1500w, ' + size4 + ' 2000w'

    return (
        <img src={size1}
                srcSet={srcSet}
                alt={alt}
                className={props.className}/>
    )
}
