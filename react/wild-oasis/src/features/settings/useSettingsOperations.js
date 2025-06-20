import toast from "react-hot-toast";
import { getSettings, updateSetting } from "./apiSettings";
import useBaseMutation from "../../hooks/useBaseMutation";
import { useQuery } from "@tanstack/react-query";

function useUpdateSetting() {
  const { isPending: isUpdate, mutate } = useBaseMutation(
    updateSetting,
    "settings",
  );

  const setSettingHandler = (e, field) => {
    const { value } = e.target;
    if (!value) return;
    mutate(
      { [field]: value },
      {
        onSuccess: () => {
          toast.success("Setting successfully update!");
        },
      },
    );
  };

  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return {
    isLoading,
    getSettings: data,
    isUpdate,
    updateSetting: setSettingHandler,
  };
}

export default useUpdateSetting;
