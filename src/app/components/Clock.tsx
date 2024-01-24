// components/Clock.tsx
'use client'
import { useState, useEffect } from 'react';
import {DateTime} from 'luxon';
const Clock: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateClock = () => {
            const now = DateTime.local();
            const formattedTime = now.toLocaleString(DateTime.TIME_SIMPLE);
            setCurrentTime(formattedTime);
        };

        // Update the clock every second
        const intervalId = setInterval(updateClock, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 className="border-black border p-1">ITS CURRENTLY {currentTime} IN VANCOUVER, BC</h1>
        </div>
    );
};

export default Clock;
