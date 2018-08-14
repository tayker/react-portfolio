import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/works">
                    Works
                </Link>
                <Link to="/contacts">
                    Contacts
                </Link>
            </nav>
        )
    }
}