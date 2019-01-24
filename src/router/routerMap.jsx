import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from '../store/index';
import {store, persistor} from '../store/index';
import { PersistGate } from 'redux-persist/integration/react'
import Home from '../containers/Home';
import City from '../containers/City';
import Search from '../containers/Search';
import User from '../containers/User';
import Detail from '../containers/Detail';
import NotFound from '../containers/404';

class RouterMap extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HashRouter>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/city" exact component={City}></Route>
                            <Route path="/user" exact component={User}></Route>
                            {/* /search 是路径， /:type 是必选参数，/:keyword? 是可选参数 */} 
                            <Route path="/search/:type/:keyword?" exact component={Search}></Route>
                            <Route path="/detail" exact component={Detail}></Route>
                            <Route exact component={NotFound}></Route>
                        </Switch>
                    </HashRouter>
                </PersistGate>
            </Provider>
        )
    }
}

export default RouterMap;



