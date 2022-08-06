import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Formik, Field, Form} from "formik";
import "./LoginPage.css"
import {login} from "../../redux/auth-reducer";


const LoginPage = () =>
{
    const dispatch = useDispatch();
    return(
        <Formik
            initialValues={{
                login: 'email/phone',
                password: '',
                rememberMe: false
            }}
            onSubmit={(fields, {setSubmitting}) =>{
                setTimeout(() => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    login(...fields, false)
                    setSubmitting(false)


                    login(2,4,0,0)


                }, 1000);
            }}
        >
            {() => (
                <Form>
                    <label className="login_form" htmlFor="login">LOGIN</label>

                    <Field className="login_form" name="login" type="email" id="login"/>

                    <label className="login_form" htmlFor="password">PASSWORD</label>

                    <Field className="login_form" name="password" type="password" id="password" />

                    <div className="login_form">
                        <span>Запомнить меня</span>
                        <Field  name="rememberMe" type="checkbox" />
                    </div>

                    <button className="login_form" type="submit" > ВОЙТИ </button>
                </Form>
            )}
        </Formik>
    )
}
            {/*handleSubmit, handleChange, handleBlur, values, errors onSubmit={handleSubmit*/}
{/*//         <div className="loginFormWrapper" style={{margin: 10}}>*/}
{/*//             <form>*/}
{/*//                 <label id="login">Введите логин</label>*/}
{/*//                 <br />*/}
{/*//                 <input type="email" name="login" />*/}
{/*//                 <br />*/}
{/*//                 <label id="password">Введите пароль</label>*/}
{/*//                 <br />*/}
{/*//                 <input name="password"/>*/}
{/*//                 <br />*/}
{/*//                 <input type="submit"/>*/}
{/*//             </form>*/}
{/*//         </div>*/}
{/*//     )*/}
{/*// }*/}

export   {LoginPage}