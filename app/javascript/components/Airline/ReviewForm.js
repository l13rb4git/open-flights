import React, { Fragment } from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'


const Wrapper = styled.div`
    background: #1a2960;
    padding: 20px; 
    height: 100vh;
    padding-top: 100px;
    position: fixed;
    font-family: 'Roboto Mono', monospace;
`

const Field = styled.div`
  border-radius: 4px;

  input {
      width: 96%;
      font-size: 18px;
      font-family: 'Roboto Mono', monospace;
      text-transform: capitalize;
      min-height: 40px;
      border-radius: 4px;
      border: 1px solid #e6e6e6;
      margin: 0 0 12px 0;
      padding: 12px;
  }

  textarea {
      width: 96%;
      font-size: 18px;
      min-height: 80px;
      border-radius: 4px;
      border: 1px solid #e6e6e6;
      margin: 12px 0;
      padding: 12px;
  }
`

const Headline = styled.div`
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    color: #fff;
`

const SubmitBtn = styled.button`
    background: #ffac05;
    width: 100%;
    border-radius: 4px;
    margin-top: 12px;
    padding: 12px;
    font-size: 20px;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #000;

    &:hover {
      background: #9e0a07;
      color: #fff;
      border: 1px solid #000;
    }
`

const RatingContainer = styled.div`
    color: #fff;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 0 10px 0;
    background: inherit;
`

const RatingTitle = styled.div`
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
`

const RatingBox = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;

    input {
        display: none;
        background: inherit;
    }

    label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
    }

    input:checked ~ label,
    input:checked ~ label ~ label { 
        background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
    }

    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label { 
        background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
    }
`


const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map( (score, index) => {
    return (
      <Fragment>
        <input type="radio" value={score} checked={props.review.score == score} name="rating" 
               onChange={() => console.log('selected:', score) } id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>Have an experience with {props.attributes.name}? Share a review!</Headline>
          <Field>
            <input onChange={props.handleChange} value={props.review.title || ''} type="text" name="title" placeholder="Review Title"/>
          </Field>
        <Field>
          <input onChange={props.handleChange} value={props.review.description || ''} type="text" name="description" placeholder="Review Description"/>
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate This Airline</RatingTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  )
}

export default ReviewForm
