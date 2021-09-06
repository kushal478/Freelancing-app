import React, { Component } from "react";
import Sidebar from "../sidebar";
import service01 from "../../../assets/images/services/service-08.jpg";
import service02 from "../../../assets/images/services/service-09.jpg";
import service03 from "../../../assets/images/services/service-10.jpg";
import service05 from "../../../assets/images/services/service-11.jpg";

import user1 from "../../../assets/images/customer/user-01.jpg";
import user2 from "../../../assets/images/customer/user-02.jpg";
import user3 from "../../../assets/images/customer/user-03.jpg";
import user5 from "../../../assets/images/customer/user-05.jpg";

class Booking extends Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div class="col-xl-9 col-md-8">
                <div class="row align-items-center mb-4">
                  <div class="col">
                    <h4 class="widget-title mb-0">My Bookings</h4>
                  </div>
                  <div class="col-auto">
                    <div class="sort-by">
                      <select class="form-control-sm custom-select">
                        <option>All</option>
                        <option>Pending</option>
                        <option>Inprogress</option>
                        <option>Complete Request</option>
                        <option>Rejected</option>
                        <option>Cancelled</option>
                        <option>Completed</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="bookings">
                  <div class="booking-list">
                    <div class="booking-widget">
                      <a href="service-details.html" class="booking-img">
                        <img src={service01} alt="User Image" />
                      </a>
                      <div class="booking-det-info">
                        <h3>
                          <a href="service-details.html">
                            Building Construction Services
                          </a>
                        </h3>
                        <ul class="booking-details">
                          <li>
                            <span>Booking Date</span> 23 Jul 2020{" "}
                            <span class="badge badge-pill badge-prof bg-primary">
                              Inprogress
                            </span>
                          </li>
                          <li>
                            <span>Booking time</span> 12:00:00 - 13:00:00
                          </li>
                          <li>
                            <span>Amount</span> $100
                          </li>
                          <li>
                            <span>Location</span> Kuala Lumpur, Malaysia
                          </li>
                          <li>
                            <span>Phone</span> 412-355-7471
                          </li>
                          <li>
                            <span>Provider</span>
                            <div class="avatar avatar-xs mr-1">
                              <img
                                class="avatar-img rounded-circle"
                                alt="User Image"
                                src={user1}
                              />
                            </div>
                            Thomas Herzberg
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="booking-action">
                      <a href="#" class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> Chat
                      </a>
                      <a href="javascript:;" class="btn btn-sm bg-danger-light">
                        <i class="fas fa-times"></i> Cancel the Service
                      </a>
                    </div>
                  </div>
                </div>

                <div class="bookings">
                  <div class="booking-list">
                    <div class="booking-widget">
                      <a href="service-details.html" class="booking-img">
                        <img src={service02} alt="User Image" />
                      </a>
                      <div class="booking-det-info">
                        <h3>
                          <a href="service-details.html">
                            Commercial Painting Services
                          </a>
                        </h3>
                        <ul class="booking-details">
                          <li>
                            <span>Booking Date</span> 22 Jul 2020{" "}
                            <span class="badge badge-pill badge-prof bg-primary">
                              Inprogress
                            </span>
                          </li>
                          <li>
                            <span>Booking time</span> 11:00:00 - 12:00:00
                          </li>
                          <li>
                            <span>Amount</span> $25
                          </li>
                          <li>
                            <span>Location</span> IFL Building A, Phnom Penh,
                            Cambodia
                          </li>
                          <li>
                            <span>Phone</span> 412-355-7471
                          </li>
                          <li>
                            <span>Provider</span>
                            <div class="avatar avatar-xs mr-1">
                              <img
                                class="avatar-img rounded-circle"
                                alt="User Image"
                                src={user2}
                              />
                            </div>
                            Matthew Garcia
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="booking-action">
                      <a href="user-chat.html" class="btn btn-sm bg-info-light">
                        <i class="far fa-eye"></i> Chat
                      </a>
                      <a href="javascript:;" class="btn btn-sm bg-danger-light">
                        <i class="fas fa-times"></i> Cancel the Service
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bookings">
                  <div class="booking-list">
                    <div class="booking-widget">
                      <a href="service-details.html" class="booking-img">
                        <img src={service03} alt="User Image" />
                      </a>
                      <div class="booking-det-info">
                        <h3>
                          <a href="service-details.html">Plumbing Services</a>
                        </h3>
                        <ul class="booking-details">
                          <li>
                            <span>Booking Date</span> 23 Jul 2020{" "}
                            <span class="badge badge-pill badge-prof bg-warning">
                              Pending
                            </span>
                          </li>
                          <li>
                            <span>Booking time</span> 09:00:00 - 10:00:00
                          </li>
                          <li>
                            <span>Amount</span> $50
                          </li>
                          <li>
                            <span>Location</span> K-JJ, Quezon City, National
                            Capital Region, Filipijnen
                          </li>
                          <li>
                            <span>Phone</span>
                          </li>
                          <li>
                            <span>Provider</span>
                            <div class="avatar avatar-xs mr-1">
                              <img
                                class="avatar-img rounded-circle"
                                alt="User Image"
                                src={user3}
                              />
                            </div>
                            Yolanda Potter
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="booking-action">
                      <a href="javascript:;" class="btn btn-sm bg-danger-light">
                        {" "}
                        <i class="fas fa-times"></i> Cancel the Service
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bookings">
                  <div class="booking-list">
                    <div class="booking-widget">
                      <a href="service-details.html" class="booking-img">
                        <img src={service05} alt="User Image" />
                      </a>
                      <div class="booking-det-info">
                        <h3>
                          <a href="service-details.html">
                            Wooden Carpentry Work
                          </a>
                        </h3>
                        <ul class="booking-details">
                          <li>
                            <span>Booking Date</span> 23 Jul 2020{" "}
                            <span class="badge badge-pill badge-prof bg-warning">
                              Pending
                            </span>
                          </li>
                          <li>
                            <span>Booking time</span> 12:00:00 - 13:00:00
                          </li>
                          <li>
                            <span>Amount</span> $14
                          </li>
                          <li>
                            <span>Location</span> 223 Jehovah Drive Roanoke
                          </li>
                          <li>
                            <span>Phone</span> 412-355-7471
                          </li>
                          <li>
                            <span>Provider</span>
                            <div class="avatar avatar-xs mr-1">
                              <img
                                class="avatar-img rounded-circle"
                                alt="User Image"
                                src={user5}
                              />
                            </div>
                            Ricardo Flemings
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="booking-action">
                      <a href="javascript:;" class="btn btn-sm bg-danger-light">
                        <i class="fas fa-times"></i> Cancel the Service
                      </a>
                    </div>
                  </div>
                </div>
                <div class="pagination">
                  <ul>
                    <li class="active">
                      <a href="javascript:void(0);">1</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">2</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">3</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">4</a>
                    </li>
                    <li class="arrow">
                      <a href="javascript:void(0);">
                        <i class="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Booking;
