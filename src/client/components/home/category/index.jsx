import React, { Component } from "react";
import category1 from "../../../assets/img/webdesigner.jpg";
import category2 from "../../../assets/img/android.jpg";
import category3 from "../../../assets/img/ios.jpg";
import category4 from "../../../assets/img/wordpress.jpg";
import category5 from "../../../assets/img/logodesign.jpg";
import category6 from "../../../assets/img/tshrtdesign.jpg";

class Categories extends Component {
	render() {
		return (
			<section className="category-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="row">
								<div className="col-md-6">
									<div className="heading">
										<h2>Find By Categories</h2>
										<span>What do you need to find?</span>
									</div>
								</div>
								<div className="col-md-6">
									<div className="viewall">
										<h4><a href="categories.html">View All <i className="fas fa-angle-right"></i></a></h4>
										<span>Categories</span>
									</div>
								</div>
								<div className="catsec">
									<div className="row">
										<div className="col-lg-4 col-md-6">
											<a href="search.html">
												<div className="cate-widget">
													<img src={category1} alt="" />
													<div className="cate-title">
														<h3><span><i className="fas fa-circle"></i> Web Designer</span></h3>
													</div>
													<div className="cate-count">
														<i className="fas fa-clone"></i> 21
													</div>
												</div>
											</a>
										</div>
										<div className="col-lg-4 col-md-6">
											<a href="search.html">
												<div className="cate-widget">
													<img src={category2} alt="" />
													<div className="cate-title">
														<h3><span><i className="fas fa-circle"></i> Android Developer</span></h3>
													</div>
													<div className="cate-count">
														<i className="fas fa-clone"></i> 15
													</div>
												</div>
											</a>
										</div>
										<div className="col-lg-4 col-md-6">
											<a href="search.html">
												<div className="cate-widget">
													<img src={category3} alt="" />
													<div className="cate-title">
														<h3><span><i className="fas fa-circle"></i> IOS Developer</span></h3>
													</div>
													<div className="cate-count">
														<i className="fas fa-clone"></i> 15
													</div>
												</div>
											</a>
										</div>
										<div className="col-lg-4 col-md-6">
											<a href="search.html">
												<div className="cate-widget">
													<img src={category4} alt="" />
													<div className="cate-title">
														<h3><span><i className="fas fa-circle"></i> Wordpress Designer</span></h3>
													</div>
													<div className="cate-count">
														<i className="fas fa-clone"></i> 14
													</div>
												</div>
											</a>
										</div>
										<div className="col-lg-4 col-md-6">
											<a href="search.html">
												<div className="cate-widget">
													<img src={category5} alt="" />
													<div className="cate-title">
														<h3><span><i className="fas fa-circle"></i> Logo Designer</span></h3>
													</div>
													<div className="cate-count">
														<i className="fas fa-clone"></i> 10
													</div>
												</div>
											</a>
										</div>
										<div className="col-lg-4 col-md-6">
											<a href="search.html">
												<div className="cate-widget">
													<img src={category6} alt="" />
													<div className="cate-title">
														<h3><span><i className="fas fa-circle"></i> Tshrt Designe</span></h3>
													</div>
													<div className="cate-count">
														<i className="fas fa-clone"></i> 8
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>


							</div>
						</div>
					</div>
				</div>

			</section>
		);
	}
}
export default Categories;