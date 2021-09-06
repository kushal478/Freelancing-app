import React, { Component } from "react";
import Sidebar from "../sidebar";

class CustomerDashboard extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-xl-9 col-md-8">
						<div className="row">
							<div className="col-lg-4">
								<a href="user-bookings.html" className="dash-widget dash-bg-1">
									<span className="dash-widget-icon">223</span>
									<div className="dash-widget-info">
										<span>Bookings</span>
									</div>
								</a>
							</div>
							<div className="col-lg-4">
								<a href="user-reviews.html" className="dash-widget dash-bg-2">
									<span className="dash-widget-icon">16</span>
									<div className="dash-widget-info">
										<span>Reviews</span>
									</div>
								</a>
							</div>
							<div className="col-lg-4">
								<a href="notifications.html" className="dash-widget dash-bg-3">
									<span className="dash-widget-icon">1</span>
									<div className="dash-widget-info">
										<span>Notification</span>
									</div>
								</a>
							</div>
						</div>
					</div>
           </div>
          </div>
        </div>
      </>
    );
  }
}
export default CustomerDashboard;
