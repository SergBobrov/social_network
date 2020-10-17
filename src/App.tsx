import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/NavBar/Nav";
import {Profile} from "./components/Profile/Profile";
import {Route, Switch, Redirect} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import UsersContainer from './components/Users/UsersContainer';


const App = () => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path={"/"} exact render={() => <Profile/>}/>
                        <Route path='/profile' render={() => <Profile/>}/>
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        <Route path='/friends' render={() => <FriendsContainer/>}/>
                        <Route path='/users' render={() => <div><UsersContainer/></div>}/>
                    </Switch>
                </div>
            </div>
    );
};


export default App;
