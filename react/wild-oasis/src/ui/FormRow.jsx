import { cloneElement } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const FormRow = ({
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
    <>
      <Label htmlFor={name}>{label}</Label>
      {childClone}
      {error && <Error>{error.message}</Error>}
    </>
  );
};
export default FormRow;
