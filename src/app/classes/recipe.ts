import { IRecipe } from '../interfaces/recipe';
import { IIngredient } from '../interfaces/ingredient';

export class Recipe implements IRecipe{
    id: number;
    foodname: string;
    moreinfo: string;
    serving: string;
    foodimg: string;
    ingredients: IIngredient[];
    instructions: string[];

    constructor({id,
        foodname,
        moreinfo,
        serving,
        foodimg,
        ingredients,
        instructions}){
            this.id = id;
            this.foodname = foodname;
            this.moreinfo = moreinfo;
            this.serving = serving;
            this.foodimg = foodimg;
            this.ingredients = ingredients;
            this.instructions = instructions;
        }
}
