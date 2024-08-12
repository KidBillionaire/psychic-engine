
import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timerId);
        } else {
            if (onTimeUp) {
                onTimeUp();
            }
        }
    }, [timeLeft, onTimeUp]);

    const progressPercentage = (timeLeft / duration) * 100;

    return (
        <div className="timer-container">
            <div className="progress-bar" style={{ width: progressPercentage + '%' }}></div>
            <div className="time-left">
                {timeLeft}s
            </div>
        </div>
    );
};

export default Timer;
