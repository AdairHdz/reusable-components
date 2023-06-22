import { useTheme } from "../../../hooks/use-theme";
import PaginatorButton from "./PaginatorButton";
import { paginatorButtonTypes } from "./TableProps";



/**
 * 
 * @param {import('./TableProps').TablePaginatorProps} props  
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