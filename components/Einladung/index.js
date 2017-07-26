import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import style from './style.module.less';

import ANTWORT from './antwort.json';

export default class Einladung extends React.Component {
    render() {
        console.log(ANTWORT);
        return (
            <div className="vo-section_wrapper">
                <section className="vo-section">
                    <h2>
                        einladung <del>ausladung hinweis</del>
                    </h2>
                    <p>
                        <br />
                        <del>eröffnung jubiläum umzug</del> werkschau <del>neueröffnung räumungsverkauf schließung</del>
                        <br />
                        <del>mo di mi do</del> fr <del>sa so</del>
                        <br />
                        <del>1 2 3 4 5 6 7</del> 8{' '}
                        <del>9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31</del>
                        <br />
                        <del>jan feb mär apr jun jul aug</del> sep <del>okt nov dez</del>
                        <br />
                        <del>2016</del> 2017 <del>2018 2019 2020</del>
                        <br />
                        <del>00 01 02 03 04 05 06</del> 07 <del>08 09 10 11 12 am</del> pm
                        <br />
                        sonnen <del>monde sterne</del> allee <del>straße weg</del> 200
                        <br />
                        <del>alt</del> neu kölln
                        <br />
                        sekt <del>bratwurst</del> wein <del>mettigel</del> schnapps bier
                    </p>
                </section>
                <section className="vo-section">
                    <h2>Antwort (nicht zutreffendes streichen)</h2>
                </section>
            </div>
        );
    }
}
