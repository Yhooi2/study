import tw from "tailwind-styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Aside = tw.aside`
  bg-stone-0
  py-10
  px-14
  border
  border-stone-100
  row-span-full
  flex
  flex-col
  gap-5
`;

function Sidebar() {
  return (
    <Aside>
      <Logo />
      <MainNav />
    </Aside>
  );
}

export default Sidebar;
