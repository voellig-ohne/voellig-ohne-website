import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Kontakt extends React.Component {
    render() {
        return (
            <div className="vo-section_wrapper">
                <section className="vo-section vo-section--half">
                    {this.props.children}
                </section>
            </div>
        );
    }
}
