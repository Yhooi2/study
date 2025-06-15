import styled from "styled-components";
import tw from "tailwind-styled-components";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const TableRow = tw.div`
  grid
  grid-cols-[0.6fr_1.8fr_2.2fr]
  gap-10
  items-center
  py-6
  px-10
  divide-y
  divide-gray-100
`;

// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

const Img = tw.img`
  block
  w-[6.5rem]
  aspect-[3/2]
  object-cover
  transform
  scale-150
  -translate-x-2
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow() {
  return <div>CabinRow</div>;
}

export default CabinRow;
