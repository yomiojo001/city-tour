import React from 'react';
import { usePosition } from 'use-position';

export function Location () {

    const{ latitude, longitude, timestamp, accuracy, error } = usePosition(true);

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

export const location = {latitude: this.latitude, longitude: this.longitude}

