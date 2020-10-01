import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'


const Wrapper = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 30px;
    
    img {
        height: 80px;
        width: 80px;
        border-radius: 100%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: -8px;
    }

    h1 {
        font-family: 'Merriweather', serif;
    }
`

const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`

const StarRating = styled.div`
`

const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`


const Header = (props) => {
  const {name, image_url, avg_score} = props.attributes
  const numberOfReviews = props.reviews.length

  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name}/>
        {name}
      </h1>
      <div>
        <TotalReviews>{numberOfReviews} User Reviews</TotalReviews>
        <StarRating></StarRating>
        <Rating score={avg_score}/>
      </div>
    </Wrapper>
  )
}

export default Header
