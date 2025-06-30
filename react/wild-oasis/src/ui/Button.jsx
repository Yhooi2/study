import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["size", "variation"].includes(prop),
})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);

  ${({ size = "medium" }) => {
    return sizes[size];
  }}
  ${({ variation = "primary" }) => variations[variation]}

  &:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-400);
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
