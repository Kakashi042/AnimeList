import React from 'react'
import '../styles/Info.scss'

const Info = () => {
  return (
    <div className='info'>
        <h1>Information</h1>
        <hr />
        <p>
            I had fun while making the project. Some lorem dipsum blah blah....
        </p>
        <p>
            The below are the features with which the project has been deployed
        </p>
        <ul>
            <li>Routing</li>
            <li>Redux state management</li>
            <li>Async Thunk</li>
            <li>Infinty scroll with async load</li>
        </ul>
    </div>
  )
}

export default Info