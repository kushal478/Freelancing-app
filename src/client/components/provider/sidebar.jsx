import React, { Component } from "react";
import provider from "../../assets/images/provider/provider-01.jpg";

class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="col-xl-3 col-md-4 theiaStickySidebar">
          <div className="mb-4">
            <div className="d-sm-flex flex-row flex-wrap text-center text-sm-left align-items-center">
              <img
                alt="profile"
                src={provider}
                className="avatar-lg rounded-circle"
              />
              <div className="ml-sm-3 ml-md-0 ml-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
                <h6 className="mb-0">Thomas Herzberg</h6>
                <p className="text-muted mb-0">Member Since Apr 2020</p>
              </div>
            </div>
          </div>
          <div className="widget settings-menu">
            <ul>
              <li className="nav-item">
                <a href="/provider/provider-dashboard" className="nav-link active">
                  <i className="fas fa-chart-line"></i> <span>Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/provider/provider-services" className="nav-link">
                  <i className="far fa-address-book"></i>{" "}
                  <span>My Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/provider/provider-booking" className="nav-link">
                  <i className="far fa-calendar-check"></i>{" "}
                  <span>Booking List</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/provider/provider-settings" className="nav-link">
                  <i className="far fa-user"></i> <span>Profile Settings</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/provider/provider-wallet" className="nav-link">
                  <i className="far fa-money-bill-alt"></i> <span>Wallet</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/provider/provider-subscription" className="nav-link">
                  <i className="far fa-calendar-alt"></i>{" "}
                  <span>Subscription</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/provider/provider-availability" className="nav-link">
                  <i className="far fa-clock"></i> <span>Availability</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/provider/provider-reviews" className="nav-link">
                  <i className="far fa-star"></i> <span>Reviews</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/provider/provider-payment" className="nav-link">
                  <i className="fas fa-hashtag"></i> <span>Payment</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Sidebar;
