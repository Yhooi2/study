import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
// import styled from "styled-components";
import tw from "tailwind-styled-components";

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;

// const StyledModal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-lg);
//   box-shadow: var(--shadow-lg);
//   padding: 3.2rem 4rem;
//   transition: all 0.5s;
// `;

// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;

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

function Modal({ children, onClick }) {
  return createPortal(
    <Overlay onClick={(e) => e.target === e.currentTarget && onClick()}>
      <StyledModal>
        <Button onClick={onClick}>
          <HiXMark />
        </Button>
        {children}
      </StyledModal>
      ;
    </Overlay>,
    document.body,
  );
}

export default Modal;
