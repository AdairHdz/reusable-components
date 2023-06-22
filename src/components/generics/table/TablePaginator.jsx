import { useTheme } from "../../../hooks/use-theme";
import PaginatorButton from "./PaginatorButton";
import { paginatorButtonTypes } from "./paginator-button-types";

/**
 * @typedef Link
 * @property {string | undefined} firstPage
 * @property {string | undefined} lastPage
 * @property {string | undefined} previousPage
 * @property {string | undefined} nextPage
 */

/**
 * @typedef PaginationLinks
 * @property {Link} links
 * @property {number | undefined} currentPage
 * @property {number | undefined} totalPages
 * @property {number | undefined} rowsPerPage
 * @property {number | undefined} totalRows
 */

/**
 * @typedef TablePaginatorProps 
 * @property {PaginationLinks} paginationLinks
 * @property {() => void} goToFirstPageHandler
 * @property {() => void} goToLastPageHandler
 * @property {() => void} goToPreviousPageHandler
 * @property {() => void} goToNextPageHandler
 *
 */

/**
 * 
 * @param {TablePaginatorProps} props  
 */

export const TablePaginator = (props) => {
    const {
        theme
    } = useTheme();

    return (
        <>
            <div
                className="d-flex gap-3 align-items-center w-auto ms-auto me-2 mt-4"
            >
                <>
                    <PaginatorButton
                        disabled={props?.paginationLinks?.currentPage === 1}
                        paginatorButtonType={paginatorButtonTypes.FIRST_PAGE}
                        clickHandler={props?.goToFirstPageHandler} />
                    <PaginatorButton
                        disabled={props?.paginationLinks?.currentPage === 1}
                        paginatorButtonType={paginatorButtonTypes.PREVIOUS_PAGE}
                        clickHandler={props?.goToPreviousPageHandler} />
                </>
                {props.paginationLinks?.currentPage > 1 && (
                    <span
                        style={{
                            color: theme.secondaryColor
                        }}
                        className="pointer"
                        onClick={props?.goToPreviousPageHandler}
                    >
                        {props?.paginationLinks?.currentPage - 1}
                    </span>
                )}
                <span
                    style={{
                        color: theme.secondaryColor
                    }}
                    className="fw-bold fs-5"
                >
                    {props?.paginationLinks?.currentPage ?? 1}
                </span>
                {props.paginationLinks?.currentPage < props.paginationLinks.totalPages && (
                    <span
                        className="pointer"
                        style={{
                            color: theme.secondaryColor
                        }}
                        onClick={props?.goToNextPageHandler}
                    >
                        {props?.paginationLinks?.currentPage + 1}
                    </span>
                )}

                {props.paginationLinks?.totalPages > props.paginationLinks?.currentPage && props.paginationLinks?.totalPages > (props.paginationLinks?.currentPage + 1) && (
                    <span
                        className="pointer"
                        style={{
                            color: theme.secondaryColor
                        }}
                        onClick={props?.goToLastPageHandler}
                    >
                        ...{props?.paginationLinks?.totalPages}
                    </span>
                )}

                {props?.paginationLinks?.currentPage < props?.paginationLinks?.totalPages && (
                    <>
                        <PaginatorButton
                            disabled={props?.paginationLinks?.currentPage === props?.paginationLinks?.totalPages}
                            buttonType={paginatorButtonTypes.NEXT_PAGE}
                            clickHandler={props?.goToNextPageHandler} />
                        <PaginatorButton
                            disabled={props?.paginationLinks?.currentPage === props?.paginationLinks?.totalPages}
                            buttonType={paginatorButtonTypes.LAST_PAGE}
                            clickHandler={props?.goToLastPageHandler} />
                    </>
                )}
            </div>
        </>
    );
};