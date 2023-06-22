/**
 * @typedef ThemeConfig
 * @property {Object} background
 * @property {string} background.color 
 * @property {Object} border
 * @property {string} border.color 
 * @property {Object} text
 * @property {string} text.color 
 */

/**
 * @typedef Option
 * @property {string} value
 * @property {string} name
 * @property {boolean} disabled
 * @property {boolean} selected
 */

/**
 * @typedef TextInputProps
 * @property {ThemeConfig} labelConfig
 * @property {ThemeConfig} inputConfig
 * @property {ThemeConfig} errorConfig
 * @property {string} label
 * @property {string} id
 * @property {string} name
 * @property {string} placeholder
 * @property {string} serverValidationError
 * @property {Array<any>} values
 * @property {Array<Option>} options
 * @property {Array<any>} alreadySelectedItems
 */

/**
 * @typedef Schema
 * @property {Object} initialValues
 * @property {Object} validationSchema
 */

/**
 * @typedef FormPath
 * @property {string} submitPath
 * @property {Object} submitBody
 * @property {string} fetchPath
 */

/**
 * @typedef FormProps
 * @property {Schema} schema
 * @property {JSX.Element} children
 * @property {FormPath} formPath
 * @property {string} fetchNewDataPath
 * @property {{
* path: string,
* text: string,
* content: JSX.Element}} goToPreviousPageAction
* @property {{
* path: string,
* text: string,
* content: JSX.Element}} submitAction
* @property {JSX.Element} title
* @property {Function} setServerValidationErrors 
* @property {(responseData) => {}} afterSubmitWentOk 
* @property {boolean} hideSubmitButton
* @property {boolean} hideResponseMessage
* @property {string} action - POST or PUT
* @property {(formValues) => {}} formatValuesBeforeSending
* @property {import('../../../hooks/use-fetch').RestServiceRequester} restServiceRequester
*/

/**
 * @typedef ThemeConfig
 * @property {Object} background
 * @property {string} background.color 
 * @property {Object} border
 * @property {string} border.color 
 * @property {Object} text
 * @property {string} text.color 
 */


/**
 * @typedef TextInputProps
 * @property {ThemeConfig} labelConfig
 * @property {ThemeConfig} inputConfig
 * @property {ThemeConfig} errorConfig
 * @property {string} label
 * @property {string} id
 * @property {string} name
 * @property {string} serverValidationError
 */

export const FormProps = {};