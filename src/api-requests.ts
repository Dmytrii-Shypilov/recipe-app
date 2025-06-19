import axios from "axios";

import { Recipe, QueryParams, RecipeInfo } from "./types";
import { BASE_URL } from "./constants";
import { AxiosError } from "axios";

const API_KEY = process.env.API_KEY

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getRecipes({
  query,
  cuisine,
  time,
}: QueryParams): Promise<Recipe[]> {
  const params = {
    ...(query && { query }),
    ...(cuisine && { cuisine }),
    ...(time && { time }),
    apiKey: API_KEY || "",
  };

  try {
    const res = await api.get("/recipes/complexSearch", { params });
    return res.data.results || [];
  } catch (error) {
     const axiosError = error as AxiosError;
    console.error("Axios error:", axiosError.message);
    throw new Error("Failed to fetch recipes");
  }
}

export async function getRecipeInfo(id: string): Promise<RecipeInfo> {
  const params = { apiKey: API_KEY || "" };
  try {
    const res = await api.get(`/recipes/${id}/information`, { params });
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Axios error:", axiosError.message);
    throw new Error("Unable to get your recipe");
  }
}
