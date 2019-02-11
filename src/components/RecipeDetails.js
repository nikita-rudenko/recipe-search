import React, { Component } from 'react';
import { recipe } from '../data/tempDetails';

export default class RecipeDetails extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		recipe: recipe,
	// 		url: `https://www.food2fork.com/api/get?key=${
	// 			process.env.REACT_APP_FOOD2FORK_API
	// 		}&rId=${this.props.id}`
	// 	};
	// }

	// async componentDidMount() {
	// 	try {
	// 		const data = await fetch(this.state.url);
	// 		const jsonData = await data.json();
	// 		console.log(jsonData);

	// 		this.setState({
	// 			recipe: jsonData.recipe
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	state = {
		recipe: recipe,
		isLoading: true
	};

	componentDidMount() {
		setTimeout(() => {
			console.log('I have timeouted');

			this.setState({
				isLoading: false
			});
		}, 2000);
	}

	// async componentDidMount() {
	// 	const id = this.props.id;
	// 	const url = `https://www.food2fork.com/api/get?key=${
	// 		process.env.REACT_APP_FOOD2FORK_API
	// 	}&rId=${id}`;
	// 	try {
	// 		const data = await fetch(url);
	// 		const jsonData = await data.json();
	// 		console.log(jsonData);

	// 		this.setState({
	// 			recipe: jsonData.recipe,
	// 			isLoading: false
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	render() {
		const {
			image_url,
			publisher,
			publisher_url,
			source_url,
			title,
			ingredients
		} = this.state.recipe;

		const { handleIndex } = this.props;

		return (
			<>
				{this.state.isLoading ? (
					<div>
						<h1>I'm Loading</h1>
					</div>
				) : (
					<div className="container">
						<div className="row pt-5">
							<div className="col-10 mx-auto col-md-6 my-3">
								<button
									type="button"
									className="btn btn-warning mb-5"
									onClick={() => handleIndex(1)}>
									Back to Recipe List
								</button>
								<img
									className="rounded d-block w-100"
									src={image_url}
									alt="Dish."
								/>
							</div>
							<div className="col-10 mx-auto col-md-6 my-3">
								<h2>{title}</h2>
								<h6 className="font-italic text-muted">
									Provided by{' '}
									<a
										href={publisher_url}
										target="_blank"
										rel="noopener noreferrer">
										{publisher}
									</a>
								</h6>

								<a
									className="btn btn-primary mt-3"
									href={source_url}
									target="_blank"
									rel="noopener noreferrer">
									Source
								</a>

								<h4 className="mt-5">Ingredients:</h4>
								<ul className="list-group mt-3">
									{ingredients.map((ingredient, index) => {
										return (
											<li className="list-group-item" key={index}>
												{ingredient}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				)}
			</>
		);
	}
}
