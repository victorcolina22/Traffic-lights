import React from 'react';
import {useState} from 'react';

function TrafficLights() {

    const [state, setState] = useState({
        Color: null,
    })

    return (
        <>
        <div id='trafficTop'></div>
        <div id='trafficBody'>
            <div className={'red' + (state.Color === 'red' ? ' light' : '')} onClick={() => setState({...state,Color: 'red'})}></div>
            <div className={'yellow' + (state.Color === 'yellow' ? ' light' : '')} onClick={() => setState({...state,Color: 'yellow'})}></div>
            <div className={'green' + (state.Color === 'green' ? ' light' : '')} onClick={() => setState({...state,Color: 'green'})}></div>
        </div>
        </>
    )
}

export default TrafficLights;