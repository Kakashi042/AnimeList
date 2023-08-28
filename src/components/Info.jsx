import React from 'react'
import '../styles/Info.scss'

const Info = () => {
  return (
    <div className='info'>
        <h1>Description on the project</h1>
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
            <li>Infinte scroll with async load for home page and search page</li>
            <li>Hooks: useState, useEffect, useSelector, useDispatch, useParams</li>
        </ul>
    </div>
  )
}

export default Info