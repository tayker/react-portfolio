import React, { Component } from 'react';
import './App.css';
import Main from './main/Main';

import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className='mainWrapper'>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
