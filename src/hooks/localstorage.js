export const useLocalStorage = () => {
    // leer el valor de , parsear a json,pushear, pasar a string y guardar
    const setLocalStorageconst = (fields) => {
        const key = JSON.stringify(fields.email);
        const value = JSON.stringify(fields);
        localStorage.setItem(key, value);
    } 
    return setLocalStorageconst;
};