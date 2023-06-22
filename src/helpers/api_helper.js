/** @format */

import axios from "axios";

//apply base url for axios
export const API_URL = import.meta.env.VITE_URL_BACK;

const axiosApi = axios.create({
        baseURL: API_URL,
        headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        validateStatus: function(status) {
                return [200, 400].includes(status); // default
        },
});

axiosApi.interceptors.response.use(
        (response) => {
                if (response.status === 403) {
                        localStorage.clear();
                        window.location = "/login";
                }
                return response;
        },
        (error) => {
                if (error.response.status === 403) {
                        localStorage.clear();
                        window.location = "/login";
                }
                return Promise.reject(error);
        }
);

let CONTROLLER = {};
// needs to be an arrow function to access the global controller
export const abortableGet = async (url, config = {}, key = url) => {
        // document.getElementById("main-content").classList.add("loading");

        if (CONTROLLER[key]) CONTROLLER[key].abort();

        CONTROLLER[key] = new AbortController();

        try {
                const response = await axiosApi.get(url, {
                        headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        signal: CONTROLLER[key].signal,
                        ...config,
                });

                delete CONTROLLER[key];
                return response.data;
        } catch (error) {
                delete CONTROLLER[key];
                if (error.response) {
                        return error.response.data;
                } else {
                        return { status: 418 };
                }
        }
};

export async function get(url, config = {}) {
        // document.getElementById("main-content").classList.add("loading");
        return await axiosApi
                .get(url, {
                        headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        ...config,
                })
                .then((response) => {
                        // document.getElementById("main-content").classList.remove("loading");
                        return response.data;
                })
                .catch((error) => {
                        // document.getElementById("main-content").classList.remove("loading");
                        return error.response.data;
                });
}

export async function post(url, data, config = {}) {
        //   document.getElementById("main-content").classList.add("loading");
        return axiosApi
                .post(url, data, {
                        headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        ...config,
                })
                .then((response) => {
                        //   document.getElementById("main-content").classList.remove("loading");
                        return response.data;
                })
                .catch((error) => {
                        //   document.getElementById("main-content").classList.remove("loading");
                        return error.response.data;
                });
}

export async function put(url, data, config = {}) {
        // document.getElementById("main-content").classList.add("loading");
        return axiosApi
                .put(url, data, {
                        headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        ...config,
                })
                .then((response) => {
                        // document.getElementById("main-content").classList.remove("loading");
                        return response.data;
                })
                .catch((error) => {
                        // document.getElementById("main-content").classList.remove("loading");
                        return error.response.data;
                });
}

export async function del(url, config = {}) {
        // document.getElementById("main-content").classList.add("loading");
        return await axiosApi
                .delete(url, {
                        headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        ...config,
                })
                .then((response) => {
                        // document.getElementById("main-content").classList.remove("loading");
                        return response.data;
                })
                .catch((error) => {
                        // document.getElementById("main-content").classList.remove("loading");
                        return error.response.data;
                });
}
