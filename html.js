import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import piwikConfig from 'piwik';
import { config } from 'config';

require('file?name=.htaccess!./.htaccess')

module.exports = React.createClass({
    propTypes () {
        return {
            title: React.PropTypes.string,
        }
    },
    render () {
        const title = DocumentTitle.rewind()

        const piwikSetup = buildPiwikSetup(piwikConfig);

        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no" />
                    <meta name="description" content={config.tagLine} />
                    <title>{title}</title>
                    <link rel="shortcut icon" href={'/favicon.png'} />
                    {css}
                </head>
                <body>
                    <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    <script src={prefixLink('/bundle.js')} />

                    {piwikSetup}
                </body>
            </html>
        )
    },
})

function buildPiwikSetup({ domain, siteId, site }) {
  const js = `
  var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//piwik.volligohne.de/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
  `;

  return <script
    type="text/javascript"
    dangerouslySetInnerHTML={{ __html: js }}
  />;
}

buildPiwikSetup.propTypes = {
  domainCDN: React.PropTypes.string,
  domainPiwik: React.PropTypes.string,
};
