import { getRecipeInfo } from "@/api";

import Image from "next/image";
import IngredientsTable from "@/components/IngredientsTable";

type RecipePageProps = {
  params: {
    id: string;
  };
};

export const revalidate = 60;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
  }
}

const RecipePage = async ({ params }: RecipePageProps) => {
  const { id } = await params;

  const {
    instructions,
    title,
    image,
    healthScore,
    glutenFree,
    dairyFree,
    extendedIngredients,
    readyInMinutes,
  } = await getRecipeInfo(id);

  return (
    <main className="p-[20px]">
      <div className="flex-col items-center max-w-[600px] mx-auto">
        <h1>{title}</h1>
        <div className="flex justify-around mb-[15px]">
          <div className="mr-[20px] ">
            <Image
              width={312}
              height={231}
              alt={title}
              src={image}
              priority={true}
            />
          </div>

          <div className="flex flex-col border-gray-1">
            <span>{glutenFree ? "Gluten Free" : "Contains Gluten"}</span>
            <span>{dairyFree ? "Dairy Free" : "Contains Dairy"}</span>
            <span>{`Health Score: ${healthScore}`}</span>
            <span>{`Takes ${readyInMinutes} mins to cook`}</span>
          </div>
        </div>

        <div>
          <IngredientsTable ingredients={extendedIngredients} />
          <h2>Instructions</h2>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: instructions }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default RecipePage;
