import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import "./SetTimerPage.module.scss";


function SetTimerPage() {
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)

    const setTime: object = {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }


    return (
        <div>
            <section className="setTime">
                <h2>Hours</h2>
                <article className='hours'>
                    <h4 onClick={() => setHours(hours - 1)}>  ◀︎  </h4>
                    <h1>{hours}</h1>
                    <h4 onClick={() => setHours(hours + 1)}>  ▶︎ </h4>
                </article>

                <h2>Minutes</h2>
                <article className='minuts'>
                    <h4 onClick={() => setMinutes(minutes - 1)}> ◀︎ </h4>
                    <h1>{minutes}</h1>
                    <h4 onClick={() => setMinutes(minutes + 1)}> ▶︎ </h4>
                </article>

                <h2>Seconds</h2>
                <article className='seconds'>
                    <h4 onClick={() => setSeconds(seconds - 1)} > ◀︎ </h4>
                    <h1>{seconds}</h1>
                    <h4 onClick={() => setSeconds(seconds + 1)} > ▶︎ </h4>
                </article>

            </section>


            <section className='btn'>
                <Link state={setTime} to={"/Anlog"}>
                    <button>To Anlog</button>
                </Link>

                <Link state={setTime} to={"/Digital"}>
                    <button>To Digital</button>
                </Link>
            </section>
        </div>
    );
}

export default SetTimerPage;