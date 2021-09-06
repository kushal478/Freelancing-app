import React, { Component } from "react";
import Sidebar from "../sidebar";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Modal } from "react-bootstrap";
import Service1 from "../../../assets/images/services/service-01.jpg";
import Service2 from "../../../assets/images/services/service-02.jpg";
import Service3 from "../../../assets/images/services/service-03.jpg";
import Service4 from "../../../assets/images/services/service-04.jpg";
import Service5 from "../../../assets/images/services/service-05.jpg";
import Service7 from "../../../assets/images/services/service-07.jpg";
import Service9 from "../../../assets/images/services/service-09.jpg";

import Provider01 from "../../../assets/images/provider/provider-01.jpg";
import Provider02 from "../../../assets/images/provider/provider-02.jpg";
import Provider03 from "../../../assets/images/provider/provider-03.jpg";
import Provider04 from "../../../assets/images/provider/provider-04.jpg";
import Provider05 from "../../../assets/images/provider/provider-05.jpg";
import Provider06 from "../../../assets/images/provider/provider-06.jpg";

class MyServices extends Component {
  constructor() {
    super();
    this.state = {
      activeModal: null,
    };
  }

  openModal = (id) => {
    this.setState({ activeModal: id }, () => {});
  };
  handleCloseModal = () => {
    this.setState({ activeModal: false }, () => {});
  };

  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-xl-9 col-md-8">
                <h4 className="widget-title">My Services</h4>
                <Tabs defaultActiveKey="active" id="uncontrolled-tab-example">
                  <Tab eventKey="active" title="Active Services">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service1}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider01} alt="" />
                                </a>
                                <span className="service-price">$25</span>
                              </div>
                              <div className="cate-list">
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Glass
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title text-truncate">
                              <a href="/pages/service-details">
                                Toughened Glass Fitting Services
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <span className="d-inline-block average-rating">
                                (4.3)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                    <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service2}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider02} alt="" />
                                </a>{" "}
                                <span className="service-price">$50</span>
                              </div>
                              <div className="cate-list">
                                {" "}
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Automobile
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Car Repair Services
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <span className="d-inline-block average-rating">
                                (5)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                      onClick={() =>
                                        this.handleShow("inactive")
                                      }
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service3}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider03} alt="" />
                                </a>
                                <span className="service-price">$45</span>
                              </div>
                              <div className="cate-list">
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Electrical
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Electric Panel Repairing Service
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (4.5)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service4}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider04} alt="" />
                                </a>
                                <span className="service-price">$14</span>
                              </div>
                              <div className="cate-list">
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Car Wash
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Steam Car Wash
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (0)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service5}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider05} alt="" />
                                </a>
                                <span className="service-price">$100</span>
                              </div>
                              <div className="cate-list">
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Cleaning
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                House Cleaning Services
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (0)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service2}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider06} alt="" />
                                </a>{" "}
                                <span className="service-price">$80</span>
                              </div>
                              <div className="cate-list">
                                {" "}
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Computer
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Computer & Server AMC Service
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (0)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service7}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider02} alt="" />
                                </a>
                                <span className="service-price">$5</span>
                              </div>
                              <div className="cate-list">
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Interior
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Interior Designing
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (4)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service2}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider01} alt="" />
                                </a>
                                <span className="service-price">$75</span>
                              </div>
                              <div className="cate-list">
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Construction
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Building Construction Services
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (4)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service9}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img alt="" src={Provider02} />
                                </a>{" "}
                                <span className="service-price">$500</span>
                              </div>
                              <div className="cate-list">
                                {" "}
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Painting
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Commercial Painting Services
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (3)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="/pages/edit-service"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit"></i> Edit
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Inactive
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pagination">
                        <ul>
                          <li className="active">
                            <a href="javascript:void(0);">1</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">2</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">4</a>
                          </li>
                          <li className="arrow">
                            <a href="javascript:void(0);">
                              <i className="fas fa-angle-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Inactive" title="Inactive Services">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 inactive-service">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service9}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider02} alt="" />
                                </a>
                                <span className="service-price">$150</span>
                              </div>
                              <div className="cate-list">
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Plumbing
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Plumbing Services
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (3)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="si-delete-inactive-service text-danger"
                                      data-id="149"
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                  <a
                                      href="javascript:void(0);"
                                      className="text-danger"
                                      onClick={() => this.openModal("inactive")}
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 inactive-service">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service9}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img
                                    src="assets/img/provider/provider-01.jpg"
                                    alt=""
                                  />
                                </a>{" "}
                                <span className="service-price">$32</span>
                              </div>
                              <div className="cate-list">
                                {" "}
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Carpentry
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Wooden Carpentry Work
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <span className="d-inline-block average-rating">
                                (5)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="si-delete-inactive-service text-danger"
                                      data-id="120"
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                    <a
                                      href="javascript:void(0)"
                                      className="si-delete-active-service text-success"
                                      data-id="120"
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 inactive-service">
                        <div className="service-widget">
                          <div className="service-img">
                            <a href="/pages/service-details">
                              <img
                                className="img-fluid serv-img"
                                alt="Service Image"
                                src={Service3}
                              />
                            </a>
                            <div className="item-info">
                              <div className="service-user">
                                <a href="javascript:void(0);">
                                  <img src={Provider02} alt="" />
                                </a>
                                <span className="service-price">$54</span>
                              </div>
                              <div className="cate-list">
                                <a
                                  className="bg-yellow"
                                  href="/pages/service-details"
                                >
                                  Appliance
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="title">
                              <a href="/pages/service-details">
                                Air Conditioner Service
                              </a>
                            </h3>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating">
                                (3)
                              </span>
                            </div>
                            <div className="user-info">
                              <div className="service-action">
                                <div className="row">
                                  <div className="col">
                                    <a
                                      href="javascript:void(0)"
                                      className="si-delete-inactive-service text-danger"
                                      data-id="107"
                                    >
                                      <i className="far fa-trash-alt"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                  <div className="col text-right">
                                    <a
                                      href="javascript:void(0)"
                                      className="si-delete-active-service text-success"
                                      data-id="107"
                                    >
                                      <i className="fas fa-info-circle"></i>{" "}
                                      Active
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
          <Modal   show={this.state.activeModal === "inactive"}
            onHide={this.handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title><h5>Inactive Service?</h5></Modal.Title>
        </Modal.Header>
        <div className="modal-body">
						<p>Service is Booked and Inprogress..</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-danger si_accept_cancel" data-dismiss="modal">OK</button>
					</div>
      </Modal>
        </div>
      </>
    );
  }
}
export default MyServices;
