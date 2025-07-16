import FilterButton from "./FilterButton";

function CabinFilter() {
  return (
    <div className="flex justify-end gap-2">
      <FilterButton>All</FilterButton>
      <FilterButton>Available</FilterButton>
      <FilterButton>Unavailable</FilterButton>
    </div>
  );
}

export default CabinFilter;
