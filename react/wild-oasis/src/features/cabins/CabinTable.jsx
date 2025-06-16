// import styled from "styled-components";
import tw from "tailwind-styled-components";
import CabinRow from "./CabinRow";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import PageNotFound from "../../pages/PageNotFound";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;
const Table = tw.div`
  border
  border-stone-200
  text-2xl
  bg-stone-50
  rounded-md
  overflow-hidden
`;

// const TableHeader = styled.header`
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
const TableHeader = tw.header`
  grid
  grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]
  gap-10
  items-center
  border-b
  bg-stone-100
  border-stone-200
  uppercase
  tracking-wider
  font-semibold
  text-stone-600
  py-6
  px-10
`;

function CabinTable() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;
  if (error) return <PageNotFound />;
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
