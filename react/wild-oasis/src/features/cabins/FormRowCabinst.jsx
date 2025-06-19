import { cloneElement } from "react";
import { useFormContext } from "react-hook-form";
import FormRow from "../../ui/FormRow";

const FormRowCabins = ({
  children,
  rules = {},
  label,
  required = "This field is required",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const name = children.props.id;
  const error = name && errors ? errors[name] : null;

  const childClone = cloneElement(children, {
    ...register(name, {
      required,
      ...rules,
    }),
    "aria-invalid": error ? "true" : "false",
  });

  return (
    <FormRow label={label} error={error?.message}>
      {childClone}
    </FormRow>
  );
};

export default FormRowCabins;
