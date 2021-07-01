import React, { useState } from 'react'
import "./Notification.scss";

interface NotificationProps {
    message: string;
    delay?: number;
    hide: () => void;
}

const Notification: React.FC<NotificationProps> = (props) => {
    const [timeUp, setTimeUp] = useState(false);
    const delay = props.delay ? props.delay / 3 : 300;

    setTimeout(() => {
        setTimeUp(true);

        // setTimeout(() => {
        //     setTimeUp(false);
        //     setTimeout(() => {
        //         props.hide();
        //     }, delay)
        // }, delay)
    }, delay)

    // setTimeout(() => {
    //     setTimeUp(true);
    //     props.hide();
    // }, props.delay ?? 300);


    return (
        <div className={(!timeUp ? "show " : "") + "Notification"}>
            <p>{props.message}</p>
        </div>
    )
}

export default Notification
