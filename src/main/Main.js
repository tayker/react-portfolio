import React from 'react';
import Home from '../home/Home';
import Works from '../works/Works';
import Contacts from '../contacts/Contacts';
import Header from '../header/Header';
import {Switch, Route} from 'react-router-dom';

export default class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/works' component={Works}/>
                </Switch>
            </React.Fragment>
        )
    }
}