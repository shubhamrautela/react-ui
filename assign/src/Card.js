import React from 'react'
import man from './images/man.jpg'
import star from './images/star.png'
import heart from './images/heart.png'

function Card({name, title, price, rating, ratedBy, qualities, description, tags}) {
  return (
    <>
      <div className="card">
        <div className="about">
          <div className="image">
          </div>
          <p>Price: <span className="price">{price}</span></p>
          <div>
            <img src={star}></img>
            <p><span className="rating">{rating} </span><span>({ratedBy})</span></p>
          </div>
        </div>
        <div className="details">
          <div className="details first">
            <div className="details first id">
              <div>
                <p><b>{name}</b></p>
                <p><b>{title}Founder @The Millenials</b></p>
              </div>
            </div>
            <div className="buttons">
              <img src={heart}></img>

              <div className="button">View Profile</div>
            </div>
          </div>
          <div className="details second">
            <div className="qualities">
              <div className="quality">
                &#9201; {qualities[0]}
              </div>
              <div className="quality">
                &#9978; {qualities[1]}
              </div>
              <div className="quality">
                &#882; {qualities[2]}
              </div>



            </div>
            <div className="description">{description}</div>
            <div className="tags">{tags.map((tag) => {
              return (
                <div className="tag">
                  {tag}
                </div>
              )
            })}</div>
          </div>

        </div>

      </div>

    </>
  )

}

export default Card
