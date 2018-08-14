import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/stylesheet.css';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
