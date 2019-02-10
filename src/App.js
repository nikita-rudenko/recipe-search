import React, { Component } from 'react';
import './App.css';
import { recipes } from './data/tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
	state = {
		recipes: recipes,
		details_id: 35382,
		url: `https://www.food2fork.com/api/search?key=${
			process.env.REACT_APP_FOOD2FORK_API
		}`,
		pageIndex: 0
	};

	// async getRecipes() {
	// 	try {
	// 		const data = await fetch(this.state.url);
	// 		const jsonData = await data.json();

	// 		this.setState({
	// 			recipes: jsonData.recipes
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// componentDidMount() {
	// 	this.getRecipes();
	// }

	displayPage = index => {
		switch (index) {
			default:
			case 1:
				return (
					<RecipeList
						recipes={this.state.recipes}
						handleDetails={this.handleDetails}
					/>
				);
			case 0:
				return (
					<RecipeDetails
						id={this.state.details_id}
						handleIndex={this.handleIndex}
					/>
				);
		}
	};

	handleIndex = index => {
		this.setState({
			pageIndex: index
		});
	};

	handleDetails = (index, id) => {
		this.setState({
			pageIndex: index,
			details_id: id
		});
	};

	render() {
		return <>{this.displayPage(this.state.pageIndex)}</>;
	}
}

export default App;
