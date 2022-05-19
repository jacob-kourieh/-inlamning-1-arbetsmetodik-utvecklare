import React from 'react'
import "./Alarm.module.scss";
import { Link } from "react-router-dom";
const alarm = require("../img/alarm.svg") as string;

function Alarm() {
    return (
        <section className="alarm-section">
            <img className="alarmPic" src={alarm} alt="" />
            <p className="timesUp">Times up!</p>

            <Link to={"/SetTimer"}>
                <button>SET NEW TIMER</button>
            </Link>
        </section>
    );
}
export default Alarm