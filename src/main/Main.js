import React from 'react';
import Home from '../home/Home';
import Works from '../works/Works';
import Contacts from '../contacts/Contacts';
import Header from '../header/Header';
import {AnimatedSwitch} from 'react-router-transition';
import {Route} from 'react-router-dom';

export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper">
                    <Route exact path='/' component={Home}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/works' component={Works}/>
                </AnimatedSwitch>
            </React.Fragment>
        )
    }
}