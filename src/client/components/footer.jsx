import React from "react";


const Footer = (props) => {
  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Quick Links </h2>
                <ul>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="/faq">Faq</a>
                  </li>
                  <li>
                    <a href="#0">Help</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Categories</h2>
                <ul>
                  <li>
                    <a href="/search">Computer</a>
                  </li>
                  <li>
                    <a href="/search">Interior</a>
                  </li>
                  <li>
                    <a href="/search">Car Wash</a>
                  </li>
                  <li>
                    <a href="/search">Cleaning</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="far fa-building"></i>
                    </span>
                    <p>367 Hillcrest Lane, Irvine, California, United States</p>
                  </div>
                  <p>
                    <i className="fas fa-headphones"></i> 321 546 8764
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope"></i> truelysell@example.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2 className="footer-title">Follow Us</h2>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="#0" target="_blank">
                        <i className="fab fa-facebook-f"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#0" target="_blank">
                        <i className="fab fa-twitter"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#0" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0" target="_blank">
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="subscribe-form">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="btn footer-btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    &copy; 2020 <a href="index.html">Frilanx</a>. All rights
                    reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li>
                      <a href="term-condition.html">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
