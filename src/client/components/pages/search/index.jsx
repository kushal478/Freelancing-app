import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';

import Button from 'react-bootstrap/Button';
import Service01 from "../../../assets/images/services/service-01.jpg";
 import Service02 from "../../../assets/images/services/service-02.jpg";
import Service03 from "../../../assets/images/services/service-03.jpg";





class Search extends Component {
  render() {
    return (
      <>
       		<div className="content">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 theiaStickySidebar">
						<div className="card filter-card">
							<div className="card-body">
								<h4 className="card-title mb-4">Search Filter</h4>
								<form id="search_form">
									<div className="filter-widget">
										<div className="filter-list">
											<h4 className="filter-title">Keyword</h4>
											<input type="text" className="form-control" placeholder="What are you looking for?" />
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Sort By</h4>
											<select className="form-control selectbox select">
												<option>Sort By</option>
												<option>Price Low to High</option>
												<option>Price High to Low</option>
												<option>Newest</option>
											</select>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Categories</h4>
											<select className="form-control form-control selectbox select">
												<option>All Categories</option>
												<option>Computer</option>
												<option selected="">Automobile</option>
												<option>Car Wash</option>
												<option>Cleaning</option>
												<option>Electrical</option>
												<option>Construction</option>
											</select>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Location</h4>
											<input className="form-control" type="text" placeholder="Search Location" />
										</div>
									</div>
									<button className="btn btn-primary pl-5 pr-5 btn-block get_services" type="button">Search</button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<div className="row align-items-center mb-4">
							<div className="col-md-6 col">
								<h4><span>118</span> Services</h4>
							</div>
							<div className="col-md-6 col-auto">
								<div className="view-icons">
									<a href="javascript:void(0);" className="grid-view active"><i className="fas fa-th-large"></i></a>
								</div>
							</div>
						</div>
						<div>
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service01} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														{/* <img src={User01} alt="" /> */}
													</a>	
													<span className="service-price">$25</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="/pages/service-details">Cleaning</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="/pages/service-details">Toughened Glass Fitting Services</a>
											</h3>
											<div className="rating">	
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>		
												<span className="d-inline-block average-rating">(4.3)</span>
											</div>
											<div className="user-info">
												<div className="row">	
													<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> 
														<span>xxxxxxxx49</span>
													</span>
													<span className="col ser-location">
														<span>Wayne, New Jersey</span> <i className="fas fa-map-marker-alt ml-1"></i>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service02} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														{/* <img src={User02} alt="" /> */}
													</a>
													<span className="service-price">$50</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="/pages/service-details">Automobile</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="/pages/service-details">Car Repair Services</a>
											</h3>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<span className="d-inline-block average-rating">(5)</span>
											</div>
											<div className="user-info">
												<div className="row">
													<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx85</span></span>
													<span className="col ser-location"><span>Hanover, Maryland</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
                                <div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service03} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														{/* <img src={User03} alt="" /> */}
													</a>
													<span className="service-price">$45</span>
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
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service03} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														{/* <img src={User03} alt="" /> */}
													</a>
													<span className="service-price">$45</span>
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


                                <div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service01} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														{/* <img src={User03} alt="" /> */}
													</a>
													<span className="service-price">$45</span>
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

                                <div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service02} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														{/* <img src={User03} alt="" /> */}
													</a>
													<span className="service-price">$45</span>
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
								 {/* <div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service04} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-04.jpg" alt="" />
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
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service05} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-05.jpg" alt="" />
													</a>
													<span className="service-price">$100</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="/pages/service-details">Cleaning</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="/pages/service-details">House Cleaning Services</a>
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
													<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx91</span></span>
													<span className="col ser-location"><span>Sylvester, Georgia</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service06} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-06.jpg" alt="" />
													</a>
													<span className="service-price">$80</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="/pages/service-details">Computer</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="/pages/service-details">Computer & Server AMC Service</a>
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
													<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx92</span></span>
													<span className="col ser-location"><span>Los Angeles, California</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div> */}
							{/*	<div className="col-lg-4 col-md-6">
									<div className="service-widget">
										<div className="service-img">
											<a href="/pages/service-details">
												<img className="img-fluid serv-img" alt="Service Image" src={Service07} />
											</a>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														<img src="assets/img/customer/user-07.jpg" alt="" />
													</a>
													<span className="service-price">$5</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href="/pages/service-details">Interior</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href="/pages/service-details">Interior Designing</a>
											</h3>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(4)</span>
											</div>
											<div className="user-info">
												<div className="row">
													<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx28</span></span>
													<span className="col ser-location"><span>Hanover, Maryland</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
												</div>
											</div>
										</div>
									</div>
								</div>*/}

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
export default Search;