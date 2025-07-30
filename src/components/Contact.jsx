import React, { useState } from 'react';
import './ContactBlog.css';
import Navbar from './Navbar';
import Footer from './Footer';
import img1 from "../assets/Img1.jpg"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
        <Navbar/>
            <div className="contact-form-wrapper">
                <div className="contact-form-container">
                    {/* Glossy overlay effect is now handled by CSS ::before pseudo-element */}

                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center mb-4">
                                    <h1 className="contact-form-title">
                                        Get In Touch
                                    </h1>
                                    <p className="contact-form-subtitle">
                                        We'd love to hear from you. Send us a message!
                                    </p>
                                </div>

                                <div onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-4">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Species / Plant Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input"
                                                    placeholder="Enter subject"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="5"
                                                    className="form-textarea"
                                                    placeholder="Enter your message here..."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="submit-button"
                                                onClick={handleSubmit}
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-5 px-5'>
                    <img alt='img1' src={img1} width="900px" style={{borderRadius:"25px", boxShadow:"2px 5px 50px 0px white"}}/>
                </div>
            </div>
            
        <Footer/>
        </>
    );
};

export default ContactForm;