import React, { Component } from "react";
import SidebarNav from "../sidebar";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import logo from "../../assets/images/logo.png";
import favicon from "../../assets/images/favicon.png";

class Settings extends Component {
 

  render() {
 
    return (
      <>
        <SidebarNav />
        <div className="page-wrapper settings">
			<div className="content container-fluid">
			
				
				<div className="page-header">
					<div className="row">
						<div className="col-12">
							<h3 className="page-title">General Settings</h3>
						</div>
					</div>
				</div>

      <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
  <Tab eventKey="general" title="General Settings">
  <div className="card mb-0">
												<div className="card-header">
													<h4 className="card-title">General Settings</h4>
												</div>
												<div className="card-body">
													<div className="form-group">
														<label>Website Name</label>
														<input type="text" className="form-control" placeholder="Dreamguy's Technologies" />
													</div>
													<div className="form-group">
														<label>Contact Details</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-group">
														<label>Mobile Number</label>
														<input type="text" className="form-control" />
													</div>
													<div className="form-group">
														<label>Currency</label>
														<p><strong>USD $ </strong></p>
													</div>
													<div className="form-group">
														<label>Website Logo</label>
														<div className="uploader">
															<input type="file" className="form-control" />
														</div>
														<p className="form-text text-muted small mb-0">Recommended image size is <b>150px x 150px</b>
														</p>
														<img src={logo} className="site-logo" alt="" />
													</div>
													<div className="form-group">
														<label>Favicon</label>
														<div className="uploader">
															<input type="file" className="form-control" />
														</div>
														<p className="form-text text-muted small mb-0">Recommended image size is <b>16px x 16px</b> or <b>32px x 32px</b></p>
														<p className="form-text text-muted small mb-1">Accepted formats: only png and ico</p>
														<img src={favicon} className="fav-icon" alt="" />
													</div>
												</div>
											</div>
  </Tab>
  <Tab eventKey="email" title="Email Settings">
  <div className="card mb-0">
											
												<div className="card-body">
													
													<form> 
									<div class="form-group">
										<div class="custom-control custom-radio custom-control-inline">
											<input class="custom-control-input" id="php_mail" name="gateway_type" type="radio" checked />
											<label class="custom-control-label" for="php_mail">PHP Mail</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input class="custom-control-input" id="smtp_mail" name="gateway_type" type="radio" />
											<label class="custom-control-label" for="smtp_mail">SMTP</label>
										</div>
									</div>
									
									<div class="phpmail mt-3">
										<div class="form-group">
											<label>Email From Address</label>
											<input type="email" class="form-control" />
										</div>
										<div class="form-group">
											<label>Email Password</label>
											<input type="password" class="form-control" />
										</div>
										<div class="form-group">
											<label>Emails From Name</label>
											<input type="text" class="form-control" />
										</div>
									</div>
									
									<div class="smtpmail">
										<div class="form-group">
											<label>Email From Address</label>
											<input type="email" class="form-control" />
										</div>
										<div class="form-group">
											<label>Email Password</label>
											<input type="password" class="form-control" />
										</div>
										<div class="form-group">
											<label>Email Host</label>
											<input type="text" class="form-control" />
										</div>
										<div class="form-group">
											<label>Email Port</label>
											<input type="text" class="form-control" />
										</div>
									</div>
									<div class="mt-4">
										<button type="submit" class="btn btn-primary">Save Changes</button>
									</div>
								</form>
												</div>
											</div>
  </Tab>
  <Tab eventKey="payment" title="Payment Gateway">
  <div className="card mb-0">
											
												<div className="card-body">
												<form>
									<h4 class="text-primary">Stripe</h4>
									<div class="form-group">
										<label>Stripe Option</label>
										<div>
											<div class="custom-control custom-radio custom-control-inline">
												<input class="custom-control-input" id="sandbox" name="gateway_type" value="sandbox" type="radio" checked />
												<label class="custom-control-label" for="sandbox">Sandbox</label>
											</div>
											<div class="custom-control custom-radio custom-control-inline">
												<input class="custom-control-input" id="livepaypal" name="gateway_type" value="live" type="radio" />
												<label class="custom-control-label" for="livepaypal">Live</label>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label>Gateway Name</label>
										<input type="text" value="Stripe" class="form-control" placeholder="Gateway Name" />
									</div>
									<div class="form-group">
										<label>API Key</label>
										<input type="text" value="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr" class="form-control" />
									</div>
									<div class="form-group">
										<label>Rest Key</label>
										<input type="text" value="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3" class="form-control" />
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Submit</button>
										<a href="stripe_payment_gateway.html" class="btn btn-link ml-2">Cancel</a>
									</div>
								</form>
												</div>
											</div>
  </Tab>
  <Tab eventKey="sms" title="SMS Gateway">
  <div class="card">
								<div class="card-body">
									<div class="row align-items-center">
										<div class="col">
											<h5>Default OTP</h5>
											<p class="mb-0">You can use default otp <strong>1234</strong> for Tom Burns purpose</p>
										</div>
										<div class="col-auto">
											<div class="status-toggle">
												<input id="default_otp" class="check" type="checkbox" checked />
												<label for="default_otp" class="checktoggle">checkbox</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="card">
								<div class="card-body">
									<h4 class="card-title">Nexmo</h4>
									<div class="form-group">
										<label>API Key</label>
										<input type="text" class="form-control" />
									</div>
									<div class="form-group">
										<label>API Secret Key</label>
										<input type="text" class="form-control" />
									</div>
									<div class="form-group">
										<label>Sender ID</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mt-4">
										<button type="submit" class="btn btn-primary center-block">Save Changes</button>
									</div>
								</div>
							</div>
</Tab>
</Tabs>
          </div>
        </div>        
      </>
    );
  }
}

export default Settings;
