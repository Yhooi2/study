import Filter from "../../ui/Filter";
import SortDropdown from "../../ui/SortDropdown";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "discount", label: "With discount" },
        ]}
      />
      <SortDropdown
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "discount-asc", label: "Sort by discount (low first)" },
          {
            value: "discount-desc",
            label: "Sort by discount (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperation;
