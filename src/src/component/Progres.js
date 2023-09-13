import React from 'react'

export default function Progres(props) {
  return (
    <div>
       <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width:'{props.progres}'}}>99%</div>
            </div>
    </div>
  )
}
