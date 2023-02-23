const uz = require("./Languages/uz.json");
const ru = require("./Languages/ru.json");
const en = require("./Languages/en.json");

class I18n {
    allResources = {};
    langCodes = [];
    activeLanguageCode = localStorage.getItem("lang");
    
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
    ChangeLanguageCode(langCode = this.langCodes[0]) {
        if (this.langCodes.includes(langCode) && window.localStorage.getItem("lang") !== langCode) {
            localStorage.removeItem("lang");
            localStorage.setItem("lang", langCode);
            this.activeLanguageCode = langCode;
        }
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