import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { Discount, Price, Cabin, Img } from "./styles";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useCabinOperations from "./hooks/useCabinOperations";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function CabinRow({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;

  const { isCopying, isDeleting, copyCabin, deleteCabin } =
    useCabinOperations();

  return (
    <>
      <Img src={image}></Img>
      <Cabin> {name}</Cabin>
      <div> Fits up to {maxCapacity}</div>
      <Price> {formatCurrency(regularPrice)}</Price>
      <Discount>
        {discount ? formatCurrency(discount) : <span>&mdash;</span>}
      </Discount>
      <div>
        <button disabled={isCopying} onClick={() => copyCabin(cabin)}>
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open window="create">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window window="create">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
          <Modal.Open window="delete">
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window window="delete">
            <ConfirmDelete
              disabled={isDeleting}
              onConfirm={() => deleteCabin(id)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

export default CabinRow;
