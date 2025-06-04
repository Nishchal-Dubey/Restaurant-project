import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './AboutRestaurantInfo.css' 

const AboutRestaurantInfo = () => {
  return (
    <div className="container about-container">
      <div className="row align-items-center">

        {/* Text Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="text-center" style={{ maxWidth: '500px' }}>
            <span className="about-subheading">
              Welcome To The India Restaurant
            </span>
            <h3 className="about-heading">
              Delicious Food, Friendly Staff, Cozy Atmosphere & Positive Emotions!
            </h3>
            <img
              src="white-india.png"
              alt="India Restaurant Logo"
              className="about-logo"
            />
            <p className="about-description">
              Haji Syed Mohammad Kalim built a small eatery more than 40 years ago to provide lip-smacking Mughlai dishes at pocket-friendly prices. The place garnered immense popularity in no time because they delivered palatable delicacies consistently at a very reasonable range.
            </p>
            <p className="about-description">
              Today the proprietors of India Restaurant, Syed Anwar Azeem, Syed Misbah Kalim, and Syed Shahmeer Kalim, took forward the legacy of their father to a different dimension. They have collected their father’s dream and changed it into a beautiful reality.
            </p>
            <p className="about-description">
              The India restaurant currently provides a delightful and vibrant ambiance having a seating arrangement for 300 people. The restaurant now has added heterogeneity in its menu with Indian and Chinese cuisine. This place still holds its roots and swears by serving the best biryani in town. It is also exploring and experimenting with other flavours and cuisines to give new aspects to the place.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="1.jpg"
            alt="Dish"
            className="about-image"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutRestaurantInfo
