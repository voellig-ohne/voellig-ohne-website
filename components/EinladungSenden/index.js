import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { map } from 'lodash';
import classNames from 'classnames';
import MailWrapper from '../MailWrapper';

import ADRESSEN from './adressen.json';

const MAIL_SERVER = '/sendmail.php/';

export default class Einladung extends React.Component {
    constructor(props) {
        console.log(ADRESSEN);
        super(props);
        this.state = {
            response: '',
        };
        this.send = this.send.bind(this);
    }
    render() {
        return (
            <div className="vo-section_wrapper">
                <section className="vo-section">
                    <p>
                        {this.state.response}
                    </p>
                    {map(ADRESSEN, (user, idx) => {
                        return (
                            <button style={{ display: 'block' }} key={idx} onClick={() => this.send(user)}>
                                {user.name}
                            </button>
                        );
                    })}
                </section>
            </div>
        );
    }
    send({ mail, name, link }) {
        console.log(link);
        const antwortString = ReactDOMServer.renderToStaticMarkup(AntwortToSend({ mail, name, link })).replace(
            '&amp;name',
            '&name'
        );

        console.log(antwortString);

        const XHR = sendData({
            email: mail,
            name: name,
            comment: antwortString,
            subject: 'völlig ohne Einladung zur Werkschau',
            isReply: false,
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

function AntwortToSend({ name, link }) {
    return (
        <div>
            <MailWrapper>
                <p style={{ marginTop: 0 }}>
                    Hallo {name},
                </p>
                <p>Hiermit laden wir Dich ein zu unserer Werkschau am 8. September.</p>
                <p>
                    Bitte klicke <a href={link}>hier</a>, um zu- oder abzusagen.
                </p>
                <p>Bis dahin</p>
                <p>völlig ohne Grüße</p>
                <p style={{ marginBottom: 0 }}>Timur & Luise</p>
            </MailWrapper>
        </div>
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
