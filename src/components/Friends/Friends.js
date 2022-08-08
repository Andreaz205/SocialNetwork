import React, {useEffect} from "react";
import Friend from "./Friend";
import {useDispatch, useSelector} from "react-redux";
import Paginator from "../common/Pginator/Paginator";
import {friendsApi} from "../../api/friends-api";
import {requestUsers} from "../../redux/friends-reducer";

const Friends = () => {

    const dispatch = useDispatch()

    let friends = useSelector((state) => state.friends.friends)
    let currentPage = useSelector((state) => state.friends.currentPage)
    let pageSize = useSelector((state) => state.friends.pageSize)
    let totalItemsCount = useSelector(state => state.friends.totalItemsCount)

    const onPageChanged = (pageNumber) => {
        dispatch(requestUsers(pageSize, pageNumber))
    }

    useEffect(() => {
        dispatch(requestUsers(pageSize, 1))
    },[])

    return <div>
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount}
            pageSize={pageSize}
        />
        <div>
            {friends.map((f) => <Friend
                name={f.email}
                key={f._id}
                isActivated={f.isActivated}
                // photo={f.photo}
            />)}
        </div>
    </div>
}

export default Friends