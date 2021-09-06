import React, { Component } from "react";
import SidebarNav from "../../sidebar";
import { Table } from "antd";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";
import {
  itemRender,
  onShowSizeChange,
} from "../../../components/paginationfunction";

import IMG01 from "../../../assets/images/customer/user-05.jpg";
import IMG02 from "../../../assets/images/customer/user-02.jpg";
import IMG03 from "../../../assets/images/customer/user-03.jpg";
import IMG04 from "../../../assets/images/customer/user-04.jpg";
import IMG05 from "../../../assets/images/customer/user-05.jpg";



class AllBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: null,
      data: [
        {
          id: 1,
          date: "11 Sep 2020",
          user: IMG01,
          name: "Jeffrey Akridge",
          provider: IMG02,
          providername: "Thomas Herzberg",
          service: "Toughened Glass Fitting Services",
          amount: "$83",
        },
        {
            id: 2,
            date: "05 Sep 2020",
            user: IMG03,
            name: "Nancy Olson",
            provider: IMG04,
            providername: "Thomas Herzberg",
            service: "Toughened Glass Fitting Services",
            amount: "$93",
          },
          {
            id: 3,
            date: "02 Sep 2020",
            user: IMG04,
            name: "Nancy Olson",
            provider: IMG05,
            providername: "Thomas Herzberg",
            service: "Toughened Glass Fitting Services",
            amount: "$10",
          },
          {
            id: 4,
            date: "20 Sep 2020",
            user: IMG04,
            name: "Nancy Olson",
            provider:IMG05,
            providername: "Thomas Herzberg",
            service: "Toughened Glass Fitting Services",
            amount: "$10",
          },
          {
            id: 5,
            date: "16 Sep 2020",
            user: IMG04,
            name: "Nancy Olson",
            provider: IMG05,
            providername: "Thomas Herzberg",
            service: "Toughened Glass Fitting Services",
            amount: "$10",
          },
      ],
    };
  }

  handleShow = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { data } = this.state;
    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        render: (text, record) => <>{text}</>,
      },
      {
        title: "Date",
        dataIndex: "date",
        render: (text, record) => <>{text}</>,
      },
      {
        title: "Name",
        dataIndex: "user",
        render: (text, record) => (
          <div className="avatar-img rounded-circle">
            <img alt="" src={record.user} className="avatar-img rounded-circle"/>{record.name}
            {text}
          </div>
        ),
        sorter: (a, b) => a.name.length - b.name.length,
      },
    
      {
        title: "Provider",
        dataIndex: "providername",
        render: (text, record) => (
          <div className="avatar-img rounded-circle">
            <img alt="" src={record.provider} className="avatar-img rounded-circle"/>{text}
            {text}
          </div>
        ),
        sorter: (a, b) => a.providername.length - b.providername.length,
      },

      {
        title: "Service",
        dataIndex: "date",
        render: (text, record) => <>{text}</>,
        sorter: (a, b) => a.date.length - b.date.length,
      },

      {
        title: "Amount",
        dataIndex: "amount",
        render: (text, record) => <>{text}</>,
        sorter: (a, b) => a.amount.length - b.amount.length,
      },

    ];

    return (
      <>
        <SidebarNav />

        <Table
          className="table table-hover table-center mb-0 datatable"
          style={{ overflowX: "auto", width: "100%" }}
          columns={columns}
          bordered
          dataSource={data}
        />
      </>
    );
  }
}

export default AllBooking;
