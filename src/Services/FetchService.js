import { Axios } from "axios";
const config = require("../AppConfig/config.json");


const axios = new Axios({
    baseURL: config.BACKEND_API_URL
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
    async Delete(path, config = null) {
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
        try {
            this.SetConfig(config);
            return await this.axios.request({
                url: path,
                data: data,
                method: method
            })
        } catch (error) {
            throw error;
        }
    },
    /**
     * 
     * @param {import("axios").AxiosDefaults} config 
     */
    SetConfig(config) {
        if (config !== null)
            this.axios.defaults = config;
    }
}