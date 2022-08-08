import React from "react";
import s from './Friends.module.css'

const Friend = (props) => {
    return <div className={s.friend} >

        <div>
            <img src={props.photo} width="100px" />
        </div>
        {props.name}
        <br />
        {!props.isActivated && <span >Не активирован</span>}

    </div>
}

export default Friend