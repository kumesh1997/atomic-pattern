import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (pageNumber: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) => {
  const pageNumbers: number[] = [];
  const totalPages = Math.ceil(totalCount / pageSize);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <Pagination aria-label="Project table pagination">
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink first href="#" onClick={(e) => { e.preventDefault(); handleFirstPage(); }} />
      </PaginationItem>
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink previous href="#" onClick={(e) => { e.preventDefault(); handlePreviousPage(); }} />
      </PaginationItem>
      {pageNumbers.map(number => (
        <PaginationItem key={number} active={number === currentPage}>
          <PaginationLink onClick={(e) => { e.preventDefault(); onPageChange(number); }} href="#">
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={currentPage >= totalPages}>
        <PaginationLink next href="#" onClick={(e) => { e.preventDefault(); handleNextPage(); }} />
      </PaginationItem>
      <PaginationItem disabled={currentPage >= totalPages}>
        <PaginationLink last href="#" onClick={(e) => { e.preventDefault(); handleLastPage(); }} />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;

