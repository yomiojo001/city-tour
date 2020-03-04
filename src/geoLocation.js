import React from 'react';
import { usePosition } from 'use-position';

export default function Position () {

    const{ latitude, longitude, timestamp, accuracy, error } = usePosition(true);

    // console.log('longitude', longitude)

    return (
        <div>
            latitude: {latitude}
            longitude: {longitude}
            timestamp: {timestamp}
            accuracy: {accuracy}
            error: {error}
        </div>
    )
}


