import RecipeForm from "../components/RecipeForm";
export default function Home() {
  return (
    
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1>Welcome to the Recepies App</h1>
        <p className="mb-[20px]">Feel free to explore our dishes!</p>
       <RecipeForm/>
      </main>
     
  );
}
