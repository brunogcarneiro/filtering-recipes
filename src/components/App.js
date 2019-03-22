import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.allRecipes = recipes.results

    this.state = {
      searchString: '',
      filteredRecipes: this.allRecipes
    };

    this.onSearchChange = this.onSearchChange.bind(this)
    this.filterRecipes = this.filterRecipes.bind(this)
  }

  onSearchChange(e) {
    const newSearchString = e.target.value
    this.setState({
      searchString: newSearchString, 
      filteredRecipes: this.filterRecipes(newSearchString)
    })
  }

  filterRecipes(searchString){
    return this.allRecipes.filter(
      recipe => {
        const escapedSearchString = escapeRegExp(searchString)
        const regExp = RegExp(escapedSearchString,'i');
        return  regExp.test(recipe.title) || regExp.test(recipe.ingredients)

        function escapeRegExp(text) {
          return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }
      }
    )
  }

  render() { 
    return (
      <div className="App">
        <Navbar searchString={this.state.searchString} onChange={this.onSearchChange}/>
        <div className="container mt-10">
          <div className="row">
          {
            this.state.filteredRecipes.map( 
              (item, id) => <RecipeItem key={id} item={item} searchString={this.state.searchString} /> 
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
