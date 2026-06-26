import React from 'react'
import "../styles/Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden", objectFit: "fill"}} >
        <img src="https://www.apple.com/newsroom/images/product/os/macos/standard/macOS_preview_Hero_06042018_big.jpg.large.jpg" alt="" width={300}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
