import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
//import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [formShow, setFormShow] = useState(false);
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
        <Button onClick={() => setFormShow((show) => !show)}>
          Add new cabin
        </Button>
      </Row>
      <Row>{formShow && <CreateCabinForm />}</Row>
    </>
  );
}

export default Cabins;
