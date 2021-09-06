import React, { Component } from "react";
import SidebarNav from "../sidebar";


import category1 from "../../assets/images/sub-category/sub-category-01.jpg";
class EditSubCategories extends Component {

  render() {
     
  return (
      <>
      <SidebarNav />
      <div className="page-wrapper">
			<div className="content container-fluid">
				<div className="row">
					<div className="col-xl-8 offset-xl-2">
					
					
						<div className="page-header">
							<div className="row">
								<div className="col">
									<h3 className="page-title">Edit Sub Category</h3>
								</div>
							</div>
						</div>
					
						
						<div className="card">
							<div className="card-body">
							

								<form action="subcategories.html">
									<div className="form-group">
										<label>Category</label>
										<select className="form-control select">
											<option>Select Category</option>
											<option>Automobile</option>
											<option>Construction</option>
											<option>Interior</option>
											<option>Cleaning</option>
											<option>Electrical</option>
											<option>Carpentry</option>
											<option>Computer</option>
										</select>
									</div>
									<div className="form-group">
										<label>Subcategory Name</label>
										<input className="form-control" type="text" value="Bus Service" />
									</div>
									<div className="form-group">
										<label>Category Image</label>
										<input className="form-control" type="file" />
									</div>
									<div className="form-group">
										<div className="avatar">
											<img className="avatar-img rounded" alt="" src={category1} />
										</div>
									</div>
									<div className="mt-4">
										<button className="btn btn-primary" type="submit">Save Changes</button>
										<a href="subcategories" className="btn btn-link">Cancel</a>
									</div>
								</form>
							
								
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

export default EditSubCategories;
