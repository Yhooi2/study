import BackButton from "../../_components/BackButton";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-lg">
      <h1 className="text-4xl font-semibold">Cabin not found</h1>
      <p>The cabin you are looking for does not exist.</p>
      <BackButton>Back to all cabins</BackButton>
    </div>
  );
}

export default NotFound;
