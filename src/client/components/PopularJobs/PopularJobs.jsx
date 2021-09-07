import React, { Component } from "react";
import '../PopularJobs/PopularJobs.css'

import cardimg1 from '../../assets/Images&icons/TonyStark.png';

// import dislike from '../../../assets/Images&icons/dislike.png';
// import like from '../../../assets/Images&icons/like.png';
// import img01 from '../../../assets/Images&icons/introImage1.png';




class PopularJobs extends Component {
    render() {

        return ( 
            <section className="my-3 ">
                <div className="container-fluid">
                    <div className="row" id="parent">
                        <div className="col-md-2 fixed-sidebar">
                            <div className="card filter-card">
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Search Filter</h4>
                                    <form id="search_form">
                                        <div className="filter-widget">
                                            <div className="filter-list">
                                                <h4 className="filter-title">Keyword</h4>
                                                <input type="text" className="form-control" placeholder="What are you looking for?" />
                                            </div>
                                            <div className="filter-list">
                                                <h4 className="filter-title">Sort By</h4>
                                                <select className="form-control selectbox select">
                                                    <option>Sort By</option>
                                                    <option>Price Low to High</option>
                                                    <option>Price High to Low</option>
                                                    <option>Newest</option>
                                                </select>
                                            </div>
                                            <div className="filter-list">
                                                <h4 className="filter-title">Categories</h4>
                                                <select className="form-control form-control selectbox select">
                                                    <option>All Categories</option>
                                                    <option>Computer</option>
                                                    <option selected="">Automobile</option>
                                                    <option>Car Wash</option>
                                                    <option>Cleaning</option>
                                                    <option>Electrical</option>
                                                    <option>Construction</option>
                                                </select>
                                            </div>
                                            <div className="filter-list">
                                                <h4 className="filter-title">Location</h4>
                                                <input className="form-control" type="text" placeholder="Search Location" />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary pl-5 pr-5 btn-block get_services" type="button">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 px-xl-5">
                            <div className="px-xl-2">
                                <div className="mt-4 p-3 box-shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="font-sm text-light-grey bold-none">Posted- 21 days ago</h6>
                                            <h5 className="color-blue">FreeLance Redesign Product</h5>
                                        </div>
                                        <div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9SURBVHgB7drtTcMwFIXhAxOwAWaDbkA3ACbAozACGwATICboCO0GDhPQDcCRGlGhRjVw4zr2+0hHUdV/RzeftgQAAAAAAAAAAAAgqzPl4WLuY/ze70O6veN2d3yP2eyyFbSI+Yj5NMg65inmVo1yMUE2Zf5M0PikV2ulacocslJDvKYtc0gzgijUjFeeMpspNIhCzXjlK7O4Qs9l70Yw45R3Oquf0KUaZ13otWAqqPFT3pJT/jKrvoY6wbTQpcCEWrMs9FIwLfRCoFBrlot0p3qEybXQmGSKjyNNm3uhnQpjWWin/F5UsUflfeUMqpyT3YaGlHg1oN8l0k/O1GW+qlBTPXJ4/f7b6GKXFFcq8IZUmn7qUqbzQUjSbwRLuRE5IUnKDc0LyY6VuRaSOR0v1GkG5vLqOexmLl4phW7/+X8xSiq0iv3zJZ3yG1WgpELfBFP9EsrYs2jQTJQ0of019E6Hr6Wd8Gcu5lnf07oWr5sAAAAAAAAAAAAAxnwB9oO/gao8jq0AAAAASUVORK5CYII=" className="mr-4" id="dislike" />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7dlBTttAFAbg/7lNirrKEbwBskyOwA3ColLVRGpuEDhBzQmAE5BKTcSSG+AblGVKu/AR2FBBUvI6YwexICEz9oxj0Ps2ATSe+Mf2eN4MIIQQQgghhMiD4ABvf2oBtZbqLcz+gAQ8T+jPeQxLLvtaJndgDjsN1D8OQMGB+q2xovsbMF8geDiiyXlSRl/r5ArMu72B+ohWn9yygzii6/GRz75MWAfmne6ZOqqPPBhXmNb2KBneuO7LlFVg3u0eq48DFLE4UdRnx7nDPonp12jP5gDjwNmtxydwQj2PNrfwy05U6EPTxkaBufk5BL+7VD+GqKI5t+n3+MqkaWDSSIXtoKphNaKBaVOzwIBxhxtB6HDYN3pE1gbm7S9qIlDhq5tpYOuuZdJw/RWmIMRrwOQocDB3NZr6xeTmln5rJPBz8xivQWB2nmsDLyoTq/nqRtxtuZx40CmqjDE0LSLMAk/f6zl0da+yqpGNm5o0Wvz3ctWf3hFbLQjYlYfN7lDdPl9RFarUpOtR2+YQq9cSTUZ99RGjGhJMb61qYc3+PXxf20+L+M1KQA9qtePCelzJt6alK5MPs5/YTFGRhc25kJdrppUOYupL0y8vV6GwWqF16ZJXQgqH1QovxJcU2klYzc3Og36m67NL1ZtRTWrJWVjNSWDNU2inYTVngR85m5yk69e3uV49L3FeD6eTE6Ji01DCdx9hs6494WYvUntA32ArnRuPI3jiLbDGO72OCnAGvapo5lDtIjja3VjOa2DN7LWltl4I+zT5EcMz72ta6QibzcripQ304ET/2mWETc8HJXr+XPMp7v9GPganVUoNrKU7GWprBEEQl3VVhRBCCCGEEMX9B9RgC9Tp04gRAAAAAElFTkSuQmCC" id="like" />
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3 ">
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Python</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Javascript</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Django</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Html</h6>
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3">
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">$ 3000</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Budget</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">1 Month</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Duration</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">Intermediate</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Experience Level</h6>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h6 className="font-sm bold-none">We have a Platform we wish to elevate in terms of UI and UX</h6>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-start">
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 mx-3 border-radius bg-danger text-white"><i class="fa fa-check mr-2 round-bg-white" aria-hidden="true"></i>Payment Unverified</h6>
                                        </div>
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 border-radius bg-sunlight">10k+ Stipend</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 box-shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="font-sm text-light-grey bold-none">Posted- 21 days ago</h6>
                                            <h5 className="color-blue">FreeLance Redesign Product</h5>
                                        </div>
                                        <div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9SURBVHgB7drtTcMwFIXhAxOwAWaDbkA3ACbAozACGwATICboCO0GDhPQDcCRGlGhRjVw4zr2+0hHUdV/RzeftgQAAAAAAAAAAAAgqzPl4WLuY/ze70O6veN2d3yP2eyyFbSI+Yj5NMg65inmVo1yMUE2Zf5M0PikV2ulacocslJDvKYtc0gzgijUjFeeMpspNIhCzXjlK7O4Qs9l70Yw45R3Oquf0KUaZ13otWAqqPFT3pJT/jKrvoY6wbTQpcCEWrMs9FIwLfRCoFBrlot0p3qEybXQmGSKjyNNm3uhnQpjWWin/F5UsUflfeUMqpyT3YaGlHg1oN8l0k/O1GW+qlBTPXJ4/f7b6GKXFFcq8IZUmn7qUqbzQUjSbwRLuRE5IUnKDc0LyY6VuRaSOR0v1GkG5vLqOexmLl4phW7/+X8xSiq0iv3zJZ3yG1WgpELfBFP9EsrYs2jQTJQ0of019E6Hr6Wd8Gcu5lnf07oWr5sAAAAAAAAAAAAAxnwB9oO/gao8jq0AAAAASUVORK5CYII=" className="mr-4" id="dislike" />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7dlBTttAFAbg/7lNirrKEbwBskyOwA3ColLVRGpuEDhBzQmAE5BKTcSSG+AblGVKu/AR2FBBUvI6YwexICEz9oxj0Ps2ATSe+Mf2eN4MIIQQQgghhMiD4ABvf2oBtZbqLcz+gAQ8T+jPeQxLLvtaJndgDjsN1D8OQMGB+q2xovsbMF8geDiiyXlSRl/r5ArMu72B+ohWn9yygzii6/GRz75MWAfmne6ZOqqPPBhXmNb2KBneuO7LlFVg3u0eq48DFLE4UdRnx7nDPonp12jP5gDjwNmtxydwQj2PNrfwy05U6EPTxkaBufk5BL+7VD+GqKI5t+n3+MqkaWDSSIXtoKphNaKBaVOzwIBxhxtB6HDYN3pE1gbm7S9qIlDhq5tpYOuuZdJw/RWmIMRrwOQocDB3NZr6xeTmln5rJPBz8xivQWB2nmsDLyoTq/nqRtxtuZx40CmqjDE0LSLMAk/f6zl0da+yqpGNm5o0Wvz3ctWf3hFbLQjYlYfN7lDdPl9RFarUpOtR2+YQq9cSTUZ99RGjGhJMb61qYc3+PXxf20+L+M1KQA9qtePCelzJt6alK5MPs5/YTFGRhc25kJdrppUOYupL0y8vV6GwWqF16ZJXQgqH1QovxJcU2klYzc3Og36m67NL1ZtRTWrJWVjNSWDNU2inYTVngR85m5yk69e3uV49L3FeD6eTE6Ji01DCdx9hs6494WYvUntA32ArnRuPI3jiLbDGO72OCnAGvapo5lDtIjja3VjOa2DN7LWltl4I+zT5EcMz72ta6QibzcripQ304ET/2mWETc8HJXr+XPMp7v9GPganVUoNrKU7GWprBEEQl3VVhRBCCCGEEMX9B9RgC9Tp04gRAAAAAElFTkSuQmCC" id="like" />
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3 ">
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Python</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Javascript</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Django</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Html</h6>
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3">
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">$ 3000</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Budget</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">1 Month</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Duration</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">Intermediate</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Experience Level</h6>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h6 className="font-sm bold-none">We have a Platform we wish to elevate in terms of UI and UX</h6>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-start">
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 mx-3 border-radius bg-danger text-white"><i class="fa fa-check mr-2 round-bg-white" aria-hidden="true"></i>Payment Unverified</h6>
                                        </div>
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 border-radius bg-sunlight">10k+ Stipend</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 p-3 box-shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="font-sm text-light-grey bold-none">Posted- 21 days ago</h6>
                                            <h5 className="color-blue">FreeLance Redesign Product</h5>
                                        </div>
                                        <div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9SURBVHgB7drtTcMwFIXhAxOwAWaDbkA3ACbAozACGwATICboCO0GDhPQDcCRGlGhRjVw4zr2+0hHUdV/RzeftgQAAAAAAAAAAAAgqzPl4WLuY/ze70O6veN2d3yP2eyyFbSI+Yj5NMg65inmVo1yMUE2Zf5M0PikV2ulacocslJDvKYtc0gzgijUjFeeMpspNIhCzXjlK7O4Qs9l70Yw45R3Oquf0KUaZ13otWAqqPFT3pJT/jKrvoY6wbTQpcCEWrMs9FIwLfRCoFBrlot0p3qEybXQmGSKjyNNm3uhnQpjWWin/F5UsUflfeUMqpyT3YaGlHg1oN8l0k/O1GW+qlBTPXJ4/f7b6GKXFFcq8IZUmn7qUqbzQUjSbwRLuRE5IUnKDc0LyY6VuRaSOR0v1GkG5vLqOexmLl4phW7/+X8xSiq0iv3zJZ3yG1WgpELfBFP9EsrYs2jQTJQ0of019E6Hr6Wd8Gcu5lnf07oWr5sAAAAAAAAAAAAAxnwB9oO/gao8jq0AAAAASUVORK5CYII=" className="mr-4" id="dislike" />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7dlBTttAFAbg/7lNirrKEbwBskyOwA3ColLVRGpuEDhBzQmAE5BKTcSSG+AblGVKu/AR2FBBUvI6YwexICEz9oxj0Ps2ATSe+Mf2eN4MIIQQQgghhMiD4ABvf2oBtZbqLcz+gAQ8T+jPeQxLLvtaJndgDjsN1D8OQMGB+q2xovsbMF8geDiiyXlSRl/r5ArMu72B+ohWn9yygzii6/GRz75MWAfmne6ZOqqPPBhXmNb2KBneuO7LlFVg3u0eq48DFLE4UdRnx7nDPonp12jP5gDjwNmtxydwQj2PNrfwy05U6EPTxkaBufk5BL+7VD+GqKI5t+n3+MqkaWDSSIXtoKphNaKBaVOzwIBxhxtB6HDYN3pE1gbm7S9qIlDhq5tpYOuuZdJw/RWmIMRrwOQocDB3NZr6xeTmln5rJPBz8xivQWB2nmsDLyoTq/nqRtxtuZx40CmqjDE0LSLMAk/f6zl0da+yqpGNm5o0Wvz3ctWf3hFbLQjYlYfN7lDdPl9RFarUpOtR2+YQq9cSTUZ99RGjGhJMb61qYc3+PXxf20+L+M1KQA9qtePCelzJt6alK5MPs5/YTFGRhc25kJdrppUOYupL0y8vV6GwWqF16ZJXQgqH1QovxJcU2klYzc3Og36m67NL1ZtRTWrJWVjNSWDNU2inYTVngR85m5yk69e3uV49L3FeD6eTE6Ji01DCdx9hs6494WYvUntA32ArnRuPI3jiLbDGO72OCnAGvapo5lDtIjja3VjOa2DN7LWltl4I+zT5EcMz72ta6QibzcripQ304ET/2mWETc8HJXr+XPMp7v9GPganVUoNrKU7GWprBEEQl3VVhRBCCCGEEMX9B9RgC9Tp04gRAAAAAElFTkSuQmCC" id="like" />
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3 ">
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Python</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Javascript</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Django</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Html</h6>
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3">
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">$ 3000</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Budget</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">1 Month</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Duration</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">Intermediate</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Experience Level</h6>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h6 className="font-sm bold-none">We have a Platform we wish to elevate in terms of UI and UX</h6>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-start">
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 mx-3 border-radius bg-danger text-white"><i class="fa fa-check mr-2 round-bg-white" aria-hidden="true"></i>Payment Unverified</h6>
                                        </div>
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 border-radius bg-sunlight">10k+ Stipend</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 p-3 box-shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="font-sm text-light-grey bold-none">Posted- 21 days ago</h6>
                                            <h5 className="color-blue">FreeLance Redesign Product</h5>
                                        </div>
                                        <div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9SURBVHgB7drtTcMwFIXhAxOwAWaDbkA3ACbAozACGwATICboCO0GDhPQDcCRGlGhRjVw4zr2+0hHUdV/RzeftgQAAAAAAAAAAAAgqzPl4WLuY/ze70O6veN2d3yP2eyyFbSI+Yj5NMg65inmVo1yMUE2Zf5M0PikV2ulacocslJDvKYtc0gzgijUjFeeMpspNIhCzXjlK7O4Qs9l70Yw45R3Oquf0KUaZ13otWAqqPFT3pJT/jKrvoY6wbTQpcCEWrMs9FIwLfRCoFBrlot0p3qEybXQmGSKjyNNm3uhnQpjWWin/F5UsUflfeUMqpyT3YaGlHg1oN8l0k/O1GW+qlBTPXJ4/f7b6GKXFFcq8IZUmn7qUqbzQUjSbwRLuRE5IUnKDc0LyY6VuRaSOR0v1GkG5vLqOexmLl4phW7/+X8xSiq0iv3zJZ3yG1WgpELfBFP9EsrYs2jQTJQ0of019E6Hr6Wd8Gcu5lnf07oWr5sAAAAAAAAAAAAAxnwB9oO/gao8jq0AAAAASUVORK5CYII=" className="mr-4" id="dislike" />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7dlBTttAFAbg/7lNirrKEbwBskyOwA3ColLVRGpuEDhBzQmAE5BKTcSSG+AblGVKu/AR2FBBUvI6YwexICEz9oxj0Ps2ATSe+Mf2eN4MIIQQQgghhMiD4ABvf2oBtZbqLcz+gAQ8T+jPeQxLLvtaJndgDjsN1D8OQMGB+q2xovsbMF8geDiiyXlSRl/r5ArMu72B+ohWn9yygzii6/GRz75MWAfmne6ZOqqPPBhXmNb2KBneuO7LlFVg3u0eq48DFLE4UdRnx7nDPonp12jP5gDjwNmtxydwQj2PNrfwy05U6EPTxkaBufk5BL+7VD+GqKI5t+n3+MqkaWDSSIXtoKphNaKBaVOzwIBxhxtB6HDYN3pE1gbm7S9qIlDhq5tpYOuuZdJw/RWmIMRrwOQocDB3NZr6xeTmln5rJPBz8xivQWB2nmsDLyoTq/nqRtxtuZx40CmqjDE0LSLMAk/f6zl0da+yqpGNm5o0Wvz3ctWf3hFbLQjYlYfN7lDdPl9RFarUpOtR2+YQq9cSTUZ99RGjGhJMb61qYc3+PXxf20+L+M1KQA9qtePCelzJt6alK5MPs5/YTFGRhc25kJdrppUOYupL0y8vV6GwWqF16ZJXQgqH1QovxJcU2klYzc3Og36m67NL1ZtRTWrJWVjNSWDNU2inYTVngR85m5yk69e3uV49L3FeD6eTE6Ji01DCdx9hs6494WYvUntA32ArnRuPI3jiLbDGO72OCnAGvapo5lDtIjja3VjOa2DN7LWltl4I+zT5EcMz72ta6QibzcripQ304ET/2mWETc8HJXr+XPMp7v9GPganVUoNrKU7GWprBEEQl3VVhRBCCCGEEMX9B9RgC9Tp04gRAAAAAElFTkSuQmCC" id="like" />
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3 ">
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Python</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Javascript</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Django</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Html</h6>
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3">
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">$ 3000</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Budget</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">1 Month</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Duration</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">Intermediate</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Experience Level</h6>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h6 className="font-sm bold-none">We have a Platform we wish to elevate in terms of UI and UX</h6>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-start">
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 mx-3 border-radius bg-danger text-white"><i class="fa fa-check mr-2 round-bg-white" aria-hidden="true"></i>Payment Unverified</h6>
                                        </div>
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 border-radius bg-sunlight">10k+ Stipend</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 p-3 box-shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6 className="font-sm text-light-grey bold-none">Posted- 21 days ago</h6>
                                            <h5 className="color-blue">FreeLance Redesign Product</h5>
                                        </div>
                                        <div>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF9SURBVHgB7drtTcMwFIXhAxOwAWaDbkA3ACbAozACGwATICboCO0GDhPQDcCRGlGhRjVw4zr2+0hHUdV/RzeftgQAAAAAAAAAAAAgqzPl4WLuY/ze70O6veN2d3yP2eyyFbSI+Yj5NMg65inmVo1yMUE2Zf5M0PikV2ulacocslJDvKYtc0gzgijUjFeeMpspNIhCzXjlK7O4Qs9l70Yw45R3Oquf0KUaZ13otWAqqPFT3pJT/jKrvoY6wbTQpcCEWrMs9FIwLfRCoFBrlot0p3qEybXQmGSKjyNNm3uhnQpjWWin/F5UsUflfeUMqpyT3YaGlHg1oN8l0k/O1GW+qlBTPXJ4/f7b6GKXFFcq8IZUmn7qUqbzQUjSbwRLuRE5IUnKDc0LyY6VuRaSOR0v1GkG5vLqOexmLl4phW7/+X8xSiq0iv3zJZ3yG1WgpELfBFP9EsrYs2jQTJQ0of019E6Hr6Wd8Gcu5lnf07oWr5sAAAAAAAAAAAAAxnwB9oO/gao8jq0AAAAASUVORK5CYII=" className="mr-4" id="dislike" />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7dlBTttAFAbg/7lNirrKEbwBskyOwA3ColLVRGpuEDhBzQmAE5BKTcSSG+AblGVKu/AR2FBBUvI6YwexICEz9oxj0Ps2ATSe+Mf2eN4MIIQQQgghhMiD4ABvf2oBtZbqLcz+gAQ8T+jPeQxLLvtaJndgDjsN1D8OQMGB+q2xovsbMF8geDiiyXlSRl/r5ArMu72B+ohWn9yygzii6/GRz75MWAfmne6ZOqqPPBhXmNb2KBneuO7LlFVg3u0eq48DFLE4UdRnx7nDPonp12jP5gDjwNmtxydwQj2PNrfwy05U6EPTxkaBufk5BL+7VD+GqKI5t+n3+MqkaWDSSIXtoKphNaKBaVOzwIBxhxtB6HDYN3pE1gbm7S9qIlDhq5tpYOuuZdJw/RWmIMRrwOQocDB3NZr6xeTmln5rJPBz8xivQWB2nmsDLyoTq/nqRtxtuZx40CmqjDE0LSLMAk/f6zl0da+yqpGNm5o0Wvz3ctWf3hFbLQjYlYfN7lDdPl9RFarUpOtR2+YQq9cSTUZ99RGjGhJMb61qYc3+PXxf20+L+M1KQA9qtePCelzJt6alK5MPs5/YTFGRhc25kJdrppUOYupL0y8vV6GwWqF16ZJXQgqH1QovxJcU2klYzc3Og36m67NL1ZtRTWrJWVjNSWDNU2inYTVngR85m5yk69e3uV49L3FeD6eTE6Ji01DCdx9hs6494WYvUntA32ArnRuPI3jiLbDGO72OCnAGvapo5lDtIjja3VjOa2DN7LWltl4I+zT5EcMz72ta6QibzcripQ304ET/2mWETc8HJXr+XPMp7v9GPganVUoNrKU7GWprBEEQl3VVhRBCCCGEEMX9B9RgC9Tp04gRAAAAAElFTkSuQmCC" id="like" />
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3 ">
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Python</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Javascript</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Django</h6>
                                        </div>
                                        <div className="col-md-3">
                                            <h6 className="font-sm bold-none py-1 px-2 border-radius bg-light-blue">Html</h6>
                                        </div>
                                    </div>
                                    <div className="row text-center mt-3">
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">$ 3000</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Budget</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">1 Month</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Duration</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="font-sm font-weight-bold">Intermediate</h6>
                                            <h6 className="font-sm text-light-grey bold-none">Experience Level</h6>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h6 className="font-sm bold-none">We have a Platform we wish to elevate in terms of UI and UX</h6>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-start">
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 mx-3 border-radius bg-danger text-white"><i class="fa fa-check mr-2 round-bg-white" aria-hidden="true"></i>Payment Unverified</h6>
                                        </div>
                                        <div>
                                            <h6 className="font-sm bold-none py-1 px-3 border-radius bg-sunlight">10k+ Stipend</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-4 ">
                                    <nav aria-label="Page navigation example ">
                                        <ul class="pagination text-center d-flex justify-content-center">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </section>

            // <section className="PopularJobs">
            //     <div className="container">

            //         {/* <section className="d-flex justify-content-end">
            //             <button class="btn button-color btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Find Job By Filter</button>
            //             <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            //                 <div class="offcanvas-header">
            //                     <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Select Filter</h5>
            //                     <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            //                 </div>
            //                 <div class="offcanvas-body">
            //                     <h6>Work From Home</h6>
            //                 </div>
            //             </div>
            //         </section> */}

            //         <div className="row d-felx justify-content-center">
            //             <div className="col-lg-7 my-3">
            //                 <div className="p-3 card-border ">
            //                     <div className="row">
            //                         <div className="col-lg-9">
            //                             <h5>Angular Developer</h5>
            //                             <div className="d-flex">
            //                                 <p>Virtusa Consulting Services Pvt Ltd - 3.6</p>
            //                                 <span className="start-icon mx-2"><i class="fa fa-star" aria-hidden="true"></i>
            //                                 </span>
            //                                 <a href="">(250 Review)</a>
            //                             </div>
            //                         </div>
            //                         <div className="col-lg-3">
            //                             <img src={cardimg1} alt="..." />
            //                         </div>
            //                     </div>

            //                     <div className="row mt-1">
            //                         <div className="col-md-3">
            //                             <b >$3000</b>
            //                             <p className="text-muted">budget</p>
            //                         </div>
            //                         <div className="col-md-3">
            //                             <b>1 month</b>
            //                             <p className="text-muted">Duration</p>
            //                         </div>
            //                         <div className="col-md-3">
            //                             <b>Intermediate</b>
            //                             <p className="text-muted">Experience level</p>
            //                         </div>

            //                         <div className="row ml-1 my-2 d-flex justify-content-start">
            //                             <div className="col-md-2 card-items1">
            //                                 <h6 >Photoshop</h6>
            //                             </div>
            //                             <div className="col-md-2  card-items1">
            //                                 <h6 >illustrator</h6>
            //                             </div>
            //                             <div className="col-md-2 card-items1">
            //                                 <h6 className="text">JavaScript</h6>
            //                             </div>
            //                             <div className="col-md-2  card-items1">
            //                                 <h6 >InDesign</h6>
            //                             </div>
            //                         </div>
            //                         <p>We have platform we wish to elevate in terms of UI and UX. Interested Candidates to Apply / share profiles to aashutosh.patel@kotak.com. </p>
            //                     </div>
            //                     <div className="row d-flex justify-content-start">
            //                         <div className="col-lg-5 ">
            //                             <div className="d-flex Payment-Unverified1">
            //                                 <i class="fa fa-check mx-2" aria-hidden="true"></i>
            //                                 <h6 >Payment Unverified</h6>
            //                             </div>
            //                         </div>
            //                         <div className="col-lg-3">
            //                             <div className="spend">
            //                                 <h6>10k+ Spend</h6>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>
        );
    }
}
export default PopularJobs;