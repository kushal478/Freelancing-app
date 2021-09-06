import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/images/logo-icon.png"


import ReactDOM from "react-dom";

class SidebarNav extends Component {
    constructor(props){
      super(props);
      this.state={
        show: null
      }
    }

  handleShow(id){
    this.setState({
        show: id
    })
  }

onhandleCloseMenu = (e) => {
  let allElements = Array.from(document.querySelectorAll('.main-wrapper.slide-nav'))
  for (let element of allElements) {
    element.classList.remove('slide-nav')
  }
  let allElements1 = Array.from(document.querySelectorAll('.sidebar-overlay.opened'))
  for (let element of allElements1) {
    element.classList.remove('opened')
  }
  };

  
  render() {
   
   const {  location } = this.props
   let pathname = location.pathname

   return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-logo">
        <a><img src={logo} class="img-fluid"></img></a>
      </div>
      <div className="primary-nav">
        <nav role="navigation" className="menu">
       
            <div className="overflow-container">
            <ul className="menu-dropdown">
              
              <li className={`${'/admin' === pathname ? 'active' : '' }`}>
                <Link to="/admin" exact="true"><i className="fe fe-home"></i><span>Dashboard</span></Link>
              </li>
              <li className={`${'/admin/category' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                <Link to="/admin/category" exact="true"><i className="fas fa-columns" ></i><span>Categories</span></Link>
              </li>
              <li className={`${'/admin/sub-categories' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                 <Link to="/admin/sub-categories" exact="true"><i className="fab fa-buffer"></i><span>Sub Categories</span></Link>
              </li>
              <li className={`${'/admin/services' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              
                <Link to="/admin/services" exact="true"> <i className="fas fa-bullhorn"></i><span>Services</span></Link>
              </li>
              <li className={`${'/admin/booking-list' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              
                {/* <Link to="/admin/booking-list" exact="true"><i className="far fa-calendar-check"></i><span>Booking List</span></Link> */}
              </li>
              <li className={`${'/admin/payment' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
              
                <Link to="/admin/payment" exact="true"><i className="fas fa-hashtag"></i><span>Payments</span></Link>
              </li>
              {/* <li className={`${'/admin/rating-type' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                <Link to="/admin/rating-type" exact="true"><i className="fas fa-star-half-alt"></i><span>Rating Type</span></Link>
              </li> */}
              <li className={`${'/admin/rating' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                <Link to="/admin/rating" exact="true"> <i className="fas fa-star"></i><span>Ratings</span></Link>
              </li>
              <li className={`${'/admin/subscriptions' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                <Link to="/admin/subscriptions" exact="true"> <i className="far fa-calendar-alt"></i><span>Subscriptions</span></Link>
              </li>
              <li className={`${'/admin/wallet' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                <Link to="#" exact="true"> <i className="fas fa-wallet"></i><span>Wallet</span></Link>
              </li>
              <li className={`${'/admin/service-provider' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                <Link to="/admin/service-provider" exact="true"> <i className="fas fa-user-tie"></i><span>Service provider</span></Link>
              </li>
              <li className={`${'/admin/user' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                <Link to="/admin/user" exact="true"> <i className="fas fa-user"></i><span>User</span></Link>
              </li>
              <li className={`${'/admin/settings' === pathname ? 'active' : '' }`} onClick={(e) => this.onhandleCloseMenu(e)}>
                <Link to="/admin/settings" exact="true"> <i className="fas fa-cog"></i><span>Settings</span></Link>
              </li>
            </ul>
            </div>
        
        </nav>
      </div>
    </div>
  );
}
}

export default withRouter(SidebarNav);
