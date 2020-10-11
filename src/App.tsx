import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/NavBar/Nav";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {Users} from "./components/Users/Users";


type PropsType = {
    store: any
}


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/users' render={() => <div><Users/></div>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
