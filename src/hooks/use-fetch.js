import { useState } from "react";
import { get, post, put, del } from "../helpers/api_helper";

/**
 * @global
 * @typedef RestServiceRequester
 * @property {(endpoint: string) => Promise<void>} get
 * @property {(endpoint: string, payload: any) => Promise<void>} post
 * @property {(endpoint: string, payload: any) => Promise<void>} update
 * @property {(endpoint: string, payload: any) => Promise<void>} put
 * @property {(endpoint: string) => Promise<void>} delete
 */


/**
 * @param {RestServiceRequester} restServiceRequester
 */
export const useFetch = (restServiceRequester) => {
    const [errors, setErrors] = useState(null);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async (url) => {
        setIsLoading(true);      

        const response = restServiceRequester ? await restServiceRequester.get(url) : await get(url);        
        if(response.status !== 200) {
            setErrors(response.data);
        } else {            
            setData(response.data);
        }

        setStatus(response.status);
        setResponseMessage(response.message);
        setIsLoading(false);
    };

    const postData = async (url, payload) => {
        setIsLoading(true);

        const response = restServiceRequester ? await restServiceRequester.post(url, payload) : await post(url, payload);
                
        if(response.status !== 200) {
            setErrors(response.data);
        } else {            
            setData(response.data);
        }
                
        setStatus(response.status);
        setResponseMessage(response.message);
        setIsLoading(false);
    };

    const putData = async (url, payload) => {
        setIsLoading(true);

        const response = restServiceRequester ? await restServiceRequester.put(url, payload) : await put(url, payload);
        if(response.status !== 200) {
            setErrors(response.data);
        } else {            
            setData(response.data);
        }

        setData(response.data);
        setStatus(response.status);
        setResponseMessage(response.message);

        setIsLoading(false);
    };

    const deleteData = async (url) => {
        setIsLoading(true);

        const response = restServiceRequester ? await restServiceRequester.delete(url) : await del(url);
        if(response.status !== 200) {
            setErrors(response.data);
        } else {            
            setData(response.data);
        }

        setData(response.data);
        setStatus(response.status);
        setResponseMessage(response.message);

        setIsLoading(false);
    };

    const clearMessage = () => {
        setResponseMessage(null);
    };

    const clearErrors = () => {
        setErrors(null);
    };

    return {
        errors,
        data,
        status,
        responseMessage,
        getData,
        postData,
        putData,
        deleteData,
        isLoading,
        clearMessage,
        clearErrors
    };
};