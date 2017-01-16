import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Menu from 'components/Menu'

import style from './style.module.less'

export default class Header extends React.Component {
    constructor() {
        super();
        if (typeof window !== 'undefined') {
            this.stickyBrowser = !!featureTest('position', 'sticky');

            this.state = { 
                scrollPosition: window.pageYOffset
            };
        } else {
            this.stickyBrowser = false;

            this.state = { 
                scrollPosition: 0
            }
        }
    }

    componentDidMount () {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => this.handleScroll());
        }
    }

    componentWillUnmount () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', () => this.handleScroll());
        }
    }

    handleScroll () {
        if (typeof window !== 'undefined') {
            this.setState({scrollPosition: window.pageYOffset});
        }
    }
    
    render () {
        const { isRoot } = this.props

        const v = require('!svg-inline-loader!./v.svg')
        const sternchen = require('!svg-inline-loader!./sternchen.svg')

        return (
            <nav className={style.header}>
                <div className={style.logo_container}>
                    <Link to={prefixLink('/')} className={style.logo}>
                        <span className={style.v} dangerouslySetInnerHTML={{ __html: v }} />
                        <span className={style.sternchen} dangerouslySetInnerHTML={{ __html: sternchen }} />
                    </Link>
                </div>
                <Menu className={style.menu} />
            </nav>
        )
    }
}

// thanks http://albertogasparin.it/articles/2014/04/detect-css-support-of-property-value/
function featureTest( property, value, noPrefixes ) {
  // Thanks Modernizr!
  var prop = property + ':',
      el = document.createElement( 'test' ),
      mStyle = el.style;
  
  if( !noPrefixes ) {
      mStyle.cssText = prop + [ '-webkit-', '-moz-', '-ms-', '-o-', '' ].join( value + ';' + prop ) + value + ';';
  } else {
      mStyle.cssText = prop + value;
  }    
  return mStyle[ property ];
}