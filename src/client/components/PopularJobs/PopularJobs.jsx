import React, { Component } from "react";
import '../PopularJobs/PopularJobs.css'

import cardimg1 from '../../assets/Images&icons/TonyStark.png';

// import dislike from '../../../assets/Images&icons/dislike.png';
// import like from '../../../assets/Images&icons/like.png';
// import img01 from '../../../assets/Images&icons/introImage1.png';




class PopularJobs extends Component {
    render() {

        return (
            <section className="PopularJobs">
                <div className="container">

                    <section className="d-flex justify-content-end">
                        <button class="btn button-color btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Find Job By Filter</button>
                        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Select Filter</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <h6>Work From Home</h6>
                            </div>
                        </div>
                    </section>

                    <div className="row d-felx justify-content-center">
                        <div className="col-lg-7 card-shadow  my-3">
                            <div className="p-3 ">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h5>Angular Developer</h5>
                                        <div className="d-flex">
                                            <p>Virtusa Consulting Services Pvt Ltd - 3.6</p>
                                            <span className="start-icon mx-2"><i class="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                            <a href="">(250 Review)</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <img src={cardimg1} alt="..." />
                                    </div>
                                </div>

                                <div className="row mt-1">
                                    <div className="col-md-3">
                                        <b >$3000</b>
                                        <p className="text-muted">budget</p>
                                    </div>
                                    <div className="col-md-3">
                                        <b>1 month</b>
                                        <p className="text-muted">Duration</p>
                                    </div>
                                    <div className="col-md-3">
                                        <b>Intermediate</b>
                                        <p className="text-muted">Experience level</p>
                                    </div>

                                    <div className="row ml-1 my-2 d-flex justify-content-start">
                                        <div className="col-md-2 card-items1">
                                            <h6 >Photoshop</h6>
                                        </div>
                                        <div className="col-md-2  card-items1">
                                            <h6 >illustrator</h6>
                                        </div>
                                        <div className="col-md-2 card-items1">
                                            <h6 className="text">JavaScript</h6>
                                        </div>
                                        <div className="col-md-2  card-items1">
                                            <h6 >InDesign</h6>
                                        </div>
                                    </div>
                                    <p>We have platform we wish to elevate in terms of UI and UX. Interested Candidates to Apply / share profiles to aashutosh.patel@kotak.com. </p>
                                </div>
                                <div className="row d-flex justify-content-start">
                                    <div className="col-lg-5 ">
                                        <div className="d-flex Payment-Unverified1">
                                            <i class="fa fa-check mx-2" aria-hidden="true"></i>
                                            <h6 >Payment Unverified</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="spend">
                                            <h6>10k+ Spend</h6>
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
export default PopularJobs;