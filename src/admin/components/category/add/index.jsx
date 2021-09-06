import React, { Component } from "react";
import SidebarNav from "../../sidebar";

class AddCategories extends Component {

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
									<h3 className="page-title">Add Category</h3>
								</div>
							</div>
						</div>
						
						
						<div className="card">
							<div className="card-body">
							
							
								<form action="/admin/category">
									<div className="form-group">
										<label>Category Name</label>
										<input className="form-control" type="text" />
									</div>
									<div className="form-group">
										<label>Category Image</label>
										<input className="form-control" type="file" />
									</div>
									<div className="mt-4">
										<button className="btn btn-primary" type="submit">Add Category</button>
										<a href="categories.html" className="btn btn-link">Cancel</a>
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

export default AddCategories;
