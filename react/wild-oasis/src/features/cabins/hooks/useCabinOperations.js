import useCabinMutation from "./useCabinMutation";

import {
  createCabin,
  copyCabin,
  editCabin,
  deleteCabin,
} from "./../api/apiCabins";
import toast from "react-hot-toast";

function useCabinOperations() {
  const { isPending: isCreating, mutate: mutateCreate } =
    useCabinMutation(createCabin);
  const { isPending: isUpdating, mutate: mutateEdit } =
    useCabinMutation(editCabin);
  const { isPending: isDeleting, mutate: mutateDelete } =
    useCabinMutation(deleteCabin);
  const { isPending: isCopying, mutate: mutateCopy } =
    useCabinMutation(copyCabin);

  const copyCabinHandler = (cabin) =>
    mutateCopy(cabin, {
      onSuccess: () => toast.success("Succesfully copyted!"),
    });

  const updateCabinHandler = (cabin) =>
    mutateEdit(cabin, {
      onSuccess: () => {
        toast.success("Successfully edited!");
      },
    });
  const createCabinHandler = (newCabin) =>
    mutateCreate(newCabin, {
      onSuccess: () => {
        toast.success("Successfully created!");
      },
    });

  const deleteCabinHandler = (id) =>
    mutateDelete(id, {
      onSuccess: () => toast.success("Succesfully deleted!"),
    });

  return {
    // Handlers
    createCabin: createCabinHandler,
    updateCabin: updateCabinHandler,
    deleteCabin: deleteCabinHandler,
    copyCabin: copyCabinHandler,

    // Loading states
    isCreating,
    isUpdating,
    isDeleting,
    isCopying,
    isLoading: isCreating || isUpdating || isDeleting || isCopying,
  };
}

export default useCabinOperations;
