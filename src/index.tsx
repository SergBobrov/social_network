import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import {StateType} from "./redux/Store";
import {Provider} from "react-redux";


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// L
// earn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
}


rerenderEntireTree(store.getState())

// store.subscribe(() => rerenderEntireTree)

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

