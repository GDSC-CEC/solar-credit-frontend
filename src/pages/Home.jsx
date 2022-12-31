import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppButton from '../components/AppButton/AppButton'
import backgroundImg from "../assets/images/background/background_img1.jpg"

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup')
  }
  return (
    <>
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 data-aos="fade-down">Welcome to <span>Solar</span></h2>
                <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <AppButton
                  onClick={handleClick}
                  size="lg"
                  className="btn-get-started p-0 px-2 bg-transparent" 
                  label="Get Started" />
              </div>
            </div>
          </div>
        </div>
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-item active" style={{ backgroundImage: `url(${backgroundImg})` }}></div>
        </div>
      </section>
    </>
  )
}

export default Home