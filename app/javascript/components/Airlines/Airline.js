import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const Airline = (props) => {
    return (
        <div class="card">
            <div class="airline-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </div>
            <div class="airline-name">{props.attributes.name}</div>
            <div class="airline-score">{props.attributes.avg_score}</div>
            <div class="airline-link">
                <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
            </div>
        </div>
    )
}

export default Airline
