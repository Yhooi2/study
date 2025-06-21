import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
// import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";

function ShowModalCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open window="cabin-create">
          <Button> Add new cabin </Button>
        </Modal.Open>
        <Modal.Window window="cabin-create">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ShowModalCabin;
