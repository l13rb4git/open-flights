import React from 'react'


const ReviewForm = (props) => {
  return (
    <div className="wrapper">
      <from>
        <div>Have an experience with [Airline Name]? Share a review!</div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title">
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Review Description">
        </div>
        <div className="field">
          <div className="ratingContainer">
            <div className="ratingTitleText">Rate This Airline</div>
            [Star rating here]
          </div>
        </div>
        <button type="submit">Submit Your Review</button>
      </from>
    </div>
  )
}

export default ReviewForm
