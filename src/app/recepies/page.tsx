import { QueryParams } from "@/types";
import { getRecipes } from "@/api";
import RecepiesList from "@/components/RecepiesList";

export const revalidate = 60;

const RecepiesPage: React.FC<{ searchParams: QueryParams }> = async ({
  searchParams,
}) => {
  const params = await searchParams;

  const recepies = await getRecipes(params);

  if (!recepies.length) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <p className="message">No Items were found</p>
      </div>
    );
  }

  return (
    <main className="flex-col items-center justify-center p-[20px]">
      <h1>Enjoy Our Best Recepies</h1>
      <RecepiesList recepies={recepies} />
    </main>
  );
};

export default RecepiesPage;
