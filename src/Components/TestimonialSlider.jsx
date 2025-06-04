
import React from "react";
import "./TestimonialSlider.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const testimonials = [
  {
    image: "toshu.png", // Your 760×739 image
    name: "Arindam Goswami",
    text: "We've been there last year during puja after lockdown. Their biryani is like mouthwatering. Perfect in quality and quantity.",
    rating: 5
  },
  {
    image: "toshu.png",
    name: "Mr Foodie Kolkata",
    text: "No wonder why this place's Biryani is considered one of the best in the town. It is counted under the best Biryani Maker in Kolkata.",
    rating: 5
  },
  {
    image: "toshu.png",
    name: "Arnab Paul",
    text: "Very reasonable price compared to the other famous mughlai outlets of Kolkata. Quantity, quality is better. Ambience is the main thing here.",
    rating: 5
  }
];

const renderStars = (rating) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
};

const TestimonialSlider = () => {
  return (
    <section className="testimonial-section">
      <div className="container text-center">
        <h2 className="section-title">Our Testimonials</h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="hover"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="testimonial-card">
                  <div className="stars">{renderStars(testimonial.rating)}</div>
                  <p className="testimonial-text">“{testimonial.text}”</p>
                  <div className="profile-img-wrapper">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="profile-img"
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center' // Adjust to 'center top' if faces are cut
                      }}
                    />
                  </div>
                  <h6 className="testimonial-name">{testimonial.name}</h6>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
            aria-label="Previous testimonial"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
            aria-label="Next testimonial"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;