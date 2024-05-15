import React from 'react'

import aboutimg from '../../images/about.png'

const About = () => {
  return (
    <div id='about'>
        <div className="abour-image">
            <img src={aboutimg} alt="" />
        </div>
        <div className="about-text">
            <h1>Agende seu teste!</h1>
            <p>Estamos abertos de Segunda a Sábado, das 6h30 as 22h.</p>
            <button>Vamos conversar?</button>
        </div>
    </div>
  )
}

export default About
