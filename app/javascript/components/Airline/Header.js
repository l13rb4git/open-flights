import React from 'react'
import styled from 'styled-components'


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
        <TotalOutOf>{avg_score} out 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header
