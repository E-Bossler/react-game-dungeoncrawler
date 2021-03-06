import React from 'react'
import Player from '../player'
import Map from '../map'

export default function World(props) {
    return (
        <div
            style = {{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto'
            }}
        >
            <Map />
            <Player />
        </div>
    )
}