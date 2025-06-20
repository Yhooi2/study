import useBaseMutation from "../../../hooks/useBaseMutation";

function useCabinMutation(func) {
  return useBaseMutation(func, "cabins");
}

export default useCabinMutation;
