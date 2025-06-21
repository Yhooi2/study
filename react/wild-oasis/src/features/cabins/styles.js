import styled from "styled-components";
// import tw from "tailwind-styled-components";

// export const StyleFormRow = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// export const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;
// const Table = tw.div`
//   border
//   border-stone-200
//   text-2xl
//   bg-stone-50
//   rounded-md
//   overflow-hidden
// `;

// export const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;
// const TableHeader = tw.header`
//   grid
//   grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]
//   gap-10
//   items-center
//   border-b
//   bg-stone-100
//   border-stone-200
//   uppercase
//   tracking-wider
//   font-semibold
//   text-stone-600
//   py-6
//   px-10
// `;

// export const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

// export const TableRow = tw.div`
//   grid
//   grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]
//   gap-10
//   items-center
//   py-6
//   px-10
//   divide-y
//   divide-stone-100
// `;

export const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

// const Img = tw.img`
//   block
//   w-[6.5rem]
//   aspect-[3/2]
//   object-cover
//   transform
//   scale-150
//   -translate-x-2
// `;

export const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;
// const Cabin = tw.div`
//   text-2xl
//   font-semibold
//   text-stone-600
//   font-heading
// `;

export const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;
// const Price = tw.div`
//   font-heading
//   font-semibold
// `;

export const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
// const Discount = tw.div`
//   font-heading
//   font-medium
//   text-stone-700
// `;
