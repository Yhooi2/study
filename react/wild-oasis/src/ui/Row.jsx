// import styled, { css } from "styled-components";
import tw from "tailwind-styled-components";

// const Row = styled.div`
//   display: flex;

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       justify-content: space-between;
//       align-items: center;
//     `}

//   ${(props) =>
//     props.type === "vertical" &&
//     css`
//       flex-direction: column;
//       gap: 1.6rem;
//     `}
// `;

// Row.defaultProps = {
//   type: "vertical",
// };
const Row = tw.div`
  flex
  ${(props) => props.type === "horizontal" && "justify-center justify-between"}
  ${(props) => props.type === "vertical" && "flex-col gap-6"}`;
export default Row;
