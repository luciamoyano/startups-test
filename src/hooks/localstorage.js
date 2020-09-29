export const useLocalStorage = () => {
    // leer el valor de , parsear a json,pushear, pasar a string y guardar
    const setLocalStorage = (fields) => {
        const key = JSON.stringify(fields.email);
        const value = JSON.stringify(fields);
        localStorage.setItem(key, value);
    } 

    const getLocalStorage = () => {
        const dataStored = {...localStorage};
        const startupsListStringed = Object.values(dataStored)
        const startupList = startupsListStringed.map((item)=>{
            return JSON.parse(item)
        });
        return startupList
    };
    
    return [getLocalStorage, setLocalStorage];
};
