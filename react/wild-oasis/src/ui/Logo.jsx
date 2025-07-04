import styled from "styled-components";
// import tw from "tailwind-styled-components";

// // const StyledLogo = tw.div`
//   justify-items-center
// `;

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

// const Img = tw.img`
//   h-[15rem]
//   w-auto
// `;
const Img = styled.img`
  height: 15rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
