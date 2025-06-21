import CabinTable from "../features/cabins/CabinTable";

import ShowModalCabin from "../features/cabins/ShowModalCabin";
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
      <Row>
        <ShowModalCabin />
      </Row>
    </>
  );
}

export default Cabins;
