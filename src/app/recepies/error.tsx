"use client";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="p-6 text-center">
      <h2 className=" font-semibold text-red-600">Something went wrong!</h2>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button
        onClick={() => router.back()}
        className="mt-4 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
      >
        Go back
      </button>
    </div>
  );
}
