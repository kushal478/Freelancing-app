import React, { Component } from "react";


import Slider from "react-slick";
import Service1 from "../../../assets/images/services/service-01.jpg";
import Service2 from "../../../assets/images/services/service-02.jpg";

import IMG01 from "../../../assets/images/customer/user-01.jpg";
import IMG02 from "../../../assets/images/customer/user-02.jpg";



class ServicesDetail extends Component {
  render() {
	const settings2 = {
        dots: true,
        slidesToShow: 1,
		slidesToScroll: 1,
	   
        // variableWidth: true,
        arrows:false,

        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    infinite: true,
                  
                }
            }
        ]
      };
	const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true,
        arrows:false,

        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    infinite: true,
                  
                }
            }
        ]
      };
    return (
	      <>
            <div className="content">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="service-view">
							<div className="service-header">
								<h1>Car Repair Services</h1>
								<address className="service-location"><i className="fas fa-location-arrow"></i> Hanover, Maryland</address>
								<div className="rating">
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<span className="d-inline-block average-rating">(5)</span>
								</div>
								<div className="service-cate">
									<a href="/pages/search">Automobile</a>
								</div>
							</div>
							<div className="service-images service-carousel ">
							<Slider {...settings}>
      <div>
	  <img src={Service2} alt="" class="img-fluid" />
      </div>
      <div>
		<img src={Service2} alt="" class="img-fluid" />
      </div>
      <div>
	  <img src={Service2} alt="" class="img-fluid" />
      </div>
	  </Slider>
						
							
							</div>
							<div className="service-details">
								<ul className="nav nav-pills service-tabs" id="pills-tab" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Overview</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Services Offered</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="pills-book-tab" data-toggle="pill" href="#pills-book" role="tab" aria-controls="pills-book" aria-selected="false">Reviews</a>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
										<div className="card service-description">
											<div className="card-body">
												<h5 className="card-title">Service Details</h5>
												<p className="mb-0">Car wash is a facility used to clean the exterior and, in some cases, the interior of motor vehicles. Car washes can be self-serve, fully automated, or full-service with attendants who wash the vehicle.</p>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">Services Offered</h5>
												<div className="service-offer">
													<ul className="list-bullet">
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
														<li>Lorem Ipsum</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">
										<div className="card review-box">
											<div className="card-body">
												<div className="review-list">
                                                    <div className="review-img">
														<img className="rounded-circle" src={IMG01} alt="" />
													</div>
                                                    <div className="review-info">
                                                        <h5>Jeffrey Akridge</h5>
                                                        <div className="review-date">August 06, 2020 20:07 pm</div>
                                                        <p className="mb-0">Good Work</p>
                                                    </div>
                                                    <div className="review-count">
                                                        <div className="rating">
                                                            <i className="fas fa-star filled"></i>
															<i className="fas fa-star filled"></i>
															<i className="fas fa-star filled"></i>
															<i className="fas fa-star filled"></i>
															<i className="fas fa-star filled"></i>	
                                                            <span className="d-inline-block average-rating">(5.0)</span>
                                                        </div>
                                                    </div>
                                                </div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<h4 className="card-title">Related Services</h4>
						<div className="service-carousel">
							<div className="popular-slider owl-carousel owl-theme">
							<Slider {...settings2}>
      <div>
	  <div className="service-widget">
									<div className="service-img">
										<a href="/pages/service-details">
											<img className="img-fluid serv-img" alt="Service Image" src={Service1} />
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src={IMG02} alt="" />
												</a>
												<span className="service-price">$2</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="/pages/service-details">Electrical</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="/pages/service-details">Electric Panel Repairing Service</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(4.5)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx30</span></span>
												<span className="col ser-location"><span>Kalispell, Montana</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
								
      </div>
      <div>
	  <div className="service-widget">
									<div className="service-img">
										<a href="/pages/service-details">
											<img className="img-fluid serv-img" alt="Service Image" src={Service1} />
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src={IMG01} alt="" />
												</a>
												<span className="service-price">$14</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="/pages/service-details">Car Wash</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="/pages/service-details">Steam Car Wash</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(0)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx74</span></span>
												<span className="col ser-location"><span>Electra, Texas</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
     					 </div>
      <div>
	  <div className="service-widget">
									<div className="service-img">
										<a href="/pages/service-details">
											<img className="img-fluid serv-img" alt="Service Image" src={Service1} />
										</a>
										<div className="item-info">
											<div className="service-user">
												<a href="#">
													<img src={IMG01} alt="" />
												</a>
												<span className="service-price">$14</span>
											</div>
											<div className="cate-list">
												<a className="bg-yellow" href="/pages/service-details">Car Wash</a>
											</div>
										</div>
									</div>
									<div className="service-content">
										<h3 className="title">
											<a href="/pages/service-details">Steam Car Wash</a>
										</h3>
										<div className="rating">
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<span className="d-inline-block average-rating">(0)</span>
										</div>
										<div className="user-info">
											<div className="row">
												<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx74</span></span>
												<span className="col ser-location"><span>Electra, Texas</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
											</div>
										</div>
									</div>
								</div>
      </div>
	  </Slider>
                        
							</div>
						</div>
					</div>
					<div className="col-lg-4 theiaStickySidebar">
						<div className="sidebar-widget widget">
							<div className="service-amount">
								<span>$150</span>
							</div>
							<div className="service-book">
								<a href="/book-service" className="btn btn-primary"> Book Service </a>
							</div>
						</div>
						<div className="card provider-widget clearfix">
							<div className="card-body">
								<h5 className="card-title">Service Provider</h5>
								<div className="about-author">
									<div className="about-provider-img">
										<div className="provider-img-wrap">
											<a href="javascript:void(0);">
												<img className="img-fluid rounded-circle" alt="" src="assets/img/provider/provider-01.jpg" />
											</a>
										</div>
									</div>
									<div className="provider-details">
										<a href="javascript:void(0);" className="ser-provider-name">Thomas Herzberg</a>
										<p className="last-seen"><i className="fas fa-circle online"></i> Online</p>
										<p className="text-muted mb-1">Member Since Apr 2020</p>
									</div>
								</div>
								<hr />
								<div className="provider-info">
									<p className="mb-1"><i className="far fa-envelope"></i> <a href="#">thomasherzberg@example.com</a></p>
									<p className="mb-0"><i className="fas fa-phone-alt"></i> xxxxxxxx33</p>
								</div>
							</div>
						</div>
						<div className="card available-widget">
							<div className="card-body">
								<h5 className="card-title">Service Availability</h5>
								<ul>
									<li><span>Monday</span>9:30 AM - 7:00 PM</li>
									<li><span>Tuesday</span>9:30 AM - 7:00 PM</li>
									<li><span>Wednesday</span>9:30 AM - 7:00 PM</li>
									<li><span>Thursday</span>9:30 AM - 7:00 PM</li>
									<li><span>Friday</span>9:30 AM - 7:00 PM</li>
									<li><span>Saturday</span>9:30 AM - 7:00 PM</li>
									<li><span>Sunday</span>9:30 AM - 7:00 PM</li>
								</ul>
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
export default ServicesDetail;