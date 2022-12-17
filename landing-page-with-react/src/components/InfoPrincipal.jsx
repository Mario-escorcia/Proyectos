import React from 'react'
import './InfoPrincipal.css'
function InfoPrincipal() {
  return (
    <div className="info--container">
        <div className="title--cont">
            <h1>
                Welcome To TravelMind.org
            </h1>
            <p>
                A new form to discover the world.
            </p>
        </div>
        <div className="btn--cont">
            <button>Get Info</button>
            <button>Contact Now!</button>
        </div>
    </div>
  )
}

export default InfoPrincipal