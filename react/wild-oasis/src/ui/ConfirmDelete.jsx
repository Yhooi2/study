// import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import styled from "styled-components";
// import tw from "tailwind-styled-components";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
// const StyledConfirmDelete = tw.div`
//   w-[44rem]
//   flex
//   flex-col
//   gap-5
//   [&>p]:text-stone-500
//   [&>p]
//   mb-5
//   [&>div]:flex
//   [&>div]:justify-end
//   [&>div]:gap-5
// `;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
