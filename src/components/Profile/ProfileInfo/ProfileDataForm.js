import {Formik} from "formik";
import s from "../ProfileInfo/ProfileInfo.module.css"

const ProfileDataForm =(onSubmit, initialValues, profile) => {
    return <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
    >
        {props =>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <button type='submit'>save</button>
                    {props.errors}
                </div>

                <div>{props.errors}</div>

                <div>
                    <b>Full name</b>: <input />
                </div>

                <div>
                    <b>Looking for a job</b>: <input type='checkbox'/>
                </div>

                <div>
                    <b>My professional skills</b>: <textarea />
                </div>

                <div>
                    <b>About me</b>: <textarea />
                </div>

                <div>
                    <b>Contacts</b>: {
                    Object.keys(profile.contacts)
                        .map((key)=>{
                            return <div key={key} className={s.contact}>
                                <b>{key}:<input /></b>
                            </div>
                        })
                    }
                </div>




            </form>
        }

    </Formik>

}

export default ProfileDataForm