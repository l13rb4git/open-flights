import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'


const Card = styled.div`
    background: #1a2960;
`

const AirlineLogo = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;

    img {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        border: 1px solid #efefef;
        background: #fff;
    }
`

const AirlineName = styled.div`
    padding: 20px 0 20px 0;
    font-family: 'Merriweather', serif;
`

const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;

    a {
        color: #000;
        background: #ffac05;
        border-radius: 4px;
        padding: 10px 50px;
        width: 100%;
        text-decoration: none;
    }
`


const Airline = (props) => {
  return (
    <Card>
      <AirlineLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </AirlineLogo>
      <AirlineName>{props.attributes.name}</AirlineName>
      <Rating score={props.attributes.avg_score}/>
      <LinkWrapper>
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Airline
