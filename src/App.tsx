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
import {StoreType} from './redux/State';
import {Friends} from './components/Friends/Friends';


type AppType = {
    store: StoreType
}


const App = (props: AppType) => {

    let state = props.store.getState();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/Dialogs' render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                    <Route path='/Friends' render={() => <Friends friendData={state.sideBar.friends}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
