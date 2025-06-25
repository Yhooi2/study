import { createContext, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
// import tw from "tailwind-styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledTuggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;
const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;
// const StyledMenu = tw.div
//
//   flex,
//   items-center
//   justify-end
//   z-10
// `;

// const StyledDropdown = tw.div`
//   p-2
//   bg-transparent
//   border-none
//   rounded-md
//   mr-auto
//   [&>svg]:size-10
//   [&>svg]:hover:bg-none
//   [&>svg]:text-stone-700
//   z-30
// `;

// const StyledList = tw.ul`
//   absolute
//   top-full
//   bg-stone-50
//   shadow-md
//   rounded-xl
//   z-40
// `;

// const StyledButton = tw.button`
//   z-50
//   w-full
//   text-left
//   bg-transparent
//   border-none
//   py-5
//   px-10
// `;

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const openMenu = (id, position) => {
    setOpenId(id);
    setPosition(position);
  };
  const closeMenu = () => {
    setOpenId(null);
  };
  return (
    <MenuContext.Provider value={{ openId, openMenu, closeMenu, position }}>
      {children}
    </MenuContext.Provider>
  );
}

function Tuggle({ id }) {
  const { openId, openMenu, closeMenu } = useContext(MenuContext);
  const buttonRef = useRef();
  const handleToggle = () => {
    if (openId === id) closeMenu();
    else {
      const rect = buttonRef.current.getBoundingClientRect();
      openMenu(id, { x: window.innerWidth - rect.right, y: rect.bottom });
    }
  };
  return (
    <StyledTuggle ref={buttonRef} onClick={handleToggle}>
      <HiEllipsisVertical />
    </StyledTuggle>
  );
}

function List({ children, id }) {
  const { openId, closeMenu, position } = useContext(MenuContext);
  if (openId !== id) return null;
  const handleClick = (e) => {
    if (e.target.closest("button")) return;
    closeMenu();
  };
  return createPortal(
    <Overlay onClick={handleClick}>
      <StyledList position={position}>{children}</StyledList>
    </Overlay>,
    document.body,
  );
}

function Item({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
Menus.Menu = StyledMenu;
Menus.Tuggle = Tuggle;
Menus.List = List;
Menus.Item = Item;

export default Menus;
