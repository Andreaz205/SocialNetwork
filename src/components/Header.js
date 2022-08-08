import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth-selector";
import {authActions, logout} from "../redux/auth-reducer";
import {Link, useHistory} from "react-router-dom";
import {Redirect} from 'react-router-dom'
import {instance} from "../api/api";
import {LoginPage} from "./Login/LoginPage";
import {Homepage} from "./Homepage/Homepage";
import { useNavigate } from 'react-router-dom';


const Header = () =>
{
    const navigate = useNavigate()
    const isAuth = useSelector(state=> state.auth.isAuth)
    // const navigate = useNavigate()

    // let onLogoutClick = () => {
    //     console.log('Функция сработала')
    //     navigate('/login')
    // }

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return(


        <div className="header">
            <div>
                {isAuth ?
                        <div>
                            BazunoffChat
                            <button onClick={handleLogout}>logout</button>
                            {/*<Link to={"/login"}>logout</Link>*/}

                        </div>
                    :
                        <button>
                            <Link to="/login ">
                                login
                            </Link>
                        </button>
                }
            </div>
        </div>
    )
}

export  {Header};
