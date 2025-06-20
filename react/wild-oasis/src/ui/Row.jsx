import styled, { css } from "styled-components";
// import tw from "tailwind-styled-components";

const Row = styled.div`
  display: flex;

  ${(props) => {
    if (props.type === "horizontal") {
      return css`
        justify-content: space-between;
        align-items: center;
      `;
    }
    return css`
      flex-direction: column;
      gap: 1.6rem;
    `;
  }}
`;

// const Row = tw.div`
//   flex
//   ${(props) => props.type === "horizontal" && "items-center justify-between"}
//   ${(props) => props.type === "vertical" && "flex-col gap-6"}`;

export default Row;
