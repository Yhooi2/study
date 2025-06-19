import { TableRow, Discount, Price, Cabin, Img } from "./styles";

import toast from "react-hot-toast";
import { useState } from "react";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useCabinMutation from "./hooks/useCabinMutation";
import { copyCabin, deleteCabin } from "../../services/apiCabins";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;

  const { isPending: isCopying, mutate: mutateCopy } =
    useCabinMutation(copyCabin);

  const { isPending: isDeleting, mutate: mutateDelete } =
    useCabinMutation(deleteCabin);

  const handleCopy = () =>
    mutateCopy(cabin, {
      onSuccess: () => toast.success("Succesfully copyted!"),
    });

  const handleDelete = () =>
    mutateDelete(id, {
      onSuccess: () => toast.success("Succesfully deleted!"),
    });

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
          <button onClick={handleCopy}>
            <HiSquare2Stack />
          </button>
          <button disabled={isCopying} onClick={() => setShowForm((v) => !v)}>
            <HiPencil />
          </button>
          <button disabled={isDeleting} onClick={handleDelete}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
