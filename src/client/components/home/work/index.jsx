import React, { Component } from "react";
import icon01 from "../../../assets/images/icon-1.png";
import icon02 from "../../../assets/images/icon-2.png";
import icon03 from "../../../assets/images/icon-3.png";

class Workflow extends Component {
	render() {
		return (
			<section className="how-work">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading howitworks">
								<h2>How Frilanx Works</h2>
								<span>Find jobs, give jobs and Earn money</span>
							</div>
							<div className="howworksec">
								<div className="row">
									<div className="col-lg-4">
										<div className="howwork">
											<div className="iconround">
												<div className="steps">01</div>
												<img src={icon01} alt="" />
												<span class="material-icons-outlined">

												</span>
											</div>
											<h3>Post jobs </h3>
											<p>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="howwork">
											<div className="iconround">
												<div className="steps">02</div>
												<img src={icon02} alt="" />
											</div>
											<h3>Choose freelancers</h3>
											<p>No job is too big or too small. We've got freelancers for jobs of any size or budget. No job is too complex. We can get it done!</p>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="howwork">
											<div className="iconround">
												<div className="steps">03</div>
												<img src={icon03} alt="" />
											</div>
											<h3>Pay safely</h3>
											<p>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.</p>
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
export default Workflow;