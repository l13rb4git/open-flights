import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
`

const RatingContainer = styled.div`
`

const RatingScore = styled.div`
`

const Title = styled.div`
`

const Description = styled.div`
`


const Review = (props) => {
  return (
    <Card>
      <RatingContainer>
        <RatingScore></RatingScore>
      </RatingContainer>
      <Title></Title>
      <Description></Description>
    </Card>
  )
}

export default Review
