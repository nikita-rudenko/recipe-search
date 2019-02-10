import React, { Component } from 'react';

export default class RecipeSearch extends Component {
	render() {
		return (
			<>
				<div className="header_wrapper">
					<div className="container-fluid header pb-5">
						<div className="row">
							<div className="col-10 mx-auto col-md-8 mt-5 text-center">
								<h1 className="text-white">
									Find fantastic recipes on{' '}
									<strong className="brand">
										Food
										<span className="text-white">2</span>
										Fork
									</strong>
								</h1>
								<form className="col-12 col-md-8 mx-auto mt-3">
									<div className="input-group">
										<input
											className="form-control"
											type="text"
											name="search"
											placeholder="Search by ingredients or name..."
										/>
										<div className="input-group-append">
											<button className="input-group-text">
												<i className="fas fa-search" />
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
