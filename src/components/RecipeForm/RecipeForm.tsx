"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { CUISINES } from "@/constants";
import { FormData } from "@/types";

const RecipeForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    dish: "",
    cuisine: "",
    time: 0,
  });
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { dish, cuisine, time } = formData;

  const router = useRouter();

  const onFormInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    if (dish) urlParams.append("query", dish.trim());
    if (cuisine) urlParams.append("cuisine", cuisine);
    if (time) urlParams.append("maxReadyTime", String(time));
    setIsFetching(true);
    router.push(`/recepies?${urlParams.toString()}`);
  };

  const isButtonDisabled = dish || cuisine || Number(time) ? false : true;

  return (
    <form
      onSubmit={onFormSubmit}
      className="h-[350px] p-6 max-w-md mx-auto flex flex-col gap-4 bg-[#fff] rounded-lg"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="dish" className="text-sm font-medium text-gray-700">
          Dish Name
        </label>
        <input
          placeholder="e.g. pasta"
          onChange={onFormInputChange}
          id="dish"
          value={dish}
          type="text"
          name="dish"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cuisine" className="text-sm font-medium text-gray-700">
          Cuisine
        </label>
        <select
          value={cuisine}
          onChange={onFormInputChange}
          name="cuisine"
          id="cuisine"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option key="placeholder" value="" hidden>
            -- Select a cuisine --
          </option>
          {CUISINES.map((cuisEl) => (
            <option key={cuisEl} value={cuisEl}>
              {cuisEl}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="time" className="text-sm font-medium text-gray-700">
          Preparation Time (minutes)
        </label>
        <input
          value={time}
          onChange={onFormInputChange}
          id="time"
          type="number"
          name="time"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <button
        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isButtonDisabled}
      >
        {isFetching ? "Sending..." : "Next"}
      </button>
    </form>
  );
};

export default RecipeForm;
