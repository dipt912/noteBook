import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';


const reduxApp = (
    <Provider store={createStore(reducer, applyMiddleware(ReduxThunk))}>
        <App/>
    </Provider>
)
ReactDOM.render(reduxApp, document.getElementById('root'));
registerServiceWorker(); 
