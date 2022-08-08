import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Formik, Field, Form} from "formik";
import s from "./LoginPage.module.css"
import {authActions, login} from "../../redux/auth-reducer";
import Preloader from "../../assets/Preloader";
import {useNavigate} from "react-router-dom";

const LoginPage = () =>
{

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isAuthorized = useSelector(state => state.auth.isAuth)
    const isFetching = useSelector((state)=>state.auth.isFetching)
    const registrationCallback = () => {
        navigate('/registration', {replace: true})
    }

    useEffect(()=> {
        if (isAuthorized) {
            return navigate('/profile', {replace: true})
        }
    })


    return(
        <>
            {isFetching ?  //здесь не доделал нужно после показа прелоадера отправить санку и после ответа сервера задиспатчить его в стор и скрыть прелоадер
                (<Preloader/>)
                :
                <Formik
                    initialValues={{
                        email: 'email',
                        password: '',
                        rememberMe: false
                    }}
                    onSubmit={(fields) => {
                        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                        // dispatch(login(fields))

                        let login = 'email52@mail.ru'
                        let password = '123'
                        let isAuth = true
                        let userId = '62f90cb1e07b59137a5c8111'
                        let isActivated = false
                        dispatch(authActions.setAuthUserData(login, password, isActivated, userId, isAuth))

                    }}
                >
                    {() => (
                        <Form>
                            <label className={s.form} htmlFor="email">LOGIN</label>

                            <Field className={s.form} name="email" type="email" id="email"/>

                            <label className={s.form} htmlFor="password">PASSWORD</label>

                            <Field className={s.form} name="password" type="password" id="password"/>

                            <div className={s.form}>
                                <span>Запомнить меня</span>
                                <Field name="rememberMe" type="checkbox"/>
                            </div>

                            <button className="login_form" type="submit"> ВОЙТИ</button>

                        </Form>

                    )}
                </Formik>
            }
            <button className="login_form"  onClick={registrationCallback}>Регистрация</button>
        </>
    )
}


export   {LoginPage}