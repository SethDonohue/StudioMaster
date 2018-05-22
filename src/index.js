import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import SignUp from './containers/sign_up';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/registration' component={SignUp} />
                    <Route path='/' component={App} />
                </Switch>    
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
