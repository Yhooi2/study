import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin, editCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import FormRow from "../../ui/FormRow";

const StyleFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function CreateCabinForm({ cabinToEdit = {} }) {
  const editValues = cabinToEdit;
  const editId = editValues.id;

  const methods = useForm({
    defaultValues: editId ? editValues : {},
  });
  const { handleSubmit, reset, getValues } = methods;

  const queryClient = useQueryClient();

  const { mutate: mutateCreate, isPending: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Successfully created!!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },

    onError: (err) => toast.error(err.message),
  });

  const { mutate: mutateEdit, isPending: isUpdating } = useMutation({
    mutationFn: editCabin,
    onSuccess: () => {
      toast.success("Cabin successfully edited!!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },

    onError: (err) => toast.error(err.message),
  });
  const onSubmit = editId
    ? (editValues) => mutateEdit({ ...editValues, id: editId })
    : (newCabin) => mutateCreate(newCabin);
  const isWorks = isCreating || isUpdating;

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
            <Textarea
              type="text"
              id="description"
              defaultValue=""
              disabled={isWorks}
            />
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
