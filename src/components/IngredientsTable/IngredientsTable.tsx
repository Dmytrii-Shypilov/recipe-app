import { Ingredient } from "@/types";

const IngredientsTable: React.FC<{ingredients: Ingredient[]}> = ({ingredients}) => {
  return (
    <>
      <h2>Ingredients</h2>
      <table className="w-full text-left border border-black-300 shadow-sm mb-[20px]">
        <tbody>
          {ingredients.map((el) => (
            <tr key={el.id} className="border-t border-black-200">
              <td className="p-3 text-gray-700">{el.original}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IngredientsTable
