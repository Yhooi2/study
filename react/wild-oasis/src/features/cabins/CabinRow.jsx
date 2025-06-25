// import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
// import CreateCabinForm from "./CreateCabinForm";
// import useCabinOperations from "./hooks/useCabinOperations";
// import Modal from "../../ui/Modal";
// import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

// const Img = tw.img`
//   block
//   w-[6.5rem]
//   aspect-[3/2]
//   object-cover
//   transform
//   scale-150
//   -translate-x-2
// `;

// export const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;
const Cabin = tw.div`
  text-2xl
  font-semibold
  text-stone-600
  font-heading
`;

// export const Price = styled.div`
//   font-family: "Sono";
//   font-weight: 600;
// `;
const Price = tw.div`
  font-heading
  font-semibold
`;

export const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
// const Discount = tw.div`
//   font-heading
//   font-medium
//   text-stone-700
// `;

function CabinRow({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;

  // const { isCopying, isDeleting, copyCabin, deleteCabin } =
  //   useCabinOperations();

  return (
    <>
      <Img src={image}></Img>
      <Cabin> {name}</Cabin>
      <div> Fits up to {maxCapacity}</div>
      <Price> {formatCurrency(regularPrice)}</Price>
      <Discount>
        {discount ? formatCurrency(discount) : <span>&mdash;</span>}
      </Discount>
      {/* <div>
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
        </Modal> */}
      {/* </div> */}
      <Menus.Menu>
        <Menus.Tuggle id={id} />
        <Menus.List id={id}>
          <Menus.Item>Copy</Menus.Item>
          <Menus.Item>Edit</Menus.Item>
          <Menus.Item>Delete</Menus.Item>
        </Menus.List>
      </Menus.Menu>
    </>
  );
}

export default CabinRow;
