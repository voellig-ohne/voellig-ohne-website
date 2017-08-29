import React from 'react';
import sternchen from './sternchen.png';

function MailWrapper({ children }) {
    return (
        <div
            style={{
                background: '#f8f9f6',
                fontFamily: 'courier new,courier',
            }}
        >
            <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
                <img src={sternchen} style={{ width: '40px' }} />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <div style={{ background: 'white', margin: '1rem', padding: '1rem', maxWidth: '700px' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MailWrapper;
