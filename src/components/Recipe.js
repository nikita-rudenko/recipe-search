import React, { Component } from 'react';

export default class Recipe extends Component {
	render() {
		const {
			image_url,
			title,
			source_url,
			publisher,
			recipe_id,
			social_rank
		} = this.props.recipe;

		const { handleDetails } = this.props;

		return (
			<>
				<div className="col-10 mx-auto col-md-6 col-lg-4 my-3 card-deck d-flex align-items-stretch">
					<div className="card mx-0">
						<img src={image_url} className="card-img-top" alt="Recipe." />
						<div className="card-body text-capitalize">
							<h5>{title}</h5>
							<h6 className="text-muted">{publisher}</h6>
						</div>
						<div className="card-footer">
							<button
								className="btn btn-info"
								type="button"
								name="details"
								onClick={() => handleDetails(0, recipe_id)}>
								Details
							</button>
							<a
								href={source_url}
								className="btn btn-secondary ml-xs-0 ml-2"
								target="_blank"
								rel="noopener noreferrer">
								Source
							</a>
							<div
								className="btn float-right rounded bg-warning"
								title="Social Rank">
								{social_rank}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
