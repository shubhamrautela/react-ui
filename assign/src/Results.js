import React from 'react'
import Card from './Card'
import {data} from './data'

const details = data[0];
function Results() {
  console.log(details);
  return (

    <>
      <main>
        <div className="result-top">
          <p><b>Featured Experts</b></p>

          <div className="select">
            <select>
              <option value="0">Best Match</option>
              <option value="1">Random</option>
              <option value="2">Top Rated</option>
            </select>
          </div>
        </div>
        <div>

          <Card key="1" {...details} />
          <Card key="2" {...details} />
          <Card key="3" {...details} />
          <Card key="4" {...details} />
          <Card key="5" {...details} />

        </div>
      </main>
    </>
  )

}

export default Results
