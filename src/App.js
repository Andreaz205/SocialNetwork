import React, {Component} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {Messages} from './components/Messages'
import './App.css';
import {NotFoundComponent} from './components/NotFoundComponent'
import {Homepage} from "./components/Homepage/Homepage";

import {LoginPage} from "./components/Login/LoginPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Header} from "./components/Header";
import {instance} from "./api/api";
import {login} from "./redux/auth-reducer";
import ChatPage from "./components/ChatPage";
import MyEnhancedForm from "./components/Registration/RegistrationPage";
import FriendsPage from "./components/Friends/FriendsPage";
import ProfilePage from "./components/Profile/ProfilePage";
import Profile from "./components/Profile/Profile";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return (


            <div className="main-wrapper">
                <Header />




                <div className="sidebar">
                    <nav>
                        <ul>
                            <li><Link to="/">About me</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/messages">Messages</Link></li>
                            <li><Link to="chat">Chat</Link></li>
                            <li><Link to="/friends">Friends</Link></li>

                        </ul>
                    </nav>
                </div>


                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Homepage/>}/>
                        <Route path="/messages" element={<Messages/>}/>

                        // нахуй не трогать!!!!
                        <Route path="/profile" element={<ProfilePage/>}>
                            <Route path="/profile/:userId" element={<Profile/>}/>
                        </Route>

                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/chat" element={<ChatPage/>}/>
                        <Route path="/registration" element={<MyEnhancedForm/>}/>
                        <Route path="/friends" element={<FriendsPage/>}/>
                        <Route path="*" element={<NotFoundComponent/>}/>
                    </Routes>
                </div>

                <div className="footer">
                    DESIGNED BY ANDREY BAZUNOV
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialaized: state.app.initialaized
})

let AppContainer = compose(connect(mapStateToProps, {initializeApp}))(App)

const AppWrapper = ()=>
{
    return <AppContainer />
}

export default AppWrapper;