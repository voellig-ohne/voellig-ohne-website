import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class Projects extends React.Component {
    render() {
        return <Helmet title={`${config.siteTitle} | projekte`} />;
    }
}
