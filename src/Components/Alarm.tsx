import React from 'react'
import "./Alarm.module.scss";
const alarm = require("../img/alarm.svg") as string;

function Alarm() {
    return (
        <section className="alarm-section">
            <img className="alarmPic" src={alarm} alt="" />
            <p className="timesUp">Times up!</p>
        </section>
    );
}
export default Alarm