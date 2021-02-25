import React from 'react'
import star from './images/star.png'

function Filter() {
  return (
    <>
      <aside>
        <p><b> Filters</b></p>
        <div className="filters">
          <div className="filter expertise">
            <p className="label">Expertise</p>
            <input type="search"></input>

          </div>
          <div className="filter focus">
            <p className="label">Focus area</p>
            <input type="search"></input>

          </div>
          <div className="filter rating">
            <p className="label">Ratings</p>
            <label class="container">
              <img src={star}></img><img src={star}></img><img src={star}></img><img src={star}></img>
              <img src={star}></img>




              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">

              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>

              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              <img src={star}></img>
              <img src={star}></img>
              <img src={star}></img>
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              <img src={star}></img>
              <img src={star}></img>
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

          </div>
          <div className="filter">
            <p className="label">Price</p>

            <label class="container">Free
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">Less than $25
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">$25 - $50
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">$50 - $100
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">More than $100
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>



          </div>

          <div className="filter session">
            <p className="label">Session Availability</p>

            <label class="container">15 min
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">30 min
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">60 min
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

          </div>

          <div className="filter language">
            <p className="label">Language</p>

            <label class="container">English
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">French
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">German
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">Hindi
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">Arabic
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container">Mandarin Chinese
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>




          </div>
        </div>
      </aside >
    </>
  )
}

export default Filter


