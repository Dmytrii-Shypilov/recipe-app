export type FormData = {
  cuisine: string;
  dish: string;
  time: number;
};

export type Recipe = {
  id: number;
  image: string;
  title: string;
};

export type QueryParams = {
  query?: string;
  cuisine?: string;
  time?: string;
};

export type RecipeInfo = {
  id: number;
  title: string;
  image: string;
  summary: string;
  extendedIngredients: Ingredient[];
  readyInMinutes: number;
  glutenFree: boolean;
  dairyFree: boolean;
  healthScore: number
  instructions: string
};

export type Ingredient = {
  id: number;
  name: string;
  amount: number;
  unit: string;
  original?: string;
};
