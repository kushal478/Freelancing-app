import React, { Component } from 'react';
import SidebarNav from "../sidebar";
import { Table } from "antd";
import img1 from "../../assets/images/customer/user-05.jpg";
import img2 from "../../assets/images/customer/user-02.jpg";
import img3 from "../../assets/images/customer/user-03.jpg";
import img4 from "../../assets/images/customer/user-04.jpg";

import Paymentdashboard from "./payments";

class Dashboard extends Component{
	constructor(props) {
        super(props);
        this.state = {
          show: null,
          data: [
            {
              id: "#PT001",
             name:"Annette Silva",
             image:img1,
             date: "9 Sep 2020",
             Service:"Car Repair Services",
              status: "pending",
              price: "$50"
            },
            {
              id: "#PT002",
             name:"Stephen Wilson",
             image:img2,
             date: "8 Sep 2020",
             Service:"Steam Car Wash",
             status: "pending",
             price: "$40"
            },
            {
              id: "#PT003",
             name:"Ryan Rodriguez",
             image:img3,
             date: "9 Sep 2020",
             Service:"Car Repair Services",
             status: "pending",
             price: "$150"
            },
            {
              id: "#PT004",
             name:"Lucile Devera",
             image:img4,
             date: "6 Sep 2020",
             Service:"Interior Designing",
             status: "pending",
             price: "$40"
            },
           
          ],
        };
      }
    
    render(){
		const { data } = this.state;
		const columns = [
			{
			  title: "Customer",
			  dataIndex: "name",
			  render: (text, record) => (
				<div className="text-nowrap">
				  <a href="/admin/profile">
					<img alt="" src={record.image} class="pro-avatar" />
					  {record.name}
				  </a>
				</div>
			  ),
			},
		   
			{
			  title: "Date",
			  dataIndex: "date",
			  render: (text, record) => (
				<div className="text-nowrap">
				  {record.date}
				</div>
			  ),
			},
			{
				title: "Service",
				dataIndex: "Service",
				render: (text, record) => (
				  <>
					{record.Service}
				  </>
				),
			  },
			  {
				title: "Status",
				dataIndex: "status",
				render: (text, record) => (
				  <span className="badge bg-danger inv-badge">
					{text}
				  </span>
				),
			  },
			  {
				title: "Price",
				dataIndex: "price",
				render: (text, record) => (
				  <>
					{record.price}
				  </>
				),
			  },
		  ];
        return(
			<>
			<SidebarNav />
			<div class="page-wrapper">
			  <div class="content container-fluid">
				<div class="page-header">
				  <div class="row">
					<div class="col-12">
					  <h3 class="page-title">Welcome Admin!</h3>
					</div>
				  </div>
				</div>
	
				<div class="row">
				  <div class="col-xl-3 col-sm-6 col-12">
					<div class="card">
					  <div class="card-body">
						<div class="dash-widget-header">
						  <span class="dash-widget-icon bg-primary">
							<i class="far fa-user"></i>
						  </span>
						  <div class="dash-widget-info">
							<h3>429</h3>
							<h6 class="text-muted">Users</h6>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				  <div class="col-xl-3 col-sm-6 col-12">
					<div class="card">
					  <div class="card-body">
						<div class="dash-widget-header">
						  <span class="dash-widget-icon bg-primary">
							<i class="fas fa-user-shield"></i>
						  </span>
						  <div class="dash-widget-info">
							<h3>148</h3>
							<h6 class="text-muted">Providers</h6>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				  <div class="col-xl-3 col-sm-6 col-12">
					<div class="card">
					  <div class="card-body">
						<div class="dash-widget-header">
						  <span class="dash-widget-icon bg-primary">
							<i class="fas fa-qrcode"></i>
						  </span>
						  <div class="dash-widget-info">
							<h3>124</h3>
							<h6 class="text-muted">Services</h6>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				  <div class="col-xl-3 col-sm-6 col-12">
					<div class="card">
					  <div class="card-body">
						<div class="dash-widget-header">
						  <span class="dash-widget-icon bg-primary">
							<i class="far fa-credit-card"></i>
						  </span>
						  <div class="dash-widget-info">
							<h3>$11378</h3>
							<h6 class="text-muted">Subscription</h6>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
	
				<div class="row">
				  <div class="col-md-6 d-flex">
					<div class="card card-table flex-fill">
				   
									  <div class="card-body">
										<div class="table-responsive">
										<div class="card card-table flex-fill">
								  <div class="card-header">
									<h4 class="card-title">Recent Bookings</h4>
								  </div>
								  <div class="card-body">
								
									
									  
									  <Table
							  className=" table table-center table-responsive"
							  style={{ overflowX: "auto" }}
							  columns={columns}
							  // bordered
							  dataSource={data}
							  rowKey={(record) => record.id}
							  pagination={false}
							/>
									
								  
								  </div>
								</div>
						</div>
					  </div>
					</div>
				  </div>
	
				  <Paymentdashboard />
	
	
				</div>
			  </div>
			</div>
		  </>   
        )
     }
  }
  
 export default Dashboard; 