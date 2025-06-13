import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import tw from "tailwind-styled-components";

const Main = tw.main`
  bg-stone-50
  pt-16
  px-[4.8rem]
  pb-[6.4rem]
`;
const TwAppLayout = tw.div`
  grid
  grid-cols-[26rem_1fr]
  grid-rows-[auto_1fr]
  h-screen
`;

function AppLayout() {
  return (
    <TwAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </TwAppLayout>
  );
}

export default AppLayout;
