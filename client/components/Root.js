import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux'

import All from './user/All';
import Edit from './user/Edit';
import Create from './user/Create';
import Show from './user/Show';
import {Provider} from 'react-redux';
import store from './../store/store.js';
import history from './../store/history';

class Root extends Component {
    render(){
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path='/' component={All}/>
                        <Route path='/edit/:id' component={Edit}/>
                        <Route path='/create' component={Create}/>
                        <Route path='/show/:id' component={Show}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root;