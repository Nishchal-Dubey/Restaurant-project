


import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./ReservationForm.css";

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/messages", data);
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="reservation-section py-5">
      <div className="text-center mb-4">
        <h2 className="reservation-title">LEAVE A MESSAGE</h2>
      </div>

      <div className="container">
        <div className="form-box p-4 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
              </div>
              <div className="col-md-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
              <div className="col-md-4">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <p className="text-danger">{errors.message.message}</p>}
            </div>

            <button type="submit" className="btn btn-dark w-100 mt-2">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
