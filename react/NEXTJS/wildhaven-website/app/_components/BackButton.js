"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ children }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-accent-600 px-6 py-3 text-primary-800 hover:bg-accent-700 transition-colors"
    >
      {children}
    </button>
  );
}
