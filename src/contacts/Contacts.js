import React from 'react';
import './Contacts.css';
import {GoogleApiWrapper} from 'google-maps-react';

export default class Contacts extends React.Component {
    render() {
        return (
            <section className='section section--contacts'>
                <div className="container">
                    <div className="contacts">
                        <div className="title">
                            Contacts
                        </div>
                        <a href="mailto:sdsdsd@sd.sd" className="link">
                            superMail@ss.com
                        </a>
                        <a href="tel:099099099" className="link">
                            099876578
                        </a>
                        <a href="https://linked.in" className="link">
                            Linkedin
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}