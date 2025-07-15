"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-lg">
      <h1 className="text-4xl font-semibold">Something went wrong </h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-accent-600 px-6 py-3 text-primary-800"
      >
        Try again
      </button>
    </div>
  );
}
