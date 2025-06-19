import Image from "next/image";
import Link from "next/link";

import { Recipe } from "@/types";

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const { title, image, id } = recipe;
  
  return (
    <Link  href={`/recepies/${id}`} id={String(id)}>
      <h2>{title}</h2>
      <Image width={312} height={231} alt={title} src={image} priority={true} />
    </Link>
  );
};

export default RecipeCard;
