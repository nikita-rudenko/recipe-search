import React, { Component } from 'react';
import './App.css';
import { recipes } from './data/tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
	state = {
		recipes: recipes
		// url: process.env.REACT_APP_FOOD2FORK_API
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

	render() {
		// console.log(this.state.recipes);
		return (
			<>
				<RecipeList recipes={this.state.recipes} />
				<RecipeDetails />
			</>
		);
	}
}

export default App;
