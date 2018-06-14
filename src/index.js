import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ItemsPage from './ItemsPage.js';
import { BrowserRouter } from 'react-router-dom';
import Items from './Items.js';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
