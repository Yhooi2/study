import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
// import tw from "tailwind-styled-components";

// const Overlay = tw.div`
//   fixed
//   inset-0
//   flex
//   justify-center
//   items-center
//   z-50
//   bg-white/10
//   backdrop-blur-sm
//   transition-all
//   duration-500
// `;
// const StyledModal = tw.div`
//   bg-stone-50
//   px-16
//   py-12
//   rounded-lg
//   shadow-2xl
//   transition-all
//   duration-500
//   relative
// `;

// const Button = tw.button`
//   [&>svg]:text-stone-500
//   [&>svg]:size-10
//   hover:bg-stone-200
//   rounded-full
//   absolute
//   top-3
//   right-3
//   p-2
//   transition-all
//   duration-200
// `;
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [modal, setModal] = useState("");

  const open = (window) => {
    setModal(window);
  };
  const close = () => setModal("");
  return (
    <ModalContext.Provider value={{ open, close, modal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, window }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(window) });
}

function Window({ children, window }) {
  const { modal, close } = useContext(ModalContext);

  if (modal !== window) return null;
  return createPortal(
    <Overlay onClick={(e) => e.target === e.currentTarget && close()}>
      <StyledModal>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        {cloneElement(children, { onCloseModal: close })}
      </StyledModal>
    </Overlay>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
