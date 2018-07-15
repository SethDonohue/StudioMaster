import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import "./css/master.css";

import rootReducer from './reducers/index.jsx';

import Home from './components/Home.jsx';
import Registration from './components/Registration.jsx';
import Profile from './components/Profile.jsx';
import Company from "./components/Company.jsx";
import Community from "./components/Community";
import Support from "./components/Support.jsx";
import Player from "./containers/player.jsx";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/support' component={Support} />
                    <Route path='/community' component={Community} />
                    <Route path='/company' component={Company} />
                    <Route path='/registration' component={Registration} />
                    <Route path='/profile/:id' component={Profile} />
                    <Route path='/' component={Home} />
                </Switch>
                <Player />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
