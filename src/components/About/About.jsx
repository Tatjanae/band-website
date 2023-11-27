import PLACEHOLDER from '../../Images/20191212_204438.jpg'
import './About.css'

const About = () => {
  return (
    <header className="main_about" id="about">
<div className="container main_about-container">
  <div className="main_about-left">
    <h4>#RockOnWithJellyFish 🎸🤘</h4>
    <h1>About JellyFish</h1>
    <p>Dive into musical diversity with JellyFish! From rock to jazz, we've got it all. Book us for an unforgettable experience. </p>
<a href="#contact" className="btn lg">Book us now!</a>
  </div>
  <div className="main_about-right">
    <div className="main_about-circle"></div>
    <div className="main_about-image">
      <img className='img' src={PLACEHOLDER} alt="placeholder Main About" />
    </div>
  </div>
</div>
    </header>
  )
}

export default About