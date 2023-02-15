import {Axios} from "axios";
const config = require("../../AppConfig/config.json");

export default{
    axios: new Axios(),
    /**
     * 
     * @param {string} path 
     * @param {import("axios").AxiosDefaults} config 
     * @returns 
     */
    async GetAsync(path, config = null) {
        return await this.ExecuteRequest(path, "GET", null, config);
    },
    /**
     * 
     * @param {string} path 
     * @param {object} body 
     * @param {import("axios").AxiosDefaults} config 
     * @returns 
     */
    async PostAsync(path, body, config = null) {
        return await this.ExecuteRequest(path, "POST", body, config);
    },
    /**
     * 
     * @param {string} path 
     * @param {object} body 
     * @param {import("axios").AxiosDefaults} config 
     * @returns 
     */
    async PutAsync(path, body, config = null) {
        return await this.ExecuteRequest(path, "PUT", body, config);
    },
    /**
     * 
     * @param {string} path 
     * @param {import("axios").AxiosDefaults} config 
     * @returns 
     */
    async DeleteAsync(path, config = null) {
        return await this.ExecuteRequest(path, "DELETE", null, config);
    },

    /**
     * 
     * @param {string} path 
     * @param {String} method 
     * @param {object} body 
     * @param {import("axios").AxiosDefaults} config 
     */
    async ExecuteRequest(path, method, body, config = null) {
        try {
            this.SetConfig(config);
            return await this.axios.request({
                url: path,
                data: JSON.stringify(body),
                method: method,
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    SetConfig(config)
    {
        this.axios.defaults = {...(config == null ? this.axios.defaults : config)};
    }

}



