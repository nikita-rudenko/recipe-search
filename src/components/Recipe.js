import React, { Component } from 'react';

export default class Recipe extends Component {
	render() {
		const {
			image_url,
			title,
			source_url,
			publisher,
			recipe_id
		} = this.props.recipe;

		const { handleDetails } = this.props;

		return (
			<>
				<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
					<div className="card">
						<img src={image_url} className="card-img-top" alt="Recipe." />
						<div className="card-body text-captalize">
							<h5>{title}</h5>
							<h6>By {publisher}</h6>
						</div>
						<div className="card-footer">
							<button
								className="btn btn-info"
								type="button"
								name="details"
								onClick={handleDetails}>
								Details
							</button>
							<a
								href={source_url}
								className="btn btn-secondary ml-2"
								target="_blank"
								rel="noopener noreferrer">
								Source
							</a>
						</div>
					</div>
				</div>
			</>
		);
	}
}
