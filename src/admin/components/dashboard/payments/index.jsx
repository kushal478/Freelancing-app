import React, { Component } from "react";

import { Table } from "antd";

import img1 from "../../../assets/images/provider/provider-01.jpg";
import img2 from "../../../assets/images/provider/provider-02.jpg";
import img3 from "../../../assets/images/provider/provider-03.jpg";
import img4 from "../../../assets/images/provider/provider-04.jpg";

class Paymentdashboard extends Component {

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
    
  render() {

    const { data } = this.state;
    const columns = [
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
          title: "User",
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
            title: "Provider",
            dataIndex: "provider",
            render: (text, record) => (
              <div className="text-nowrap">
                <a href="/admin/profile">
                  <img alt="" src={record.image} class="pro-avatar" />
                    {text}
                </a>
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
            title: "Price",
            dataIndex: "price",
            render: (text, record) => (
              <>
                {record.price}
              </>
            ),
          },
          {
            title: "Status",
            dataIndex: "status",
            render: (text, record) => (
              <span className="badge badge-dark">
                {text}
              </span>
            ),
          },
         
      ];
  
    return (
      <>
    
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
           
      </>
    );
  }
}

export default Paymentdashboard;
