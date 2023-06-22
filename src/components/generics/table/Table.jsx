import { useEffect, useState } from "react";
import { TableRow } from "./TableRow";
import { useTheme } from "../../../hooks/use-theme";
import { TablePaginator } from "./TablePaginator";
import { filterValues } from "./table-filters";

import "./TableProps";
import { styled } from "styled-components";

const StyledTable = styled.table`
  width: 100%;    
  border-collapse: separate; 
  border-spacing: 0 0.7rem;
  table-layout:fixed;
  text-align: center;
`;

const StyledTableHead = styled.thead`
  @media screen and (max-width: 768px) {
    .theme-table-head {
      text-align: center;
    }
  }
`;

const StyledTableHeaderCell = styled.th`
  .theme-table-header-cell {
    font-weight: normal;    
    padding: 1rem 2rem;
    padding: 0;
    margin: 0;
    text-align: center;
    margin-bottom: "0.5rem";
  }
`;

const StyledTableHeaderCellContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  max-height: 5rem;
  min-height: 5rem;
  width: 100%;
  text-overflow: ellipsis;
`;

const StyledTableBody = styled.tbody`
  font-weight: bold;
`;

const StyledFilter = styled.input`
  width: 80%;
  border: 0.1rem solid #ddd;
  padding: 0.3rem 0.5rem;

  &:focus {
    outline: none;
  }
`;

/**
 * 
 * @param {import('./TableProps').ThemeTableProps} props 
 * @returns 
 */
export const Table = (props) => {
  const {
    theme
  } = useTheme();

  const [activeRow, setActiveRow] = useState(null);
  const [renderedRows, setRenderedRows] = useState(props.tableStructure?.rows);
  const [filteredRows, setFilteredRows] = useState(props.tableStructure?.rows);

  const [pageInfo, setPageInfo] = useState({
    rowsPerPage: 10,
    currentPage: 1,
    totalRows: filteredRows,
    totalPages: (!filteredRows?.length) ? 1 : Math.ceil(filteredRows?.length / 10)
  });

  useEffect(() => {
    setPageInfo(prevData => {
      return {
        rowsPerPage: 10,
        currentPage: prevData.currentPage,
        totalRows: filteredRows,
        totalPages: !filteredRows?.length ? 1 : Math.ceil(filteredRows?.length / 10)
      };
    });
  }, [props.tableStructure, props.tableStructure?.rows]);



  const paginateRows = (rowsToPaginate) => {
    const rows = [];
    if (!props.tableStructure?.rows) {
      return;
    }
    for (const row of rowsToPaginate?.slice((pageInfo.rowsPerPage * pageInfo.currentPage) - pageInfo.rowsPerPage, pageInfo.rowsPerPage * pageInfo.currentPage)) {
      rows.push({
        id: row.id,
        content: row.content,
      });
    }
    return rows;
  };

  useEffect(() => {
    setFilteredRows(props.tableStructure.rows);
  }, [props.tableStructure?.rows]);

  useEffect(() => {
    const paginatedRows = paginateRows(filteredRows);
    setRenderedRows(paginatedRows);
    setPageInfo(prevData => {
      return {
        rowsPerPage: prevData.rowsPerPage,
        currentPage: prevData.currentPage,
        // totalRows: props?.tableStructure?.rows,
        totalRows: filteredRows,
        totalPages: (!filteredRows?.length) ? 1 : Math.ceil(filteredRows?.length / 10)
      };

    });
  }, [pageInfo.currentPage, filteredRows]);


  return (
    <>
      <StyledTable>
        <StyledTableHead>
          <tr>
            {props.tableStructure?.headers.map(header => {
              if (header.filter) {
                return (
                  <>
                    <StyledTableHeaderCell
                      style={{
                        color: props.themeConfig?.tableHeaderThemeConfig?.text?.color ?? theme.primaryColor,
                      }}
                    >
                      <StyledTableHeaderCellContent>
                        <span
                          style={{
                            textOverflow: "ellipsis",
                            width: "100%",
                          }}
                        >
                          {header.title}
                        </span>
                        <StyledFilter
                          name={header.filter?.key}
                          type={header.filter?.filterType}
                          onChange={(e) => {
                            setPageInfo(prevData => {
                              return {
                                currentPage: 1,
                                rowsPerPage: prevData.rowsPerPage,
                                totalPages: prevData.totalPages,
                                totalRows: prevData.totalRows
                              };
                            });
                            if (header.filter?.onChange) {
                              const results = header.filter?.onChange({
                                key: header.filter?.key,
                                value: e.target.value,
                                data: props.tableStructure?.rows
                              });
                              return setFilteredRows(results);
                            }
                            const results = filterValues({
                              key: header.filter?.key,
                              value: e.target.value,
                              data: props.tableStructure?.rows
                            });
                            setFilteredRows(results);
                          }}
                          disabled={header.filter?.disabled}
                        >

                        </StyledFilter>
                      </StyledTableHeaderCellContent>
                    </StyledTableHeaderCell>
                  </>
                );
              }
              return (
                <StyledTableHeaderCell
                  key={header.title}
                  style={{
                    color: props.themeConfig?.tableHeaderThemeConfig?.text?.color ?? theme.primaryColor
                  }}
                >
                  {header.title}
                </StyledTableHeaderCell>
              );
            })}
          </tr>
        </StyledTableHead>

        <StyledTableBody>
          {renderedRows?.map(row => (
            <TableRow
              key={row.id}
              id={row.id}
              rowThemeConfig={props.themeConfig?.tableBodyThemeConfig}
              rowActionsButtonsThemeConfig={props.themeConfig?.rowActionsButtonsThemeConfig}
              setRowId={props.setRowId}
              activeRowId={activeRow}
              setActiveRow={setActiveRow}
              data={row.content}
            />
          ))}
        </StyledTableBody>
      </StyledTable>

      <TablePaginator
        paginationLinks={{
          rowsPerPage: pageInfo.rowsPerPage,
          currentPage: pageInfo.currentPage,
          totalRows: pageInfo.totalRows,
          totalPages: pageInfo.totalPages,
          links: {
            firstPage: "",
            lastPage: "",
            nextPage: "",
            previousPage: "",
          }
        }}
        goToNextPageHandler={() => {
          setPageInfo(prevData => {
            return {
              ...prevData,
              currentPage: prevData.currentPage + 1,
            };
          });
        }}
        goToPreviousPageHandler={() => {
          setPageInfo(prevData => {
            return {
              ...prevData,
              currentPage: prevData.currentPage - 1,
            };
          });
        }}
        goToFirstPageHandler={() => {
          setPageInfo(prevData => {
            return {
              ...prevData,
              currentPage: 1
            };
          });
        }}
        goToLastPageHandler={() => {
          setPageInfo(prevData => {
            return {
              ...prevData,
              currentPage: pageInfo.totalPages
            };
          });
        }}
      />
    </>
  );
};