// src/Components/Carousel.jsx
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Carousel.css' // optional custom CSS if needed

const Carousel = () => {
  const slides = [
    {
      image: 'pngtree-an-arrangement-of-various-indian-food-image_2683809.jpg',
      title: 'Fascinating Food + Admirable Ambience + Significant Staff = India Restaurant',
      button: { text: 'Book A Table', link: '/booking' }
    },
    {
      image: 'north-indian-cuisine.jpg',
      title: 'Authentic Flavors Straight From India',
      button: { text: 'View Menu', link: '/menu' }
    },
    {
      image: 'Cheeseburger-Sliders-with-Vegetables-and-Sesame-Seeds.jpg',
      title: 'Spice Up Your Evenings With Us',
      button: { text: 'Reserve Now', link: '/reservation' }
    },
    {
      image: '12.jpg',
      title: 'Experience India On Your Plate',
      button: { text: 'Learn More', link: '/about' }
    },
    {
      image: 'gradient-brazilian-restaurant-facebook-cover_23-2149752128.avif',
      title: 'Celebrations, Gatherings & Catering',
      button: { text: 'Contact Us', link: '/contact' }
    }
  ]

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={slide.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center">
              <h1>{slide.title}</h1>
              <a href={slide.button.link} className="btn btn-outline-light mt-3 fw-bold">
                {slide.button.text}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
