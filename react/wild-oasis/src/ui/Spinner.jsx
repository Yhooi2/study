// import styled, { keyframes } from "styled-components";

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000) top/10px
      10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

// const SpinnerBase = tw.div`
//   mx-auto
//   my-20
//   w-24
//   aspect-square
//   rounded-full
//   animate-spin
//   [animation-duration:1.5s]
// `;
// const Spinner = ({ color = "rgb(79 70 229)" }) => {
//   const conicStyles = {
//     background: `
//     radial-gradient(farthest-side, ${color} 94%, transparent) top/8px 8px no-repeat,
//         conic-gradient(transparent 30%, ${color})
//       `,
//     WebkitMask:
//       "radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)",
//     mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)",
//   };

//   return <SpinnerBase style={conicStyles} />;
// };

export default Spinner;
