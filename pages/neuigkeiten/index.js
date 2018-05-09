import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class Neuigkeiten extends React.Component {
    render() {
        return (
            <div>
                <Helmet title={`${config.siteTitle} | neuigkeiten`} />
            </div>
        );
    }
}
