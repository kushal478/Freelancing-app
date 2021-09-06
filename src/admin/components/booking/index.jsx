import React, { Component } from "react";
import SidebarNav from "../sidebar";
import { Table } from "antd";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import AllBooking from "./all";

class Booking extends Component {

 
  render() {

    return (
      <>
        <SidebarNav />
       
        <div class="page-wrapper">
			<div class="content container-fluid">

            <div class="page-header">
					<div class="row">
						<div class="col">
							<h3 class="page-title">Booking List</h3>
						</div>
						<div class="col-auto text-right">
							<a class="btn btn-white filter-btn" href="javascript:void(0);" id="filter_search">
								<i class="fas fa-filter"></i>
							</a>
						</div>
				   </div>
			</div>

                <div class="row">
					<div class="col-md-12">
						<div class="card">
							<div class="card-body">
								<div class="table-responsive">



                                <Tabs defaultActiveKey="booking">
  <Tab eventKey="booking" title="All Booking">
         <AllBooking />
  </Tab>
  <Tab eventKey="pending" title="Pending">
                2
  </Tab>
  <Tab eventKey="progress" title="In Progress">
            3
  </Tab>
  <Tab eventKey="completed" title="Completed">
                4
</Tab>
<Tab eventKey="rejected" title="Rejected">
                5
</Tab>
<Tab eventKey="canceled" title="Canceled">
                6
</Tab>
</Tabs>
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

export default Booking;
