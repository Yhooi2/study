import { FormProvider, useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRowCabins from "./FormRowCabinst";
import useCabinOperations from "./hooks/useCabinOperations";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ onCloseModal, cabinToEdit = {} }) {
  const editValues = cabinToEdit;
  const editId = editValues.id;

  const methods = useForm({
    defaultValues: editId ? editValues : {},
  });
  const { handleSubmit, getValues, reset } = methods;

  const { isCreating, isUpdating, createCabin, updateCabin } =
    useCabinOperations();

  const handleCloseModal = () => onCloseModal?.();

  const onSubmit = editId
    ? (value) =>
        updateCabin(
          { ...value, id: editId },
          {
            onSuccess: () => {
              reset();
              handleCloseModal();
            },
          },
        )
    : (newCabin) =>
        createCabin(newCabin, {
          onSuccess: () => {
            reset();
            handleCloseModal();
          },
        });

  const isWorks = isCreating || isUpdating;

  // const onError = (err) => console.log(err);
  // console.log(errors);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)} type={onCloseModal && "modal"}>
        <FormRowCabins label="Cabin name">
          <Input type="text" id="name" disabled={isWorks} />
        </FormRowCabins>

        <FormRowCabins
          label="Maximum capacity"
          rules={{
            min: { value: 1, message: "Capacity should be at least 1" },
          }}
        >
          <Input type="number" id="maxCapacity" disabled={isWorks} />
        </FormRowCabins>

        <FormRowCabins
          label="Regular price"
          rules={{
            min: { value: 1, message: "Price should be at least 1" },
          }}
        >
          <Input type="number" id="regularPrice" disabled={isWorks} />
        </FormRowCabins>

        <FormRowCabins
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
        </FormRowCabins>

        <FormRowCabins label="Description for website">
          <Textarea type="text" id="description" defaultValue="" />
        </FormRowCabins>

        <FormRowCabins
          label="Cabin photo"
          required={editId ? false : undefined}
        >
          <FileInput id="image" accept="image/*" disabled={isWorks} />
        </FormRowCabins>

        <FormRow>
          <Button variation="secondary" type="reset" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button disabled={isWorks}>
            {editId ? "Edit cabin" : "Create cabin"}
          </Button>
        </FormRow>
      </Form>
    </FormProvider>
  );
}

export default CreateCabinForm;
