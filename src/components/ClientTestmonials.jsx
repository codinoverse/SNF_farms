// src/components/ClientTestimonials.jsx
import React from "react";
import "./ClientTestimonials.css";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Landscape Architect",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Santhosh Farm has been our trusted source for premium grass. Their quality and service are unmatched!",
  },
  {
    name: "Meera Joshi",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "The lush greenery from Santhosh Farm completely transformed our backyard. Highly recommended!",
  },
  {
    name: "Akhil Reddy",
    role: "Real Estate Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    message:
      "Their sustainable practices and timely delivery make them a top choice for any project.",
  },
  {
    name: "Priya Sharma",
    role: "Garden Consultant",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    message:
      "Amazing quality and great customer service. Love the freshness in their plants!",
  },
];

const ClientTestimonials = () => {
  // Repeat the testimonials for infinite scroll effect
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="client-testimonials py-5">
      <div className="container">
        <h2 className="text-center fw-bold text-success mb-5">What Our Clients Say</h2>
        <div className="scroll-wrapper">
          <div className="scroll-track">
            {repeatedTestimonials.map((client, index) => (
              <div className="testimonial-card" key={index}>
                <img src={client.image} alt={client.name} className="client-img mb-3" />
                <h5 className="fw-semibold mb-0">{client.name}</h5>
                <p className="text-muted small mb-2">{client.role}</p>
                <p className="testimonial-message">“{client.message}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
