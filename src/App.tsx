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
import { RootStateType } from './redux/State';


/*type AppPropsType = {
    personsData: Array<{
        id: number
        name: string
    }>,
    messagesData: Array<{
        id: number
        text: string
    }>,
    postsData: Array<{
        id: number
        text: string
        likeCount: number
}
    }>*/

type AppType = {
    appState: RootStateType
}


const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile postsData={props.appState.postsData}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs personsData={props.appState.personsData} messagesData={props.appState.messagesData}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
