import React, { Component } from "react";
import SidebarNav from "../../sidebar";


import category1 from "../../../assets/images/category/category-01.jpg";
class EditCategories extends Component {

  render() {
     
  return (
      <>
      <SidebarNav />
       <div class="page-wrapper">
			<div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
					
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Edit Category</h3>
								</div>
							</div>
						</div>
				
						
						<div class="card">
							<div class="card-body">
							
							
								<form action="categories.html">
									<div class="form-group">
										<label>Category Name</label>
										<input class="form-control" type="text" value="Automobile" />
									</div>
									<div class="form-group">
										<label>Category Image</label>
										<input class="form-control" type="file" />
									</div>
									<div class="form-group">
										<div class="avatar">
											<img class="avatar-img rounded" alt="" src={category1} />
										</div>
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Save Changes</button>
										<a href="categories.html" class="btn btn-link">Cancel</a>
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

export default EditCategories;
