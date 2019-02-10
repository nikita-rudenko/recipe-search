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
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 my-3">
							<button
								type="button"
								className="btn btn-warning mb-5"
								onClick={() => handleIndex(1)}>
								Back to Recipe List
							</button>
							<img className="d-block w-100" src={image_url} alt="Dish." />
						</div>
						<div className="col-10 mx-auto col-md-6 my-3">
							<h3>{title}</h3>
							<h6 className="font-italic">
								Provided by{' '}
								<a
									href={publisher_url}
									target="_blank"
									rel="noopener noreferrer">
									{publisher}
								</a>
							</h6>

							<a
								className="btn btn-primary"
								href={source_url}
								target="_blank"
								rel="noopener noreferrer">
								Source
							</a>

							<h3>Ingredients:</h3>
							<ul className="list-group mt-4">
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
			</>
		);
	}
}
