import { _locales_en, _locales_ja } from "../../../locales";

export function GetUserLanguage() {
    if (typeof window !== 'undefined') {
        const userLanguage = navigator.language.split('-')[0];
        return userLanguage;
    }
    return 'GetUserLanguage Error';
}

export function _locales(text: string, ...variables: string[]) {
    if(typeof window !== 'undefined') {
        const userLanguage = GetUserLanguage();
        const translation = userLanguage === 'ja' ? _locales_ja[text] : _locales_en[text];
        if (translation) {
            return replaceVariables(translation, ...variables);
        }
        return text;
    }
    return "";
}

function replaceVariables(text: string, ...variables: string[]) {
    let replacedText = text;
    variables.forEach((variable, index) => {
        replacedText = replacedText.replace(new RegExp(`{{\\s*${index}\\s*}}`, 'g'), variable);
    });
    return replacedText;
}