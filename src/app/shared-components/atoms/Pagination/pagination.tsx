import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (pageNumber: number) => void;
  onLimitChange: (newLimit: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
  onLimitChange
}) => {
  const pageNumbers: number[] = [];
  const totalPages = Math.ceil(totalCount / pageSize);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages === 1) return null; // Do not show pagination if all items fit in one page

  return (
    <Pagination aria-label="Project table pagination">
      {pageNumbers.map(number => (
        <PaginationItem key={number} active={number === currentPage}>
          <PaginationLink onClick={(e) => {
            e.preventDefault();
            onPageChange(number);
          }} href="#">
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;

