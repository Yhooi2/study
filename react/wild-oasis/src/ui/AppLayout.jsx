import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import tw from "tailwind-styled-components";

// const Main = styled.main`
//   background-color: var(--color-grey-50);
//   padding: 4rem 4.8rem 6.4rem;
//   overflow: scroll;
// `;

const Main = tw.main`
  bg-stone-50
  pt-16
  px-[4.8rem]
  pb-[6.4rem]
  overflow-scroll
`;

// const StyledAppLayout = styled.div`
//   display: grid;
//   grid-template-columns: 26rem 1fr;
//   grid-template-rows: auto 1fr;
//   height: 100vh;
// `;
const TwAppLayout = tw.div`
  grid
  grid-cols-[26rem_1fr]
  grid-rows-[auto_1fr]
  h-screen
`;

// const Container = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;

const Container = tw.div`
  max-w-7xl
  my-0
  mx-auto
  flex
  flex-col
  gap-14
`;

function AppLayout() {
  return (
    <TwAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </TwAppLayout>
  );
}

export default AppLayout;
