import CabinTable from "../features/cabins/CabinTable";
import CreateCabin from "../features/cabins/CreateCabin";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

//import { getCabins } from "../services/apiCabins";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter/sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <CreateCabin />
    </>
  );
}

export default Cabins;
