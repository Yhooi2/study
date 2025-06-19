import { useState } from "react";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { TableRow, Discount, Price, Cabin, Img } from "./styles";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useCabinOperations from "./hooks/useCabinOperations";

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;

  const { isCopying, isDeleting, copyCabin, deleteCabin } =
    useCabinOperations();

  return (
    <>
      <TableRow>
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
          <button onClick={() => setShowForm((v) => !v)}>
            <HiPencil />
          </button>
          <button disabled={isDeleting} onClick={() => deleteCabin(id)}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
