import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import "./style.css"

function Expert() {
  return (
    <>
      <App />
    </>
  )
}

ReactDom.render(<Expert />, document.getElementById("root"));

