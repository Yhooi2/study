import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import tw from "tailwind-styled-components";

const Overlay = tw.div`
  fixed
  inset-0
  flex
  justify-center
  items-center
  z-50
  bg-white/10
  backdrop-blur-sm
  transition-all
  duration-500
`;
const StyledModal = tw.div`
  bg-stone-50
  px-16
  py-12
  rounded-lg
  shadow-2xl
  transition-all
  duration-500
  relative
`;

const Button = tw.button`
  [&>svg]:text-stone-500
  [&>svg]:size-10
  hover:bg-stone-200
  rounded-full
  absolute
  top-3
  right-3
  p-2
  transition-all
  duration-200
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
