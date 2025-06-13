import tw from "tailwind-styled-components";

const TwHeader = tw.header`
  bg-stone-0
  py-6
  px-16
  border
  border-stone-100
`;

function Header() {
  return <TwHeader>Header</TwHeader>;
}

export default Header;
