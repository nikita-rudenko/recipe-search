import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
import LoadingPage from './LoadingPage';

export default class RecipeList extends Component {
	render() {
		const {
			recipes,
			handleDetails,
			value,
			handleChange,
			handleSubmit,
			isLoading,
			error
		} = this.props;
		// console.log(recipes);
		return (
			<>
				<RecipeSearch
					value={value}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
				<div className="container my-5">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 text-center mb-3">
							<h2 className="font-weight-bold text-uppercase">Best Recipes</h2>
						</div>
					</div>
					{error ? <h3 className="text-danger">{error}</h3> : null}
					{isLoading ? (
						<LoadingPage />
					) : (
						<div className="row">
							{recipes.map(recipe => {
								return (
									<Recipe
										key={recipe.recipe_id}
										recipe={recipe}
										handleDetails={handleDetails}
									/>
								);
							})}
						</div>
					)}
				</div>
			</>
		);
	}
}
