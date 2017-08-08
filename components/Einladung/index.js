import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { map } from 'lodash';
import classNames from 'classnames';

import style from './style.module.less';

import ANTWORT from './antwort.json';

const MAIL_SERVER = '/sendmail.php/';

export default class Einladung extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            antwort: map(ANTWORT, row => {
                return map(row, word => false);
            }),
            sendState: 'UNSENT',
            isDirty: false,
            showHint: false,
        };
        this.toggleWord = this.toggleWord.bind(this);
        this.send = this.send.bind(this);

        if (typeof window !== 'undefined') {
            this.guest = QueryString();
        } else {
            this.guest = {
                name: 'NONAME',
                mail: 'NOMAIL',
            };
        }
    }

    render() {
        return (
            <div className="vo-section_wrapper">
                <section className="vo-section">
                    <h1>
                        einladung für {this.guest.name}
                    </h1>

                    <p>
                        Interaktive Werkschau mit langsamem Cocktaildrucker, umständlicher Illustrationsmaschine und
                        gewöhnlichen Corporate Identities.
                    </p>

                    <p>
                        <del>eröffnung jubiläum umzug</del> werkschau <del>neueröffnung räumungsverkauf schließung</del>{' '}
                        <br />
                        <del>mo di mi do</del> fr <del>sa so</del>
                        <br />
                        <span className={style.dates}>
                            <del>1 2 3 4 5 6 7</del> 8{' '}
                            <del>9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31</del>
                        </span>
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
                    {this.state.sendState === 'UNSENT'
                        ? <span>
                              <h1>Antwort (nicht zutreffendes streichen)</h1>
                              <Antwort antwort={ANTWORT} antwortState={this.state.antwort} onClick={this.toggleWord} />
                              {this.state.showHint
                                  ? <p className={style.hint}>erstmal oben was wegstreichen, dann abschicken!</p>
                                  : null}
                              <button className={style.button} onClick={this.send}>
                                  Antwort abschicken
                              </button>
                          </span>
                        : null}
                    {this.state.sendState === 'SENDING' ? <p>Antwort wird verschickt...</p> : null}
                    {this.state.sendState === 'SENT'
                        ? <p>
                              {this.state.response}
                          </p>
                        : null}
                    {this.state.sendState === 'ERROR'
                        ? <p>
                              Etwas ist schief gelaufen. Schreib uns doch:{' '}
                              <a href="mailto:luisetimur@volligohne.de">luisetimur@volligohne.de</a>
                          </p>
                        : null}
                </section>
            </div>
        );
    }

    toggleWord(row, word) {
        this.state.antwort[row][word] = !this.state.antwort[row][word];
        this.setState({
            antwort: this.state.antwort,
            isDirty: true,
            showHint: false,
        });
    }

    send() {
        if (!this.state.isDirty) {
            this.setState({
                isDirty: false,
                showHint: true,
            });

            return;
        }

        const antwortString = ReactDOMServer.renderToStaticMarkup(
            AntwortToSend({ antwort: ANTWORT, antwortState: this.state.antwort })
        );

        const XHR = sendData({
            email: this.guest.mail,
            name: this.guest.name,
            comment: antwortString,
        });

        this.setState({
            sendState: 'SENDING',
        });

        XHR.onreadystatechange = event => {
            if (XHR.readyState === 4) {
                if (XHR.status === 200) {
                    console.log('Yeah! Data sent and response loaded.', XHR);

                    this.setState({
                        sendState: 'SENT',
                        response: XHR.responseText,
                    });
                } else {
                    this.setState({
                        sendState: 'ERROR',
                    });
                }
            }
        };
    }
}

function Antwort({ antwort, antwortState, onClick }) {
    return (
        <p>
            {map(antwort, (row, rowidx) => {
                return (
                    <span key={rowidx}>
                        {map(row, (word, wordidx) => {
                            return (
                                <button
                                    className={classNames(style.antwort_word, {
                                        [style.antwort_word__ohne]: antwortState[rowidx][wordidx],
                                    })}
                                    key={wordidx}
                                    onClick={() => onClick(rowidx, wordidx)}
                                >
                                    {word}
                                </button>
                            );
                        })}
                        <br />
                    </span>
                );
            })}
        </p>
    );
}

function AntwortToSend({ antwort, antwortState }) {
    return (
        <p>
            {map(antwort, (row, rowidx) => {
                return (
                    <span key={rowidx}>
                        {map(row, (word, wordidx) => {
                            return (
                                <span key={wordidx}>
                                    {antwortState[rowidx][wordidx]
                                        ? <del>
                                              {word}{' '}
                                          </del>
                                        : <span>
                                              {word}{' '}
                                          </span>}
                                </span>
                            );
                        })}
                        <br />
                    </span>
                );
            })}
        </p>
    );
}

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Sending_forms_through_JavaScript

function sendData(data) {
    var XHR = new XMLHttpRequest();
    var urlEncodedData = '';
    var urlEncodedDataPairs = [];
    var name;

    // We turn the data object into an array of URL encoded key value pairs.
    for (name in data) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }

    // We combine the pairs into a single string and replace all encoded spaces to
    // the plus character to match the behaviour of the web browser form submit.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    // We setup our request
    XHR.open('POST', MAIL_SERVER);

    // We add the required HTTP header to handle a form data POST request
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // And finally, We send our data.
    XHR.send(urlEncodedData);

    return XHR;
}

// http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter

var QueryString = () => {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        // If first entry with this name
        if (typeof query_string[pair[0]] === 'undefined') {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === 'string') {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
};
