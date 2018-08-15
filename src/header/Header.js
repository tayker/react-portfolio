import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {direction: '', lastScrollPos: 0,
            routesLink: [
                { id: 0, path: '/', title: 'Home'},
                { id: 1, path: '/works', title: 'Works'},
                { id: 2, path: '/contacts', title: 'Contacts'}]
        };
    }
    componentDidMount() {
        window.addEventListener('wheel', (e) => this.changeNavLink(e));
    }
    componentWillUnmount() {
        window.removeEventListener('wheel', () => this.changeNavLink);
    }
    changeNavLink(e) {
        if(e.deltaY < 0) {
            console.log(window.location)
        } else {
            console.log('down')
        }
    }
    render() {
            let routesLink = this.state.routesLink;
            const routesLinkRender = routesLink.map((item) => {
               return (
                   <NavLink key={item.id} exact to={item.path}>
                       {item.title}
                   </NavLink>
               )
            });
        return (
            <header>
                <nav>
                    {routesLinkRender}
                </nav>
            </header>
        )
    }
}