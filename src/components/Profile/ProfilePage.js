import React, {useEffect} from "react";
import Profile from "./Profile";
import {Navigate, useParams, useNavigate} from "react-router-dom";
import {Outlet} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";

const ProfilePage = () => {

    let navigate = useNavigate()

    const dispatch = useDispatch()
    let params = useParams()

    let AuthorizedUserId = useSelector((state) => state.auth.userId)
    let status = useSelector((state) => state.profile.status)
    let profile = useSelector((state) => state.profile.profile)
    let userId = params.userId
    console.log(params)


    let refreshPage = () => {
        if (!userId && !AuthorizedUserId) {
            console.error("ID should exists in URL params or in state ('authorizedUserId')")
            // return <Navigate to='/login' replace={true} />
            navigate('/login')
        }
        // здесь должны быть thunk
    }

    useEffect(()=>{
        refreshPage()
    },[dispatch, userId] )

    let isOwner = !userId



    return (
        <>
            <div>Это страница профиля</div>
            <Outlet context={{profile, status, isOwner, params, userId}}/>
        </>
    )
}


export default ProfilePage