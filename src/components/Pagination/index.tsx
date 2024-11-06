import React from 'react';
import { usePagination, DOTS } from './usePagination';
import Styles from './index.module.scss';

interface PaginationProps {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });
console.log(paginationRange,"range")
    if (!paginationRange || paginationRange.length < 2) return null;

    const lastPage = paginationRange[paginationRange.length - 1] as number;

    const handlePreviousClick = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNextClick = () => {
        if (currentPage < lastPage) onPageChange(currentPage + 1);
    };

    const handlePageClick = (page: number | string) => {
        if (page !== DOTS) onPageChange(page as number); // Type assertion here for safety
    };

    return (
        <div className={Styles.pagination}>
            <ul className={`pagination-container ${className || ''} ${Styles.paginationList}`}>
                <li
                    className={`pagination-item ${currentPage === 1 ? 'disabled' : ''} ${Styles.arrowBtn}`}
                    onClick={handlePreviousClick}
                >
                    <span className="icon-left-arrow" />
                </li>

                {paginationRange.map((page, index) => (
                    <li
                        key={page === DOTS ? `dots-${index}` : page}
                        className={`pagination-item ${Styles.pageButton} ${page === currentPage ? Styles.pageItemActive : ''} ${page === DOTS ? Styles.dots : ''}`}
                        onClick={() => handlePageClick(page)}
                    >
                        {page === DOTS ? '...' : page}
                    </li>
                ))}

                <li
                    className={`pagination-item ${currentPage === lastPage ? 'disabled' : ''} ${Styles.arrowBtn}`}
                    onClick={handleNextClick}
                >
                    <span className="icon-right-arrow" />
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
