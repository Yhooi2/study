import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useCabinOperations from "./hooks/useCabinOperations";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import styled from "styled-components";

export const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

export const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

export const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

export const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;

  const { isCopying, isDeleting, copyCabin, deleteCabin } =
    useCabinOperations();

  const isLoading = isCopying || isDeleting;

  return (
    <>
      <Img src={image}></Img>
      <Cabin> {name}</Cabin>
      <div> Fits up to {maxCapacity}</div>
      <Price> {formatCurrency(regularPrice)}</Price>
      <Discount>
        {discount ? formatCurrency(discount) : <span>&mdash;</span>}
      </Discount>
      <Modal>
        <Menus.Menu>
          <Menus.Tuggle id={id} disabled={isLoading} />
          <Menus.List id={id}>
            <Menus.Item
              icon={<HiSquare2Stack />}
              onClick={() => copyCabin(cabin)}
            >
              Copy
            </Menus.Item>

            <Modal.Open window="create">
              <Menus.Item icon={<HiPencil />}>Edit</Menus.Item>
            </Modal.Open>

            <Modal.Open window="delete">
              <Menus.Item icon={<HiTrash />}>Delete</Menus.Item>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window window="create">
          <CreateCabinForm cabinToEdit={cabin} />
        </Modal.Window>
        <Modal.Window window="delete">
          <ConfirmDelete onConfirm={() => deleteCabin(id)} />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default CabinRow;
