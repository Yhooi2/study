import SideMenu from "./SideMenu";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-full">
      <SideMenu />
      {children}
    </div>
  );
}

export default Layout;
