import React, {Component} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {Messages} from './components/Messages'
import './App.css';
import {NotFoundComponent} from './components/NotFoundComponent'
import {Homepage} from "./components/Homepage";
import {ProfilePage} from "./components/Profilepage";
import {LoginPage} from "./components/Login/LoginPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Header} from "./components/Header";
import {instance} from "./api/api";
import {login} from "./redux/auth-reducer";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return (


            <div className="main-wrapper">
                <Header />


                <div className="header">

                    <div>
                        BazunoffChat
                        <button> logout < /button>
                    </div>


                </div>

                <div className="sidebar">
                    <nav>
                        <ul>
                            <li><Link to="/">About me</Link></li>
                            <li><Link to="/messages">Messages</Link></li>
                            <li><Link to="/profile ">Profile</Link></li>
                            <li><Link to="/login ">Login</Link></li>

                        </ul>
                    </nav>
                </div>


                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Homepage/>}/>
                        <Route path="/messages" element={<Messages/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
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