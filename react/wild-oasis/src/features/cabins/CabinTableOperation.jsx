import Filter from "../../ui/Filter";
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
    </TableOperations>
  );
}

export default CabinTableOperation;
