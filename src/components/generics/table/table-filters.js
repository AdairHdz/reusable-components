/**
 * @typedef FilterInfo
 * @property {string} key
 * @property {string} value
 * @property {Array<any>} data
 */

/**
 * 
 * @param {FilterInfo} filterInfo
 */
export const filterValues = (filterInfo) => {    
    if(!filterInfo.value.trim()) {
        return filterInfo.data;
    }
    
    const results = filterInfo.data.filter(element => {
        return element?.content[filterInfo.key]?.toUpperCase()?.includes(filterInfo?.value?.toUpperCase());
    });
    return results;


};