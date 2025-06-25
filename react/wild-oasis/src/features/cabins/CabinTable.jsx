import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import PageNotFound from "../../pages/PageNotFound";
import useCabins from "./hooks/useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { cabins, isLoading, error } = useCabins();

  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";

  const filteredCabins =
    filterValue === "all"
      ? cabins
      : cabins?.filter((cabin) => {
          if (filterValue === "no-discount") return cabin.discount === 0;
          if (filterValue === "discount") return cabin.discount > 0;
          return true;
        });

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
          data={filteredCabins}
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
