import RecipeCard from "./RecipeCard";

import { Recipe } from "@/types";

const RecepiesList: React.FC<{recepies: Recipe[]}> = ({recepies})=> {
    return  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recepies.map((rec) => {
          return (
            <li className="card" key={rec.id}>
              <RecipeCard recipe={rec} />
            </li>
          );
        })}
      </ul>
}

export default RecepiesList