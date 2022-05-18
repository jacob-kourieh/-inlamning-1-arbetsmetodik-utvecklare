import React from 'react'
import useTimer from 'easytimer-react-hook';
import { useLocation } from "react-router-dom";
import "./DigitalPage.module.scss";
import Alarm from '../Components/Alarm';

interface times {
    countdown?: boolean,
    seconds?: number,
    minutes?: number,
    hours?: number
}



const DigitalPage: React.FC<times> = () => {

    const location: object | any = useLocation();

    const time: object | any = location.state;

    const [timer] = useTimer({
        startValues: {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds
        }, countdown: true,
    });

    const sec: number = timer.getTimeValues().seconds
    const min: number = timer.getTimeValues().minutes
    const hr: number = timer.getTimeValues().hours



    function start() {
        timer.start();
    };

    function pause() {
        timer.pause();

    };

    function stop() {
        timer.stop();
    };

    function reset() {
        window.location.reload()
    };




    return (
        <section className="digital-container">


            <article>
                <h2 className="any" >{timer.getTimeValues().toString()}</h2>
                {
                    time.seconds === 0 &&
                        time.minutes < 1 ? (
                        <Alarm />
                    ) : null}
            </article>

            <article className='btn'>
                <button onClick={() => start()}>start</button>
                <button onClick={() => pause()}>pause</button>
                <button onClick={() => stop()}>stop</button>
                <button onClick={() => reset()}>reset</button>
            </article>

        </section>

    );
}

export default DigitalPage;