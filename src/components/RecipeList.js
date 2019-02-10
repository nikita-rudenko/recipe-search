import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
	render() {
		const { recipes, handleDetails } = this.props;
		// console.log(recipes);
		return (
			<>
				<RecipeSearch />
				<div className="container my-5">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 text-center mb-3">
							<h1>Top Recipes</h1>
						</div>
					</div>
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
				</div>
			</>
		);
	}
}
