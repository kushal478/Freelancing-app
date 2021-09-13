import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom";
//icon
import { Modal } from 'react-bootstrap';

import logo from "../assets/Images&icons/logoWhite.png";
// import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import { useEffect } from "react";

const Header = (props) => {
  let pathnames = window.location.pathname

  const [active, setActive] = useState(false);
  const [activeModal, setActivemodal] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [show_otp_card, setshow_otp_card] = useState(false)

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);
  const [input, setinput] = useState("");
  const [correct_mobile_number, setcorrect_mobile_state] = useState("");
  const [wrong_mobile_number, setwrogn_mobile_state] = useState("");
  const inputupdate = (event) => {
    setinput(event.target.value);
    setwrogn_mobile_state("")
    console.log(input)
  }
  const request_otp = (event) => {
    event.preventDefault()
    if (input.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !(input.match(/0{5,}/))) {
      setinput("");
      setcorrect_mobile_state("Please enter your otp in provided Number.")
      setshow_otp_card(true)
      let request_otp_url = `http://159.65.95.188:4000/api/resend_otp`;
      axios.post(request_otp_url, contact_number)
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    }
    else {
      setwrogn_mobile_state("Please enter your correct Number.")
    }

  }

  // useEffect(() => {

  //   $(window).scroll(function () {
  //     if ($(window).scrollTop() >= 30) {
  //       $('.header').addClass('fixed-header');
  //     } else {
  //       $('.header').removeClass('fixed-header');
  //     }
  //   });
  //   $(".main-nav a").on("click", function (e) {
  //     if ($(this).parent().hasClass("has-submenu")) {
  //       e.preventDefault();
  //     }
  //     if (!$(this).hasClass("submenu")) {
  //       $("ul", $(this).parents("ul:first")).slideUp(350);
  //       $("a", $(this).parents("ul:first")).removeClass("submenu");
  //       $(this).next("ul").slideDown(350);
  //       $(this).addClass("submenu");
  //     } else if ($(this).hasClass("submenu")) {
  //       $(this).removeClass("submenu");
  //       $(this).next("ul").slideUp(350);
  //     }
  //   });	// Mobile menu sidebar overlay
  // }, []);



  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const data = { title, body };
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data)
  //   };
  //   fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  //     .then(response => response.json())
  //     .then(res => console.log(res));
  // };


  const openModal = () => setActivemodal("login");
  const openModal2 = () => setActivemodal("user");


  const handleCloseModal = () => {
    setActivemodal("close");
    setinput("");
    setwrogn_mobile_state("");
    setshow_otp_card(false)

  }

  return (


    <header className="header home">
      <ToastContainer />
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link to="/home" className="navbar-brand logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper ml-auto">
          <div className="menu-header">
            <Link to="/home" className="menu-logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
            <a
              href="#0"
              id="menu_close"
              className="menu-close"
              onClick={() => onhandleCloseMenu()}
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav">
            <li className={pathnames.includes("/home") ? "active" : ""}><Link to="/home">Home</Link></li>
            <li className={pathnames.includes("/categories") ? "active" : ""}><Link to="/categories">Categories</Link></li>
            <li className={pathnames.includes("/popularjobs") ? "active" : ""}><Link to="/popularjobs">PopularJobs</Link></li>

            <li className={`has-submenu ${url.includes("/provider") ? "active" : ""}`}>
              <a href="#0">
                Provider<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={pathnames.includes("provider-dashboard") ? "active" : ""}>
                  <Link to="/provider/provider-dashboard" onClick={() => onhandleCloseMenu()}>Dashboard</Link>
                </li>
                <li className={pathnames.includes("provider-services") ? "active" : ""}>
                  <Link to="/provider/provider-services" onClick={() => onhandleCloseMenu()}>Services</Link>
                </li>
                <li className={pathnames.includes("provider-booking") ? "active" : ""}>
                  <Link to="/provider/provider-booking" onClick={() => onhandleCloseMenu()}>Booking</Link>
                </li>
                <li className={pathnames.includes("provider-settings") ? "active" : ""}>
                  <Link to="/provider/provider-settings" onClick={() => onhandleCloseMenu()}>Profile Settings</Link>
                </li>
                <li className={pathnames.includes("provider-wallet") ? "active" : ""}>
                  <Link to="/provider/provider-wallet" onClick={() => onhandleCloseMenu()}>Wallet</Link>
                </li>
                <li className={pathnames.includes("provider-subscription") ? "active" : ""}>
                  <Link to="/provider/provider-subscription" onClick={() => onhandleCloseMenu()}>Subscription</Link>
                </li>
                <li className={pathnames.includes("provider-availability") ? "active" : ""}>
                  <Link to="/provider/provider-availability" onClick={() => onhandleCloseMenu()}>Availability</Link>
                </li>
                <li className={pathnames.includes("provider-reviews") ? "active" : ""}>
                  <Link to="/provider/provider-reviews" onClick={() => onhandleCloseMenu()}>Reviews</Link>
                </li>
                <li className={pathnames.includes("provider-payments") ? "active" : ""}>
                  <Link to="/provider/provider-payments" onClick={() => onhandleCloseMenu()}>Payments</Link>
                </li>
              </ul>
            </li>


            <li className={`has-submenu ${url.includes("/customer") ? "active" : ""}`}>
              <a href="#0">
                Customer<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={pathnames.includes("dashboard") ? "active" : ""}>
                  <Link to="/customer/customer-dashboard" onClick={() => onhandleCloseMenu()}>Dashboard</Link>
                </li>
                <li className={pathnames.includes("appointments") ? "active" : ""}>
                  <Link to="/customer/customer-booking" onClick={() => onhandleCloseMenu()}>Booking</Link>
                </li>
                <li className={pathnames.includes("profile-setting") ? "active" : ""}>
                  <Link to="/customer/customer-setting" onClick={() => onhandleCloseMenu()}>Profile Setting</Link>
                </li>
                <li className={pathnames.includes("wallet") ? "active" : ""}>
                  <Link to="/customer/customer-wallet" onClick={() => onhandleCloseMenu()}>Wallet</Link>
                </li>
                <li className={pathnames.includes("review") ? "active" : ""}>
                  <Link to="/customer/customer-review" onClick={() => onhandleCloseMenu()}>Review</Link>
                </li>
                <li className={pathnames.includes("payment") ? "active" : ""}>
                  <Link to="/customer/customer-payment" onClick={() => onhandleCloseMenu()}>Payment</Link>
                </li>
              </ul>
            </li>
            <li className={`has-submenu ${url.includes("pages") ? "active" : ""}`}>
              <a href="#0">
                Pages<i className="fas fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul className={`submenu`}>
                <li className={pathnames.includes("search") ? "active" : ""}>
                  <Link to="/pages/search" onClick={() => onhandleCloseMenu()}>Search</Link>
                </li>
                <li className={pathnames.includes("Booking") ? "active" : ""}>
                  <Link to="/pages/service-details" onClick={() => onhandleCloseMenu()}>Service details</Link>
                </li>
                <li className={pathnames.includes("add-service") ? "active" : ""}>
                  <Link to="/pages/add-service" onClick={() => onhandleCloseMenu()}>Add service</Link>
                </li>
                <li className={pathnames.includes("edit-service") ? "active" : ""}>
                  <Link to="/pages/edit-service" onClick={() => onhandleCloseMenu()}>Edit service</Link>
                </li>
                <li className={pathnames.includes("chat") ? "active" : ""}>
                  <Link to="/pages/chat" onClick={() => onhandleCloseMenu()}>Chat</Link>
                </li>
                <li className={pathnames.includes("notfication") ? "active" : ""}>
                  <Link to="/pages/notification" onClick={() => onhandleCloseMenu()}>Notification</Link>
                </li>
                <li className={pathnames.includes("about-us") ? "active" : ""}>
                  <Link to="/pages/about-us" onClick={() => onhandleCloseMenu()}>About us</Link>
                </li>
                <li className={pathnames.includes("contact-us") ? "active" : ""}>
                  <Link to="/pages/contact-us" onClick={() => onhandleCloseMenu()}>Contact us</Link>
                </li>
                <li className={pathnames.includes("faq") ? "active" : ""}>
                  <Link to="/pages/faq" onClick={() => onhandleCloseMenu()}>FAQ</Link>
                </li>
                <li className={pathnames.includes("terms") ? "active" : ""}>
                  <Link to="/pages/terms" onClick={() => onhandleCloseMenu()}>Terms & condition</Link>
                </li>
                <li className={pathnames.includes("privacy-policy") ? "active" : ""}>
                  <Link to="/pages/privacy" onClick={() => onhandleCloseMenu()}>Privacy policy</Link>
                </li>
              </ul>
            </li>

            <li className={pathnames.includes("admin") ? "active" : ""}>
              <Link to="/admin">Profile</Link>
            </li>
            <li className={pathnames.includes("change-password") ? "active" : ""}>
              <Link to="#" onClick={() => openModal2("user")}>Register</Link>
            </li>
            {/* <li className={pathnames.includes("change-password") ? "active" : ""}>
              <Link to="#" onClick={() => openModal("user")}>Become a Employer</Link>
            </li> */}
          </ul>
        </div>
        <ul className="nav header-navbar-rht">


          {(props.location.pathname) === ("/pages/voice-call") || (props.location.pathname) === ("/pages/video-call") ? (
            <>
              <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                <Dropdown.Toggle id="dropdown-basic">
                  <img
                    className="rounded-circle"
                    src={IMG01}
                    width="31"
                    alt="Darren Elder"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={IMG01}
                        alt="User"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elder</h6>
                      <p className="text-muted mb-0">Doctor</p>
                    </div>
                  </div>
                  <Dropdown.Item href="doctor/doctor-dashboard">
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item href="doctor/profile-setting">
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item href="login">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="#" className="nav-link header-login" onClick={() => openModal('login')}>
                  login{" "}
                </Link>
              </li>{" "}
            </>
          )}
        </ul>
      </nav>

      <Modal show={activeModal === 'login'} onHide={() => handleCloseModal()} centered >
        <Modal.Header closeButton>
          <Modal.Title><h3>Login <span>Frilanx</span></h3></Modal.Title>
        </Modal.Header>

        {/* this is our coding -------------------------------------------------------------- */}

        <div class="modal-body">
          {
            show_otp_card ?
              <form>
                {/* <input type="text" placeholder="enter your otp here" /> */}
                <div className="row form-group form-focus">
                  <div className="col-md-2">
                    <input type="text" maxLength="1" className="form-control" required />
                  </div>
                  <div className="col-md-2">
                    <input type="text" maxLength="1" className="form-control" required />
                  </div>
                  <div className="col-md-2">
                    <input type="text" maxLength="1" className="form-control" required />
                  </div>
                  <div className="col-md-2">
                    <input type="text" maxLength="1" className="form-control" required />
                  </div>
                  <div className="col-md-2">
                    <input type="text" maxLength="1" className="form-control" required />
                  </div>
                  <div className="col-md-2">
                    <input type="text" maxLength="1" className="form-control" required />
                  </div>

                </div>
                <div className="my-3">
                  <p className="text-success">{correct_mobile_number}</p>
                </div>
                <input type="submit" value="submit" className="btn btn-primary btn-block btn-lg login-btn" />
              </form>
              :
              // <form onSubmit={request_otp}>
              //   <input value={input} type="text" onChange={inputupdate} />
              //   <input type="submit" value="submit" />
              //   {/* <ToastContainer /> */}

              // </form>
              <form onSubmit={request_otp}>
                <div class="form-group form-focus">
                  <label class="focus-label">contact number</label>
                  {/* <input type="tel" class="form-control" placeholder="contact number" value={contact_number}  onChange={update_number} required/> */}
                  <input value={input} type="text" class="form-control" onChange={inputupdate} required />
                </div>
                <div className="mt-2">
                  <p className="text-danger">{wrong_mobile_number}</p>
                </div>

                <div class="text-right">
                </div>
                <input type="submit" value="submit" className="btn btn-primary btn-block btn-lg login-btn" />


                {/* this is our coding -------------------------------------------------------------- */}

                <div class="login-or">	<span class="or-line"></span>
                  <span class="span-or">or</span>
                </div>

                <div class="row">
                  <div class="col-6">	<a href="#" class="btn btn-facebook1 btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
                  </div>
                  <div class="col-6">	<a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
                  </div>
                </div>
                <div class="text-center dont-have">Don’t have an account? <a href="#">Register</a>
                </div>
              </form>
          }

        </div>
      </Modal>


      <Modal show={activeModal === 'user'} onHide={() => handleCloseModal()} centered >
        <Modal.Header closeButton>
          <Modal.Title><h3>Register To <span>Join Frilanx</span></h3></Modal.Title>
        </Modal.Header>

        <div class="modal-body">
          <form action="index.html">
            <div class="form-group form-focus">
              <label class="focus-label">Name</label>
              <input type="text" class="form-control" placeholder="johndoe@exapmle.com" />
            </div>
            <div class="form-group form-focus">
              <label class="focus-label">Mobile Number</label>
              <input type="text" class="form-control" placeholder="986 452 1236" />
            </div>
            <div class="form-group form-focus">
              <label class="focus-label">Create Password</label>
              <input type="password" class="form-control" placeholder="********" />
            </div>
            <div class="text-right">
              <a class="forgot-link" href="#">Already have an account?</a>
            </div>
            <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
            <div class="login-or">
              <span class="or-line"></span>
              <span class="span-or">or</span>
            </div>
            <div class="row form-row social-login">
              <div class="col-6">
                <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
              </div>
              <div class="col-6">
                <a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
              </div>
            </div>
          </form>
        </div>
      </Modal>

      <Modal show={activeModal === 'professional'} onHide={() => handleCloseModal()} centered >
        <Modal.Header closeButton>
          <Modal.Title><h3>Login <span>Join as a User</span></h3></Modal.Title>
        </Modal.Header>

        <div class="modal-body">
          <form action="index.html">
            <div class="form-group form-focus">
              <label class="focus-label">Name</label>
              <input type="text" class="form-control" placeholder="johndoe@exapmle.com" />
            </div>
            <div class="form-group form-focus">
              <label class="focus-label">Mobile Number</label>
              <input type="text" class="form-control" placeholder="986 452 1236" />
            </div>
            <div class="form-group form-focus">
              <label class="focus-label">Create Password</label>
              <input type="password" class="form-control" placeholder="********" />
            </div>
            <div class="text-right">
              <a class="forgot-link" href="#">Already have an account?</a>
            </div>
            <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
            <div class="login-or">
              <span class="or-line"></span>
              <span class="span-or">or</span>
            </div>
            <div class="row form-row social-login">
              <div class="col-6">
                {/* <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a> */}
              </div>
              <div class="col-6">
                <a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
              </div>
            </div>
          </form>
        </div>
      </Modal>

    </header>
  );
};

export default Header;
