import { useState } from "react";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function CreateCabin() {
  const [openModal, setOpenModal] = useState(false);
  const onToggleModal = () => setOpenModal((show) => !show);

  return (
    <>
      <Row>
        <Button onClick={onToggleModal}>Add new cabin</Button>
      </Row>
      <Row>
        {openModal && (
          <Modal onClick={onToggleModal}>
            <CreateCabinForm onCloseModal={onToggleModal} />
          </Modal>
        )}
      </Row>
    </>
  );
}

export default CreateCabin;
