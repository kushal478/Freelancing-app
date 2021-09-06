import React, { Component } from "react";
import SidebarNav from "../sidebar";
import { Table } from "antd";
import IMG01 from "../../assets/images/customer/user-01.jpg";
import IMG02 from "../../assets/images/customer/user-02.jpg";
import IMG03 from "../../assets/images/customer/user-03.jpg";
import IMG04 from "../../assets/images/customer/user-04.jpg";
import IMG05 from "../../assets/images/customer/user-05.jpg";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";


class ServiceProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: null,
          data: [
           {
             id: 1,
             image: IMG01,
             name: "Jeffrey Akridge",
             contact: "832-212-0082",
             email:"thomasherzberg@example.com",
             date: "12 Sep 2020",
             subscription: "Enterprice"
            },
            {
                id: 2,
                image: IMG02,
                name: "Ricardo Flemings",
                contact: "631-374-3243",
                email:"ricardoflemings@example.com",
                date: "15 Aug 2020",
                subscription: "Standard"
               },
               {
                id: 3,
                image: IMG03,
                name: "Richard Hughes",
                contact: "937-846-6789",
                email:"thomasherzberg@example.com",
                date: "12 Sep 2020",
                subscription: "Enterprice"
               },
               {
                id: 4,
                image: IMG04,
                name: "Ricardo Lung",
                contact: "419-523-6835",
                email:"davidmorrison@example.com",
                date: "15 Sep 2020",
                subscription: "Enterprice"
               },
               {
                id: 5,
                image: IMG05,
                name: "Nina Wilson",
                contact: "937-846-6789",
                email:"ninawilson@example.com",
                date: "12 Sep 2020",
                subscription: "Enterprice"
               },
          ],
        };
      }
  render() {

    const { data } = this.state;
    const columns = [
        {
          title: "Id",
          dataIndex: "id",
          render: (text, record) => (
          <>{text}</>
          ),
        },
        {
          title: "Name",
          dataIndex: "name",
          render: (text, record) => (
           <><div className="avatar avatar-sm mr-2">
                <img alt="" src={record.image} className="avatar-img rounded-circle"/>
            </div>
            {text}</>
          ),
          sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: "Email",
          dataIndex: "email",
          render: (text, record) => (
           <>
             {text}
            </>
          ),
          sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            title: "Contact No",
            dataIndex: "contact",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.contact.length - b.contact.length,
          },
          {
            title: "Reg Date",
            dataIndex: "date",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.date.length - b.date.length,
          },
          {
            title: "Subscripton",
            dataIndex: "subscription",
            render: (text, record) => (
             <>
               {text}
              </>
            ),
            sorter: (a, b) => a.subscription.length - b.subscription.length,
          },


      ];
  
    return (
      <>
        <SidebarNav />
        <div class="page-wrapper">
			      <div class="content container-fluid">
                  <div class="page-header">
                <div class="row">
                  <div class="col">
                    <h3 class="page-title">Service Provider</h3>
                  </div>
                  <div class="col-auto text-right">
                    <a class="btn btn-white filter-btn" href="javascript:void(0);" id="filter_search">
                      <i class="fas fa-filter"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="card filter-card" id="filter_inputs">
					<div class="card-body pb-0">
						<form>
							<div class="row filter-row">
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>Name</label>
										<input class="form-control" type="text" />
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>From Date</label>
										<div class="cal-icon">
											<input class="form-control datetimepicker" type="text" />
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<label>To Date</label>
										<div class="cal-icon">
											<input class="form-control datetimepicker" type="text" />
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-3">
									<div class="form-group">
										<button class="btn btn-primary btn-block" type="submit">Submit</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>

                <div class="row">
					<div class="col-md-12">
						<div class="card">
							<div class="card-body">
								<div class="table-responsive">
								<Table
                        className="table table-hover table-center mb-0 datatable"
                        style={{ overflowX: "auto", width:"100%"}}
                        columns={columns}
                        // bordered
                        dataSource={data}
                        rowKey={(record) => record.id}
                        showSizeChanger={true}
                        pagination={{
                          total: data.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
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

export default ServiceProvider;
