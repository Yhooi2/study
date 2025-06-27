import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const SINGLE_PAGE_COUNT = 10;

function Pagination({ count }) {
  const pages = Math.ceil(count / SINGLE_PAGE_COUNT);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page") ? +searchParams.get("page") : 1;

  const start = (currentPage - 1) * SINGLE_PAGE_COUNT + 1;
  const end = Math.min(currentPage * SINGLE_PAGE_COUNT, count);

  function handleClickLeft() {
    if (currentPage === 1) return;
    searchParams.set("page", currentPage - 1);
    setSearchParams(searchParams);
  }
  function handleClickRight() {
    if (currentPage === pages) return;
    searchParams.set("page", currentPage + 1);
    setSearchParams(searchParams);
  }
  if (pages < 2) return null;
  return (
    <StyledPagination>
      <P>
        Showing <span>{start}</span> to <span>{end}</span> of{" "}
        <span>{count}</span> results
      </P>
      <Buttons>
        <PaginationButton
          onClick={handleClickLeft}
          disabled={currentPage === 1}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={handleClickRight}
          disabled={currentPage === pages}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
