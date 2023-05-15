import React from 'react'
import Styles from "./Timeline.module.css"

const Timeline = (props: any) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.wrapper}>
                <ul className={Styles.sessions}>
                    <li className={Styles.list}>
                        <div className={Styles.time}>{props?.name}</div>
                        <p className={Styles.plist}>{props?.location}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Timeline