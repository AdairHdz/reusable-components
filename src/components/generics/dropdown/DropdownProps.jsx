/**
 * @typedef {{
 * text: string,
* path: string,
* icon: JSX.Element,
* type: number
* }} DropdownListItem 
 */

export const DropdownItemTypes = {
    LINK: 1,
    ACTION: 2
};

/**
 * @typedef DropdownButtonProps
 * @property {JSX.Element?} lead
 * @property {Array<DropdownListItem>} items
*/

/**
 * @typedef DropdownListProps
 * @property {Array<DropdownListItem>} items
 */


export const DropdownProps = {};