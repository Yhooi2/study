import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

import ShowModalCabin from "../features/cabins/ShowModalCabin";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation />
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
