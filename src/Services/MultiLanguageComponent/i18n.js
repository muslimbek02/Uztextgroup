const uz = require("./Languages/uz.json");
const ru = require("./Languages/ru.json");
const en = require("./Languages/en.json");

class I18n {
    allResources = {};
    langCodes = [];
    AddResource(langCode, json) {
        this.langCodes.push(langCode);
        this.allResources[langCode] = json;

    }
    #GetResource() {
        const langCode = window.localStorage.getItem('lang');
        if (!this.langCodes.includes(langCode))
            return "No Content";
        return this.allResources[langCode];
    }
    Get(key) {

        const keys = key.split('.');
        let resources = this.#GetResource();
        if (typeof resources === "string")
            return resources;

        for (let key of keys) {
            if (resources == undefined)
                return "No Content";
            resources = resources[key];
        }

        return resources;
    }
}



const i18n = new I18n();
i18n.AddResource('uz', uz);
i18n.AddResource('en', en);
i18n.AddResource('ru', ru);
export default i18n;