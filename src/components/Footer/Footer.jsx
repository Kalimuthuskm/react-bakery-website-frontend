import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
return (
    <footer className="footer" style={{ background: "#222", color: "#fff", padding: "40px 0 0 0" }}>
        <div className="footer-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>

            {/* About Section */}
            <div className="footer-section about" style={{ flex: "1 1 220px", margin: "20px" }}>
                <h3 style={{ color: "#ffb347", marginBottom: "10px" }}>SKM Bakery</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6" }}>Authentic Tamil Nadu sweets, snacks, and baked goods. Freshly made every day. Taste the tradition!</p>
            </div>

            {/* Contact Info */}
            <div className="footer-section contact" style={{ flex: "1 1 220px", margin: "20px" }}>
                <h4 style={{ color: "#ffb347", marginBottom: "10px" }}>Contact Us</h4>
                <p><FaPhone style={{ color: "#ffb347", marginRight: "8px" }} /> +91 98765 43210</p>
                <p><FaEnvelope style={{ color: "#ffb347", marginRight: "8px" }} /> skmbakery@example.com</p>
                <p><FaMapMarkerAlt style={{ color: "#ffb347", marginRight: "8px" }} /> 123, Main Road, Theni, Tamil Nadu</p>
                <p><FaClock style={{ color: "#ffb347", marginRight: "8px" }} /> Open: 8 AM – 10 PM (Mon–Sun)</p>
            </div>

            {/* Google Map Embed */}
                        <div className="footer-section map" style={{ flex: "1 1 300px", margin: "20px" }}>
                            <h4 style={{ color: "#ffb347", marginBottom: "10px" }}>Find Us</h4>
                            <iframe
                                title="SKM Bakery Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.563349759033!2d77.47721707508844!3d10.01592897204732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076f7e7d7e6b1d%3A0x6e7d7c7e7e7e7e7e!2sTheni%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '8px', boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Social Media */}
            <div className="footer-section social" style={{ flex: "1 1 180px", margin: "20px" }}>
                <h4 style={{ color: "#ffb347", marginBottom: "10px" }}>Follow Us</h4>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ display: "block", color: "#fff", textDecoration: "none", marginBottom: "8px" }}>
                    <FaFacebook style={{ color: "#4267B2", marginRight: "8px" }} /> SKM Bakery
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ display: "block", color: "#fff", textDecoration: "none" }}>
                    <FaInstagram style={{ color: "#E1306C", marginRight: "8px" }} /> SKM Bakery
                </a>
            </div>
        </div>

        <div className="footer-bottom" style={{ background: "#181818", textAlign: "center", padding: "18px 0", marginTop: "30px", fontSize: "14px" }}>
            <p>&copy; {new Date().getFullYear()} SKM Bakery. All rights reserved. | Made with <span style={{ color: "#ffb347" }}>❤️</span> in Tamil Nadu</p>
        </div>
    </footer>
);
};

export default Footer;
