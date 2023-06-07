import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div > <div className="card" id="card_outside" style={{ width: '18rem' }}>
    <img src={props.data.src} className="card-img-top" alt={props.data.alt} />
    <div className="card-body">
      <h5 className="card-title" id="card_title"> {props.data.title}</h5>
      <p className="card-text">
        {props.data.para}
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{props.data.l0}</li>
      <li className="list-group-item">{props.data.l1}</li>
      <li className="list-group-item">{props.data.l2}</li>
    </ul>
    <div className="card-body">
      {/* <a href="#" className="card-link">{props.data.link}</a> */}
      <a href={props.data.link} className="card-link glow-on-hover" id="subscribe_btn"> Subscribe</a>
    </div>
  </div></div>
  )
}

export default Card