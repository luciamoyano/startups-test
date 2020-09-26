export const useValidate = (fields, requiredFields) => {
    const errors = requiredFields.filter((field) => {
        // si el valor de field (cada propiedad del objeto data) no existe O
        // O si l valor de field (fields.'name' o fields.'email' etc) esta vacio
        if (!fields[field] || fields[field].length <= 0) {
            return field
        }
    })
    //devuelve array con errores
    return errors
}
