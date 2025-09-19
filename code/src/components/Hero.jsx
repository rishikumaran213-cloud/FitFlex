import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>PowerHouse</h5>
        </span>
        <h2> Push<b> Beyond</b> Limits<b> Shape your Physique</b> Shape your future.</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero