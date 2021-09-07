import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Slider from "react-slick";

import dislike from '../../../assets/Images&icons/dislike.png';
import like from '../../../assets/Images&icons/like.png';

import img01 from '../../../assets/Images&icons/introImage1.png';


import service01 from "../../../assets/images/services/service-01.jpg";
import service02 from "../../../assets/img/game1.jpg";
import service03 from "../../../assets/images/services/service-03.jpg";
import service04 from "../../../assets/images/services/service-04.jpg";
import service05 from "../../../assets/images/services/service-05.jpg";
import service06 from "../../../assets/images/services/service-06.jpg";
import service07 from "../../../assets/images/services/service-07.jpg";
import service08 from "../../../assets/images/services/service-08.jpg";
import service09 from "../../../assets/images/services/service-09.jpg";

import user01 from "../../../assets/images/customer/user-01.jpg";
import user02 from "../../../assets/images/customer/user-02.jpg";
import user03 from "../../../assets/images/customer/user-03.jpg";
import user04 from "../../../assets/images/customer/user-04.jpg";
import user05 from "../../../assets/images/customer/user-05.jpg";
import user06 from "../../../assets/images/customer/user-06.jpg";
import user07 from "../../../assets/images/customer/user-07.jpg";
import user08 from "../../../assets/images/customer/user-10.jpg";


class Popular extends Component {
	render() {


		const settings2 = {
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,

			// variableWidth: true,
			arrows: false,

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
						slidesToScroll: 1,
						infinite: true,

					}
				}
			]
		};

		const settings = {
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 1,

			// variableWidth: true,
			arrows: false,

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
						slidesToScroll: 1,
						infinite: true,

					}
				}
			]
		};

		return (
			<section className="popular-services">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="row">
								<div className="col-md-6">
									<div className="heading">
										<h2>Most Popular Jobs</h2>
										<span>Explore the desire jobs. You won’t be disappointed</span>
									</div>
								</div>
								<div className="col-md-6">
									<div className="viewall">
										<h4><a href="../category/index.js">View All <i className="fas fa-angle-right"></i></a></h4>
										<span>Most Popular</span>
									</div>
								</div>
							</div>










							<div className="service-carousel">
								<div className="service-slider">
									<Slider {...settings}>

										<div className="service-widget">
											<div className="service-img">
												<a href="service-details.html">
													<img className="img-fluid serv-img" alt="Service Image" src={service02} />
												</a>
												<div className="item-info">
													<div className="service-user">
														<a href="#">
															<img src={user01} alt="" />
														</a>
														<span className="service-price">$1000</span>
													</div>
													<div className="cate-list">
														<a className="bg-yellow" href="service-details.html">Job Post</a>
													</div>
												</div>
											</div>
											<div className="service-content">
												<h3 className="title">
													<a href="service-details.html">Frilanax Redesign Project</a>
												</h3>
												<p>We have platform we wish to elevate in terms of UI and UX </p>
												<div className="service-content">
													<div className="row d-flex justify-content-around">
														<div className="col-md-3 card-items">
															<h6 >Photoshop</h6>
														</div>
														<div className="col-md-3 card-items ">
															<h6 >illustrator</h6>
														</div>
														<div className="col-md-3 card-items">
															<h6 className="text">JavaScript</h6>
														</div>
														<div className="col-md-3  card-items">
															<h6 >InDesign</h6>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6">
															<b>Intermediate</b>
															<p>Experience level</p>
														</div>
														<div className="col-md-6">
															<b>1 month</b>
															<p>Duration</p>
														</div>
													</div>
													<div className="row d-flex justify-content-around">
														<div className="col-lg-7 ">
															<div className="d-flex Payment-Unverified">		<i class="fa fa-check" aria-hidden="true"></i>
																<h6 >Payment Unverified</h6>
															</div>
														</div>
														<div className="col-lg-5">
															<div className="spend">
																<h6>10k+ Spend</h6>
															</div>
														</div>
													</div>
												</div>

												{/* <div className="rating">
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<span className="d-inline-block average-rating">(5)</span>
												</div> */}
												{/* <div className="user-info">
													<div className="row">
														<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx85</span></span>
														<span className="col ser-location"><span>Hanover, Maryland</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
													</div>
												</div> */}
											</div>
										</div>

										<div className="service-widget">
											<div className="service-img">
												<a href="service-details.html">
													<img className="img-fluid serv-img" alt="Service Image" src={service02} />
												</a>
												<div className="item-info">
													<div className="service-user">
														<a href="#">
															<img src={user01} alt="" />
														</a>
														<span className="service-price">$2000</span>
													</div>
													<div className="cate-list">
														<a className="bg-yellow" href="service-details.html">Job Post</a>
													</div>
												</div>
											</div>
											<div className="service-content">
												<h3 className="title">
													<a href="service-details.html">Frilanax Redesign Project</a>
												</h3>
												<p>We have platform we wish to elevate in terms of UI and UX </p>
												<div className="service-content">
													<div className="row d-flex justify-content-around">
														<div className="col-md-3 card-items">
															<h6 >Photoshop</h6>
														</div>
														<div className="col-md-3 card-items ">
															<h6 >illustrator</h6>
														</div>
														<div className="col-md-3 card-items">
															<h6 className="text">JavaScript</h6>
														</div>
														<div className="col-md-3  card-items">
															<h6 >InDesign</h6>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6">
															<b>Intermediate</b>
															<p>Experience level</p>
														</div>
														<div className="col-md-6">
															<b>1 month</b>
															<p>Duration</p>
														</div>
													</div>
													<div className="row d-flex justify-content-around">
														<div className="col-lg-7 ">
															<div className="d-flex Payment-Unverified">		<i class="fa fa-check" aria-hidden="true"></i>
																<h6 >Payment Unverified</h6>
															</div>
														</div>
														<div className="col-lg-5">
															<div className="spend">
																<h6>10k+ Spend</h6>
															</div>
														</div>
													</div>
												</div>

												{/* <div className="rating">
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<span className="d-inline-block average-rating">(5)</span>
												</div> */}
												{/* <div className="user-info">
													<div className="row">
														<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx85</span></span>
														<span className="col ser-location"><span>Hanover, Maryland</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
													</div>
												</div> */}
											</div>
										</div>

										<div className="service-widget">
											<div className="service-img">
												<a href="service-details.html">
													<img className="img-fluid serv-img" alt="Service Image" src={service02} />
												</a>
												<div className="item-info">
													<div className="service-user">
														<a href="#">
															<img src={user01} alt="" />
														</a>
														<span className="service-price">$3000</span>
													</div>
													<div className="cate-list">
														<a className="bg-yellow" href="service-details.html">Job Post</a>
													</div>
												</div>
											</div>
											<div className="service-content">
												<h3 className="title">
													<a href="service-details.html">Frilanax Redesign Project</a>
												</h3>
												<p>We have platform we wish to elevate in terms of UI and UX </p>
												<div className="service-content">
													<div className="row d-flex justify-content-around">
														<div className="col-md-3 card-items">
															<h6 >Photoshop</h6>
														</div>
														<div className="col-md-3 card-items ">
															<h6 >illustrator</h6>
														</div>
														<div className="col-md-3 card-items">
															<h6 className="text">JavaScript</h6>
														</div>
														<div className="col-md-3  card-items">
															<h6 >InDesign</h6>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6">
															<b>Intermediate</b>
															<p>Experience level</p>
														</div>
														<div className="col-md-6">
															<b>1 month</b>
															<p>Duration</p>
														</div>
													</div>
													<div className="row d-flex justify-content-around">
														<div className="col-lg-7 ">
															<div className="d-flex Payment-Unverified">		<i class="fa fa-check" aria-hidden="true"></i>
																<h6 >Payment Unverified</h6>
															</div>
														</div>
														<div className="col-lg-5">
															<div className="spend">
																<h6>10k+ Spend</h6>
															</div>
														</div>
													</div>
												</div>

												{/* <div className="rating">
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<span className="d-inline-block average-rating">(5)</span>
												</div> */}
												{/* <div className="user-info">
													<div className="row">
														<span className="col-auto ser-contact"><i className="fas fa-phone mr-1"></i> <span>xxxxxxxx85</span></span>
														<span className="col ser-location"><span>Hanover, Maryland</span>  <i className="fas fa-map-marker-alt ml-1"></i></span>
													</div>
												</div> */}
											</div>
										</div>
									</Slider>
								</div>
							</div>


						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Popular;