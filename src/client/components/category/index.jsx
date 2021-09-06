import React, { Component } from "react";
import { Link } from "react-router-dom";

import category1 from "../../assets/img/webdesigner.jpg";
import category2 from "../../assets/img/android.jpg";
import category3 from "../../assets/img/ios.jpg";
import category4 from "../../assets/img/wordpress.jpg";
import category5 from "../../assets/img/logodesign.jpg";
import category6 from "../../assets/img/tshrtdesign.jpg";
import category7 from "../../assets/img/brand.jpg";
import category8 from "../../assets/img/brand.jpg";
import category9 from "../../assets/img/brand.jpg";


class Categories extends Component {
	render() {
		return (
			<>
				<div className="breadcrumb-bar">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="breadcrumb-title">
									<h2>Categories</h2>
								</div>
							</div>
							<div className="col-auto float-right ml-auto breadcrumb-menu">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<Link to="/">Home</Link>
										</li>
										<li className="breadcrumb-item active" aria-current="page">Categories</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>


				<div className="content">
					<div className="container">
						<div className="catsec clearfix">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category1} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i>Web Designer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 21
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category2} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i>Android Developer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 15
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category3} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i>IOS Developer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 15
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category4} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Wordpress Designer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 14
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category5} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i>Logo Designer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 10
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category6} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i>Tshrt Designer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 8
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category7} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Brand Designer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 18
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category8} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Brand Designer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 32
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="/search">
										<div className="cate-widget">
											<img src={category9} alt="" />
											<div className="cate-title">
												<h3><span><i className="fas fa-circle"></i> Brand Designer</span></h3>
											</div>
											<div className="cate-count">
												<i className="fas fa-clone"></i> 19
											</div>
										</div>
									</Link>
								</div>
							</div>
							<div className="pagination">
								<ul>
									<li className="active"><a href="#0">1</a></li>
									<li><a href="#0">2</a></li>
									<li><a href="#0">3</a></li>
									<li><a href="#0">4</a></li>
									<li className="arrow"><a href="#0"><i className="fas fa-angle-right"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Categories;
