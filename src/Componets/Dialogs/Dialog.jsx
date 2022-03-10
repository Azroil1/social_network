import React from "react";
import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let paht = "/dialog/" + props.id;
    return <div className={classes.dialog}>
        <NavLink to={paht}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
     return <div className={classes.dialog}>{props.message}</div>
}

const Dialog = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
              <DialogItem name = "Mark" id = "1"/>
                <DialogItem name = "Bulat" id = "2"/>
                <DialogItem name = "Renat" id = "3"/>
                <DialogItem name = "Radmir" id = "4"/>
            </div>
            <div className={classes.messages}>
                <Message message = "Hi"/>
                <Message message = "This dialog"/>
                <Message message = "How are you&"/>
            </div>
        </div>
    )
}

export default Dialog;