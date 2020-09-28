import React from 'react'


const Airline = (props) => {
    return (
        <div class="card">
            <div class="airline-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </div>
            <div class="airline-name">{props.attributes.name}</div>
            <div class="airline-score">{props.attributes.avg_score}</div>
            <div class="airline-link">
                <a href={`/airlines/${props.attributes.slug}`}>View Airline</a>
            </div>
        </div>
    )
}

export default Airline
