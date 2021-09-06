import React, { Component } from "react";
import user from "../../assets/images/customer/user-01.jpg";

class Sidebar extends Component {
  render() {
    return (
      <>
       	<div className="col-xl-3 col-md-4">
						<div className="mb-4">
							<div className="d-sm-flex flex-row flex-wrap text-center text-sm-left align-items-center">
								<img alt="profile image" src={user} className="avatar-lg rounded-circle" />
								<div className="ml-sm-3 ml-md-0 ml-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
									<h6 className="mb-0">Jeffrey Akridge</h6>
									<p className="text-muted mb-0">Member Since Apr 2020</p>
								</div>
							</div>
						</div>
						<div className="widget settings-menu">
							<ul role="tablist" className="nav nav-tabs">
								<li className="nav-item current">
									<a href="/customer/customer-dashboard" className="nav-link active">
										<i className="fas fa-chart-line"></i> <span>Dashboard</span>
									</a>
								</li>
								<li className="nav-item current">
									<a href="/customer/customer-booking" className="nav-link">
										<i className="far fa-calendar-check"></i> <span>My Bookings</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="/customer/customer-setting" className="nav-link">
										<i className="far fa-user"></i> <span>Profile Settings</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="/customer/customer-wallet" className="nav-link">
										<i className="far fa-money-bill-alt"></i> <span>Wallet</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="/customer/customer-review" className="nav-link">
										<i className="far fa-star"></i> <span>Reviews</span>
									</a>
								</li>
								<li className="nav-item">
									<a href="/customer/customer-payment" className="nav-link">
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
