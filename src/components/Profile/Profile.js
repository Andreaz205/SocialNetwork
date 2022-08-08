import React from 'react';
import {useOutletContext} from 'react-router-dom'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>
{
    const context = useOutletContext()

    return(
        <div>
            <ProfileInfo profile={context.profile}/>
            {context.userId}
            <br />
            ЧЁТКАЯ СТРАНИЦА
        </div>
    )
}

export  default Profile