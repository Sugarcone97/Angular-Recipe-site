import { Recipe } from './../classes/recipe';
import { IIngredient } from '../interfaces/ingredient';
import { Injectable } from '@angular/core';
import * as RecipeData from '../../data.json';
import * as _ from '../../../node_modules/lodash';

@Injectable()
export class RecipeService {
  private recipies: Recipe[] = [];

  constructor() { 
    (<any>RecipeData).recipies.forEach( recipe => {
      this.recipies.push( new Recipe(recipe));
    });
  }

  public getRecipes(): Recipe[]{
    return this.recipies;
  }

  public getRecipeById(id: number): Recipe{
    return _.find(this.recipies, (recipe) => recipe.id === id);
  }

  public createRecipe(
    foodname: string,
    moreinfo: string,
    serving: string,
    foodimg: string, 
    ingredients: IIngredient[],
    instructions: string[]
    ){
      const newRecipeData = {
        id: this.getNextId(),
        foodname,
        moreinfo,
        serving,
        foodimg,
        ingredients: [...ingredients],
        instructions: [...instructions]
      }

      const newRecipe = new Recipe(newRecipeData);

      this.recipies.push(newRecipe);
      return newRecipe;
    }

    public updateRecipe(recipe: Recipe): Recipe {
      const recipeIndex = _.findIndex(this.recipies, (r) => r.id === recipe.id);
      this.recipies[recipeIndex] = recipe;
      return recipe;
    }

    public deleteRecipe(id: number): void {
      let recipeIndex = _.findIndex(this.recipies, (r) => r.id === id);

      if(recipeIndex !== -1){
        this.recipies.splice(recipeIndex, 1);
      }
    }

    private getNextId(): number {
      const max = _.maxBy(this.recipies, (recipe) => recipe.id);
      return max.id + 1;
    }
}
