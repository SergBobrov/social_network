import state, {StateType, subscribe} from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateNewPostText} from "./redux/State";


let rerenderEntireTree = (state: StateType ) => {
    console.log('rerenderEntireTree в index');
    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />


        </React.StrictMode>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// L
// earn more about service workers: https://bit.ly/CRA-PWA

    serviceWorker.unregister();
}


rerenderEntireTree(state)

subscribe(rerenderEntireTree)


