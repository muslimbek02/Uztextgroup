import { Axios } from "axios";
const config = require("../AppConfig/config.json");



const axios = new Axios({
    baseURL: config.BACKEND_API_URL,
    headers: {
        "Content-Type": "application/JSON",
    },
    responseType: "json",
    transformRequest: (req) => {
        return JSON.stringify(req);
    },
    transformResponse: (res) => {
        return JSON.parse(res);
    }
})

export const FetchService = {
    axios: axios,

    /**
     * Get resource from API
     * @param {string} path 
     * @param {import("axios").AxiosDefaults} config 
     * @returns 
     */
    async GetAsync(path, config = null) {
        try {
            return await this.ExecuteRequestAsync(path, null, 'GET', config);
        } catch (error) {
            throw error;
        }
    },
    /**
     * 
     * @param {string} path 
     * @param {object} data 
     * @param {import("axios").AxiosDefaults} config
     * @returns 
     */
    async PostAsync(path, data, config = null) {
        try {
            return await this.ExecuteRequestAsync(path, data, 'POST', config)
        } catch (error) {
            throw error;
        }
    },
    /**
     * 
     * @param {string} path 
     * @param {object} data 
     * @param {import("axios").AxiosDefaults} config 
     * @returns 
     */
    async UpdateAsync(path, data, config = null) {
        try {
            return await this.ExecuteRequestAsync(path, data, 'PUT', config);
        } catch (error) {
            throw error;
        }
    },
    /**
     * 
     * @param {string} path 
     * @param {import("axios").AxiosDefaults} config 
     * @returns 
     */
    async DeleteAsync(path, config = null) {
        try {
            return await this.ExecuteRequestAsync(path, null, 'DELETE', config)
        } catch (error) {
            throw error;
        }
    },
    /**
     * 
     * @param {string} url 
     * @param {object} data 
     * @param {'POST' | 'GET' | 'PUT' | 'DELETE'} method
     * @param {import("axios").AxiosDefaults} config 
     */
    async ExecuteRequestAsync(path, data, method, config) {
        this.SetConfig(config);
        try {
            if (process.env.NODE_ENV === "development")
                console.log("Executing...")
            const response = await this.axios.request({
                url: (localStorage.getItem("lang") ?? "uz") + path,
                data: data,
                method: method
            });
            if (process.env.NODE_ENV === "development")
                console.log("Executed", response);
            if (response.status < 200 || response.status > 299)
                throw response;
            return response;
        } catch (error) {
            console.log("An Exception", error);
            throw error;
        }
    },
    /**
     * 
     * @param {import("axios").AxiosDefaults} config 
     */
    SetConfig(config) {
        if (config !== null)
            this.axios.defaults = { ...config, ...this.axios.defaults };
    }
}