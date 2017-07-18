import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import style from './style.module.less';

export default class Menu extends React.Component {
    render() {
        const links = [
            {
                target: '/',
                title: 'völlig ohne',
            },
            {
                target: '/projekte/',
                title: 'projekte',
            },
            {
                target: '/vo/',
                title: 'uns',
            },
            {
                target: '/kontakt/',
                title: 'kontakt',
            },
            {
                target: '/neuigkeiten/',
                title: 'neuigkeiten',
            },
        ];

        const renderedLinks = links.map(link => {
            return (
                <li key={link.target}>
                    <Link
                        to={prefixLink(link.target)}
                        className={style.menu - link}
                        activeClassName={style['link--active']}
                    >
                        {link.title}
                    </Link>
                </li>
            );
        });

        return (
            <menu className={style.menu}>
                {renderedLinks}
            </menu>
        );
    }
}
