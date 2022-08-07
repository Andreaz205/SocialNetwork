import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Formik, Field, Form} from "formik";
import "./LoginPage.css"
import {login} from "../../redux/auth-reducer";
import Preloader from "../../assets/Preloader";


const LoginPage = () =>
{
    const dispatch = useDispatch();
    const isAuth = useSelector((state)=>state.auth.isAuth)

    return(
        <>
            {isAuth ?  //здесь не доделал нужно после показа прелоадера отправить санку и после ответа сервера задиспатчить его в стор и скрыть прелоадер
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
                        dispatch(login(fields))

                    }}
                >
                    {() => (
                        <Form>
                            <label className="login_form" htmlFor="email">LOGIN</label>

                            <Field className="login_form" name="email" type="email" id="email"/>

                            <label className="login_form" htmlFor="password">PASSWORD</label>

                            <Field className="login_form" name="password" type="password" id="password"/>

                            <div className="login_form">
                                <span>Запомнить меня</span>
                                <Field name="rememberMe" type="checkbox"/>
                            </div>

                            <button className="login_form" type="submit"> ВОЙТИ</button>
                            {/*<button className="login_form"  onClick={registrationCallback}>Регистрация</button>*/}
                        </Form>

                    )}
                </Formik>
            }
        </>
    )
}


export   {LoginPage}