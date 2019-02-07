import React, { Component } from 'react';
import './App.css';
import recipes from './data/tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
	state = {
		recipes: [],
		url: process.env.REACT_APP_FOOD2FORK_API
	};

	async getRecipes() {
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();

			this.setState({
				recipes: jsonData.recipes
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<>
				<RecipeList />
				<RecipeDetails />
			</>
		);
	}
}

export default App;
