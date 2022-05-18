import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

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
                <h4>Hours</h4>
                <article>
                    <h1 onClick={() => setHours(hours - 1)}> knapp </h1>
                    <p>{hours}</p>
                    <h1 onClick={() => setHours(hours + 1)}> knapp </h1>
                </article>

                <h4>Minutes</h4>
                <article>
                    <h1 onClick={() => setMinutes(minutes - 1)}> knapp </h1>
                    <p>{minutes}</p>
                    <h1 onClick={() => setMinutes(minutes + 1)}> knapp </h1>
                </article>

                <h4>Seconds</h4>
                <article>
                    <h1 onClick={() => setSeconds(seconds - 1)} > knapp </h1>
                    <p>{seconds}</p>
                    <h1 onClick={() => setSeconds(seconds + 1)} > knapp </h1>
                </article>

            </section>


            <section>
                <Link state={setTime} to={"/Anlog"}>
                    <h1>to anlog</h1>
                </Link>

                <Link state={setTime} to={"/Digital"}>
                    <h1>to digital</h1>
                </Link>
            </section>
        </div>
    );
}

export default SetTimerPage;