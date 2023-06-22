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

export const TableProps = {};