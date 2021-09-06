import React, { Component } from "react";
import carousalimg1 from '../../../assets/img/page9.jpg'


class HomeBanner extends Component {
    render() {
        return (
            <section className="hero-section ">
                <div className="layer">
                    <div className="home-banner"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">



                                <div className="section-search">
                                    <h3>World's Largest <span>Freelancing Website</span></h3>
                                    <p>Find tailor-made Freelancers</p>
                                    <div className="search-box">
                                        <form action="search.html">
                                            <div className="search-input ">

                                                <i class="fa fa-search bficon" aria-hidden="true"></i>

                                                <div className="form-group mb-0">
                                                    <input type="text" className="form-control" placeholder="Search your job here" />
                                                </div>
                                            </div>
                                            {/* <div className="search-input">
                                                <i className="fas fa-location-arrow bficon"></i>
                                                <div className="form-group mb-0">
                                                    <input type="text" className="form-control" placeholder="Your Location" />
                                                    <a className="current-loc-icon current_location" href="javascript:void(0);">
                                                        <i className="fas fa-crosshairs"></i></a>
                                                </div>
                                            </div> */}
                                            <div className="search-btn">
                                                <button className="btn search_service" type="submit">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="search-cat">
                                        <i className="fas fa-circle"></i>
                                        <span>Popular Searches</span>
                                        <a href="search.html">Website Design</a>
                                        <a href="search.html">Android Developer</a>
                                        <a href="search.html">IOS Developer</a>
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
export default HomeBanner;