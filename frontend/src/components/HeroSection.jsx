import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
   <Navbar/>
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Stay Calm</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/he1.jpg" alt="hero1" />
              
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Steady</h1>
                <h1 className="title dishes_title"> Dishes</h1>
                <img src="/threelines.svg " alt="three" />

              </div>
             
              </div>

          </div>

        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/swi.jpg" alt="hero2"/>
          </div>
          <h1 className="title dishes_title"> Happy</h1>

        </div>

      </div>
      <br></br>
      
    </section>
  )
}

export default HeroSection
