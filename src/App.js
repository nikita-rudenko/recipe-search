import React, { Component } from 'react';
import './App.css';
import recipes from './data/tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
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
