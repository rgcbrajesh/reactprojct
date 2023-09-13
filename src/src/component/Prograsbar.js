import React from 'react'

export default function Prograsbar(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h5>HTML</h5>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width:"99%"}}>99%</div>
            </div>
            <h5>CSS</h5>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width:"90%"}}>90%</div>
            </div>
            <h5>JavaScript</h5>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width:"70%"}}>70%</div>
            </div>
            <h5>ReactJS</h5>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width:"50%"}}>50%</div>
            </div>
            <h5>Bootstrap</h5>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width:"80%"}}>80%</div>
            </div>
        </div>
    )
}
