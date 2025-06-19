import { Table, TableHeader } from "./styles";
import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import PageNotFound from "../../pages/PageNotFound";
import useCabins from "./hooks/useCabins";

function CabinTable() {
  const { cabins, isLoading, error } = useCabins();
  if (isLoading) return <Spinner />;
  if (error) return <PageNotFound />;
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
