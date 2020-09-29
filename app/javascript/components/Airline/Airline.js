import React, { useState, useEffect } from 'react'


const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})


  useEffect(() => {
    const slug = props.match.params.slug
    const url = `api/v1/airlines/${slug}`
  }, [])

  return <div>Airlines#Show </div>
}

export default Airline
