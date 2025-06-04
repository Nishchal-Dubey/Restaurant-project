import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const RestaurantIntro = () => {
  return (
    <div className="container my-5 pt-5">
      <div className="row align-items-center">
        {/* Text section with constrained width */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="text-center" style={{ maxWidth: '320px' }}>
            <span className="text-muted d-block mb-1">Welcome To</span>
            <h2 className="fw-bold mb-4">India Restaurant</h2>
            <div className="text-muted" style={{ textAlign: 'justify' }}>
              <p className="mb-3">
                India Restaurant has been serving delightful experiences through the art of cooking for four decades.
                A cozy, relaxing space combined with flavourful dishes makes it a first choice for every foodie in town.
                It provides a wide range of items to choose from and lets everyone indulge in an experience of pleasing their taste buds.
              </p>
              <p className="mb-3">
                We provide a wide range of cuisines and dishes to choose from so that every foodie in town has their best experience here.
              </p>
              <p>
                We are known to be the best Mughlai eatery in Kolkata. We have always won the hearts of our customers
                with appetizing dishes and friendly behaviour. It is the best choice for everyone who wants to enjoy
                the best quality food at reasonable prices.
              </p>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="col-md-6">
          <img 
            src='INTERIOR.jpg' 
            alt="Restaurant" 
            className="img-fluid rounded h-100" 
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default RestaurantIntro