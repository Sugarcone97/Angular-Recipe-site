import { IIngredient } from './ingredient';

export interface IRecipe {
    id: number;
    foodname: string;
    moreinfo: string;
    serving: string;
    foodimg: string;
    ingredients: IIngredient[];
    instructions: string[];
}

