# Recipe Search

React app which allows user to search for a recipe by name or specific ingredients. Uses powerful API offered by Food2Fork.

## Deployment

Available live on Netlify [here](https://recipes-search.netlify.com/)

## To run locally

1. Clone `git clone https://github.com/nick-rudenko/recipe-search.git`
2. Install dependencies `npm install`
3. Go to [Food2Fork](https://www.food2fork.com), sign up and get your Recipe API key
4. Create .env file in the root folder and note down your API key. For example, `REACT_APP_FOOD2FORK_API=YOUR_API_KEY` (Note: REACT_APP at the start is required)
5. Run in development mode `npm start`
6. Visit `localhost:3000`

## Dependencies

- bootstrap
- react
- react-dom
- react-router-dom
- react-scripts
- fortawesome
