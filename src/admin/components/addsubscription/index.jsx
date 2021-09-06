import React, { Component } from "react";
import SidebarNav from "../sidebar";

class AddSubscriptions extends Component {
  render() {
    return (
      <>
        <SidebarNav />
    
        <div className="page-wrapper">
			<div className="content container-fluid">
				<div className="row">
					<div className="col-xl-8 offset-xl-2">

                    <div className="page-header">
							<div className="row">
								<div className="col-sm-12">
                                <h3 className="page-title">Add Subscription</h3>
								</div>
							</div>
						</div>

                        <div className="card">
							<div className="card-body">
							
                            <form action="subscriptions.html">
									<div className="form-group">
										<label>Subscription Name</label>
										<input className="form-control" type="text" placeholder="Free Trial" />
									</div>
									<div className="form-group">
										<label>Subscription Amount</label>
										<input className="form-control" type="text" />
									</div>
									<div className="form-group">
										<label>Subscription Durations</label>
										<select className="form-control select">
											<option>Select Duration</option>
											<option>One Month</option>
											<option>3 Months</option>
											<option>6 Months</option>
											<option>One Year</option>
											<option>2 Years</option>
										</select>
									</div>
									<div className="form-group">
										<label className="d-block">Subscription Status</label>
										<div className="custom-control custom-radio custom-control-inline">
											<input type="radio" id="subscription_active" className="custom-control-input" checked="checked" />
											<label className="custom-control-label" for="subscription_active">Active</label>
										</div>
										<div className="custom-control custom-radio custom-control-inline">
											<input type="radio" id="subscription_inactive" className="custom-control-input" />
											<label className="custom-control-label" for="subscription_inactive">Inactive</label>
										</div>
									</div>
									<div className="mt-4">
										<button className="btn btn-primary" type="submit">Submit</button>
										<a href="subscriptions.html" className="btn btn-link">Cancel</a>
									</div>
								</form>
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

export default AddSubscriptions;
