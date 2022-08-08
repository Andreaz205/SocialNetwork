 import React from "react";
 import { withFormik } from 'formik';
 import  s from "./Registration.module.css"

const RegistrationPage = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    }  = props
    return (
          <div>
              <span className={s.form}>РЕГИСТРАЦИЯ</span>
              <form onSubmit={handleSubmit} >
                  <input
                      className={s.form}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      name="email"
                  />
                  <input
                      className={s.form}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      name="password"
                  />
                  <button
                      className={s.form}
                      type="submit"
                  >
                      Login
                  </button>
              </form>
          </div>
      )
}

const MyEnhancedForm = withFormik({
    mapPropsToValues: ()=>({
        email:'',
        password:''
    }),

    validate: values => {
        const errors = {}

        if (!values.email) {
            errors.email = 'Required'
        }

        if (!values.password) {
            errors.password = 'Required'
        }
        return errors
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(()=>{
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 1000)
    },

    displayName: 'BasicForm',

})(RegistrationPage)

 export default MyEnhancedForm