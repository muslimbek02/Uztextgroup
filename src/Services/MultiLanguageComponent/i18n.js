const uz = require("./Languages/uz.json");
const ru = require("./Languages/ru.json");
const en = require("./Languages/en.json");

class I18n {
    allResources = {};
    langCodes = [];
    get activeLanguageCode() {
        return localStorage.getItem("lang") ?? this.langCodes[0];
    }
    AddResource(langCode, json) {
        this.langCodes.push(langCode);
        this.allResources[langCode] = json;
    }
    #GetResource() {
        return this.allResources[this.activeLanguageCode];
    }
    ChangeLanguageCode(langCode) {
        if (langCode && this.langCodes.includes(langCode) && langCode !== this.activeLanguageCode) {
            localStorage.removeItem("lang");
            localStorage.setItem("lang", langCode);
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