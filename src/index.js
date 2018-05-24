import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import rootReducer from './reducers/index.jsx';
// import registerServiceWorker from './registerServiceWorker';

import Home from './components/Home.jsx';
import Registration from './components/Registration.jsx';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/registration' component={Registration} />
                    <Route path='/' component={Home} />
                </Switch>    
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
// registerServiceWorker();
