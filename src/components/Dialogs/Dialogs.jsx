import React from 'react';
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    return (
        <div className={d.dialog}>
            <NavLink to={'/dialogs/' + props.id}><img
                src="https://t4.ftcdn.net/jpg/04/98/77/71/360_F_498777116_uKag8YBb0UIA5b3Tr3ioYUkhxGm7jyRL.jpg"/>{props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={d.message}>
            <div className={d.itemMessage}>
                {props.message}
            </div>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={d.mainMessenger}>
            <div className={d.dialogs}>
                <DialogItems name="Danya Lila" id="1"/>
                <DialogItems name="Vanya Grozniy" id="2"/>
                <DialogItems name="Dasha Nikifirova" id="3"/>
                <DialogItems name="Yasha Molodoi" id="3"/>
                <DialogItems name="Dima Puha" id="3"/>
                <DialogItems name="Lena Sakara" id="3"/>
            </div>
            <div className={d.messages}>
                <Message message="Hi!"/>
                <Message message="Hi, how are you?"/>
                <Message message="I`am fine, and You?"/>
            </div>

        </div>

    )
}

export default Dialogs;