import useCabinMutation from "./useCabinMutation";

import {
  createCabin,
  copyCabin,
  editCabin,
  deleteCabin,
} from "../../../services/apiCabins";
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

  const copyCabinHandler = (cabin, options = {}) =>
    mutateCopy(cabin, {
      onSuccess: (data) => {
        toast.success("Succesfully copied!");
        options.onSuccess?.(data);
      },
    });

  const updateCabinHandler = (cabin, options = {}) =>
    mutateEdit(cabin, {
      onSuccess: (data) => {
        toast.success("Successfully edited!");
        options.onSuccess?.(data);
      },
      ...options,
    });
  const createCabinHandler = (newCabin, options = {}) =>
    mutateCreate(newCabin, {
      onSuccess: (data) => {
        toast.success("Successfully created!");
        options.onSuccess?.(data);
      },
    });

  const deleteCabinHandler = (id, options = {}) =>
    mutateDelete(id, {
      onSuccess: (data) => {
        toast.success("Successfully deleted!");
        options.onSuccess?.(data);
      },
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
