import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/NavBar/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {StateType} from './redux/State';
import { Friends } from './components/Friends/Friends';


type AppType = {
    appState: StateType
    addPost: () => void
    updateNewPostText: (s: string) => void
}


const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile postsData={props.appState.profilePage.postsData}
                                                                  addPost = {props.addPost}
                                                                  newPostText = {props.appState.profilePage.newPostText}
                                                                  updateNewPostText = {props.updateNewPostText}
                    />}/>
                    <Route path='/Dialogs' render={() => <Dialogs personsData={props.appState.dialogsPage.personsData}
                                                                  messagesData={props.appState.dialogsPage.messagesData}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Friends' render={() => <Friends friendData={props.appState.sideBar.friends}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
