import Pagination from 'react-bootstrap/Pagination';

interface Props {
    pages: number | undefined;
    currentPage: number | undefined;
    onNextClick?: () => void
    onPrevClick?: () => void
    onLastClick?: () => void
}

const PaginationComponent = ({ pages, currentPage, onNextClick, onPrevClick, onLastClick }: Props) => {
    console.log("total items:", pages, "current: ", currentPage);

    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev onClick={onPrevClick} />
            <Pagination.Item>{1}</Pagination.Item>

            <Pagination.Next onClick={onNextClick} />
            <Pagination.Last onClick={onLastClick} />
        </Pagination>
    );
}

export default PaginationComponent;