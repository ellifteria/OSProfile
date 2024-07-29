import React, { useState, useEffect } from 'react'

const DateTime = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date(), 1000));

        return function cleanup() {
            clearInterval(timer);
        }
    });

    return(
        <p>{date.toLocaleDateString()} | {date.toLocaleTimeString()}</p>
    )
}

export default DateTime;
