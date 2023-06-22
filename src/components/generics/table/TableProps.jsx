/**
 * @typedef ThemeConfig
 * @property {Object} background
 * @property {string} background.color
 * @property {string} background.onHoverColor
 * @property {Object} border
 * @property {string} border.color
 * @property {string} border.onHoverColor
 * @property {Object} text
 * @property {string} text.color
 * @property {string} text.onHoverColor
 */

/**
 * @typedef TableThemeConfig
 * @property {ThemeConfig} tableHeaderThemeConfig
 * @property {ThemeConfig} tableBodyThemeConfig
 * @property {ThemeConfig} rowActionsButtonsThemeConfig
 */

/**
 * @typedef Filter
 * @property {string} key
 * @property {string} filterType
 * @property {{
* key: string,
* value: string,
* data: Array<any>}} onChange
* @property {boolean} disabled
*/

/**
* @typedef Header
* @property {Filter?} filter
* @property {string} title 
*/

/**
* @typedef Row 
* @property {string} id
* @property {any} content
*/


/**
* @typedef Table
* @property {Array<Header>} headers
* @property {Array<Row>} rows
*/

/**
* @typedef ThemeTableProps
* @property {TableThemeConfig} themeConfig
* @property {Table} tableStructure
* @property {(rowId: any, deletionPath: string)} setRowId
*/

/**
 * @typedef PaginatorButtonProps
 * @property {boolean} disabled
 * @property {() => void} clickHandler
 * @property {number} paginatorButtonType
 */

export const paginatorButtonTypes = {
    FIRST_PAGE: 1,
    PREVIOUS_PAGE: 2,
    NEXT_PAGE: 3,
    LAST_PAGE: 4
};

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
 * @typedef TableDataRecord
 * @property {string|number} id
 * @property {{}|JSX.Element} content - This can contain a simple object
 * (with key-value pairs, as long as the values are simple types) or it can be
 * a JSX.Element to be rendered on the screen
 */

/**
 * @typedef FilterInfo
 * @property {string} key
 * @property {string} value
 * @property {Array<TableDataRecord>} data
 */

/**
 * @typedef CellThemeConfig
 * @property {Object} background
 * @property {string} background.color
 * @property {string} background.onHoverColor
 * @property {Object} border
 * @property {string} border.color
 * @property {string} border.onHoverColor
 * @property {Object} text
 * @property {string} text.color
 * @property {string} text.onHoverColor
 */

/**
 * @typedef TableCellProps
 * @property {boolean} hovered 
 * @property {JSX.Element} children
 * @property {CellThemeConfig} themeConfig
 */

export const TableProps = {};