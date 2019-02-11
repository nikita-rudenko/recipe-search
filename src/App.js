import React, { Component } from 'react';
import './App.css';
import { recipes } from './data/tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	state = {
		recipes: recipes,
		details_id: 35122,
		url: `https://www.food2fork.com/api/search?key=${
			process.env.REACT_APP_FOOD2FORK_API
		}`,
		base_url: `https://www.food2fork.com/api/search?key=${
			process.env.REACT_APP_FOOD2FORK_API
		}`,
		pageIndex: 1,
		search: '',
		query: '&q=',
		isLoading: false
	};

	async getRecipes() {
		this.setState({
			isLoading: true
		});
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();
			console.log(jsonData);

			this.setState({
				recipes: jsonData.recipes,
				isLoading: false
			});
		} catch (error) {
			console.log(error);
		}
	}

	componentDidMount() {
		this.getRecipes();
	}

	displayPage = index => {
		switch (index) {
			default:
			case 1:
				return (
					<RecipeList
						recipes={this.state.recipes}
						handleDetails={this.handleDetails}
						value={this.state.search}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
						isLoading={this.state.isLoading}
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

	handleChange = e => {
		this.setState(
			{
				search: e.target.value
			},
			() => {
				console.log(this.state.search);
			}
		);
	};

	handleSubmit = e => {
		e.preventDefault();
		const { base_url, query, search } = this.state;

		this.setState(
			() => {
				return {
					url: `${base_url}${query}${search}`,
					search: ''
				};
			},
			() => this.getRecipes()
		);
	};

	render() {
		return <>{this.displayPage(this.state.pageIndex)}</>;
	}
}

export default App;
