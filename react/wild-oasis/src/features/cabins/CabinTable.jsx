import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import PageNotFound from "../../pages/PageNotFound";
import useCabins from "./hooks/useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

function CabinTable() {
  const { cabins, isLoading, error } = useCabins();
  if (isLoading) return <Spinner />;
  if (error) return <PageNotFound />;
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => (
            <Table.Row key={cabin.id}>
              <CabinRow cabin={cabin} />
            </Table.Row>
          )}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
