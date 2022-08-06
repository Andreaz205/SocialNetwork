import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../redux/auth-selector";
import {logout} from "../redux/auth-reducer";
import {Link, useHistory} from "react-router-dom";
import {Redirect} from 'react-router-dom'
import {instance} from "../api/api";
import {LoginPage} from "./Login/LoginPage";
import {Homepage} from "./Homepage";
import { useNavigate } from 'react-router-dom';

const Header = () =>
{
    const isAuth = useSelector(selectIsAuth)
    const navigate = useNavigate()

    let someFunction = () => {
        console.log('Функция сработала')
        navigate('/login')
    }

    // const dispatch = useDispatch()
    // const logoutCallback = () => {
    //     dispatch(logout())
    // }
    return(


        <div className="header">
            <div>
                {!isAuth ?
                        <div>
                            BazunoffChat
                            <button><Link to={"/login"}>logout</Link></button>
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
