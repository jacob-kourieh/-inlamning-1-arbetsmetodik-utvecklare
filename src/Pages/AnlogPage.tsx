import React from 'react'
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useLocation } from "react-router-dom";

const sekund = require("../img/second.png") as string;
const clock = require("../img/clock.png") as string;
const timpekare = require("../img/minut.png") as string;


interface times {
    countdown?: boolean,
    seconds?: number,
    minutes?: number,
    hours?: number
}



const AnlogPage: React.FC<times> = () => {

    const location: object | any = useLocation();

    const time: object | any = location.state;

    const [timer] = useTimer({
        startValues: {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds
        }, countdown: true,
    });


    const [hours, setHours] = useState<string>("minutStop")
    const [sec, setSec] = useState<string>("secondStop")



    function start() {
        timer.start();
        setSec("secondPin")
        setHours("hourPin")
    };

    function pause() {
        timer.pause();
        setSec("secondPaus")
        setHours("hourPaus")

    };

    function stop() {
        timer.stop();

    };

    function reset() {
        timer.reset();
        window.location.reload()
    };


    const sek: number = timer.getTimeValues().seconds
    const min: number = timer.getTimeValues().minutes
    const hr: number = timer.getTimeValues().hours



    return (
        <section className="containerAT">

            <article className="section-clock">
                <img className="clockPic" src={clock} alt="" />
                <img className={sec} src={sekund} alt="" />
                <img className={hours} src={timpekare} alt="" />
            </article>

            <article className='btn'>
                <button onClick={() => start()}>start</button>
                <button onClick={() => pause()}>pause</button>
                <button onClick={() => stop()}>stop</button>
                <button onClick={() => reset()}>reset</button>
            </article>
        </section>

    )
}

export default AnlogPage;