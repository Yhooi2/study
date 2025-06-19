import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import useCabinMutation from "./hooks/useCabinMutation";
import { StyleFormRow } from "./styles";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { createCabin, editCabin } from "../../services/apiCabins";

function CreateCabinForm({ cabinToEdit = {} }) {
  const editValues = cabinToEdit;
  const editId = editValues.id;

  const methods = useForm({
    defaultValues: editId ? editValues : {},
  });
  const { handleSubmit, getValues, reset } = methods;

  const { isPending: isCreating, mutate: mutateCreate } =
    useCabinMutation(createCabin);

  const { isPending: isUpdating, mutate: mutateEdit } =
    useCabinMutation(editCabin);

  const onSubmit = editId
    ? (editValues) =>
        mutateEdit(
          { ...editValues, id: editId },
          {
            onSuccess: () => {
              toast.success("Successfully edited!!");
              reset();
            },
          },
        )
    : (newCabin) =>
        mutateCreate(newCabin, {
          onSuccess: () => {
            toast.success("Successfully created!!");
            reset();
          },
        });
  const isWorks = isCreating || isUpdating;
  console.log(isWorks);

  // const onError = (err) => console.log(err);
  // console.log(errors);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyleFormRow>
          <FormRow label="Cabin name">
            <Input type="text" id="name" disabled={isWorks} />
          </FormRow>
        </StyleFormRow>

        <StyleFormRow>
          <FormRow
            label="Maximum capacity"
            rules={{
              min: { value: 1, message: "Capacity should be at least 1" },
            }}
          >
            <Input type="number" id="maxCapacity" disabled={isWorks} />
          </FormRow>
        </StyleFormRow>

        <StyleFormRow>
          <FormRow
            label="Regular price"
            rules={{
              min: { value: 1, message: "Price should be at least 1" },
            }}
          >
            <Input type="number" id="regularPrice" disabled={isWorks} />
          </FormRow>
        </StyleFormRow>

        <StyleFormRow>
          <FormRow
            label="Discount"
            rules={{
              validate: (val) => {
                return (
                  Number(val) <= Number(getValues("regularPrice")) ||
                  "Discount should be less than regular price"
                );
              },
            }}
          >
            <Input
              type="number"
              id="discount"
              defaultValue={0}
              disabled={isWorks}
            />
          </FormRow>
        </StyleFormRow>

        <StyleFormRow>
          <FormRow label="Description for website">
            <Textarea type="text" id="description" defaultValue="" />
          </FormRow>
        </StyleFormRow>

        <StyleFormRow>
          <FormRow label="Cabin photo" required={editId ? false : undefined}>
            <FileInput id="image" accept="image/*" disabled={isWorks} />
          </FormRow>
        </StyleFormRow>

        <StyleFormRow>
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button disabled={isWorks}>
            {editId ? "Edit cabin" : "Create cabin"}
          </Button>
        </StyleFormRow>
      </Form>
    </FormProvider>
  );
}

export default CreateCabinForm;
