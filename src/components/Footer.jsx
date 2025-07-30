import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Santosh Farm's</h5>
            <p>
              SNF is dedicated to empowering farmers with sustainable solutions,
              innovative tools, and the latest agricultural insights to grow thriving communities.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to={"/"} className="footer-link">Home</Link></li>
              <li><Link to={"/aboutme"} className="footer-link">About Us</Link></li>
              <li><Link to={"/products"} className="footer-link">Products</Link></li>
              <li><Link to={"/contact"} className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact and Newsletter Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Get in Touch</h5>
            <p>Email: info@snf.com</p>
            <p>Phone: 961-846-1188 / 994-915-1188</p>
            <h5 className="mt-4">Message for queries</h5>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="btn btn-success" type="button">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Santosh Farm's. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;