import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import './_next-prev.less';

export default class NextPrev extends React.Component {
    render() {
        const props = this.props;
        return (
            <nav className="vo_next_prev">
                <div className="vo_next_prev-prev">
                    <Link to={prefixLink(props.next.path)}>vorheriges</Link>
                </div>
                <div>
                    <div>
                        Gefällt? <a href="mailto:luisetimur@volligohne.de">Schreib uns!</a>
                    </div>
                </div>
                <div className="vo_next_prev-next">
                    <Link to={prefixLink(props.prev.path)}>nächstes</Link>
                </div>
            </nav>
        );
    }
}
