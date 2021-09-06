import React, { Component } from "react";
import Sidebar from "../sidebar";


import { Table } from "antd";

class Wallet extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  show: null,
		  data: [
			{
			  id: "#1",
			  date: "14 Jul 2020",
			  wallet: "$3486",
			  credit: "$399",
			  debit: "$0",
			  available:"$3885",
			  reason: "Complete the Service",
			  status: "credit" 	
			},
			{
				id: "#2",
				date: "18 Jul 2020",
				wallet: "$3486",
				credit: "$872",
				debit: "$0",
				available:"$3885",
				reason: "Complete the Service",
				status: "credit" 
			  },
			  {
				id: "#3",
				date: "22 Jul 2020",
				wallet: "$3486",
				credit: "$299",
				debit: "$0",
				available:"$3885",
				reason: "Complete the Service",
				status: "credit" 
			  },
			  {
				id: "#4",
				date: "26 Jul 2020",
				wallet: "$3486",
				credit: "$329",
				debit: "$0",
				available:"$3885",
				reason: "Complete the Service",
				status: "credit" 
			  },
		 
		 
		  ],
		};
	  }
  render() {

	const { data } = this.state;

    const columns = [
      {
        title: "id",
        dataIndex: "id",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },

	  {
        title: "Date",
        dataIndex: "date",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Wallet",
        dataIndex: "wallet",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Credit",
        dataIndex: "credit",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Debit",
        dataIndex: "debit",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Available",
        dataIndex: "available",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Reason",
        dataIndex: "reason",
        render: (text, record) => (
          <>
				{text}
          </>
        ),
	  },
	  {
        title: "Status",
        dataIndex: "status",
        render: (text, record) => (
          <div className="badge bg-success-light">
				{text}
          </div>
        ),
	  },

	  
 
    ];

    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-xl-9 col-md-8">
						<div class="row">
							<div class="col-xl-6 col-lg-6 col-md-6">
								<div class="card">
									<div class="card-body">
										<h4 class="card-title">Wallet</h4>
										<div class="wallet-details">
											<span>Wallet Balance</span>
											<h3>$3885</h3>
											<div class="d-flex justify-content-between my-4">
												<div>
													<p class="mb-1">Total Credit</p>
													<h4>$5314</h4>
												</div>
												<div>
													<p class="mb-1">Total Debit</p>
													<h4>$1431</h4>
												</div>
											</div>
											<div class="wallet-progress-chart">
												<div class="d-flex justify-content-between">
													<span>$1431</span>
													<span>$5,314.00</span>
												</div> 
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6">
								<div class="card">
									<div class="card-body">
										<h4 class="card-title">Withdraw</h4>
										<form action="#">
											<div class="form-group">
												<div class="input-group mb-3">
													<div class="input-group-prepend">
														<label class="input-group-text display-5">$</label>
													</div>
													<input type="text" maxlength="4" class="form-control" placeholder="00.00" />
												</div>
											</div>
										</form>
										<div class="text-center mb-3">
											<h5 class="mb-3">OR</h5> 
											<ul class="list-inline mb-0">
												<li class="line-inline-item mb-0 d-inline-block">
													<a href="javascript:;" class="updatebtn">$50</a>
												</li>
												<li class="line-inline-item mb-0 d-inline-block">
													<a href="javascript:;" class="updatebtn">$100</a>
												</li>
												<li class="line-inline-item mb-0 d-inline-block">
													<a href="javascript:;" class="updatebtn">$150</a>
												</li>
											</ul>
										</div>
										<a href="javascript:void(0);" class="btn btn-primary btn-block withdraw-btn">Withdraw</a>
									</div>
								</div>
							</div>
						</div>

						<h4 class="mb-4">Recent Transactions</h4>
						<div class="card transaction-table mb-0">
							<div class="card-body">
								<div class="table-responsive">
								<Table
                             
							 className="table table-center mb-0"
							
							 columns={columns}
							 // bordered
							 dataSource={data}
							 rowKey={(record) => record.id}
						
						   />
									</div>
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
export default Wallet;
