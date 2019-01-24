// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk))); 
export const persistor = persistStore(store);  