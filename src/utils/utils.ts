export const setLocalStorage = ( key: string, value: string |  number): void => {
   localStorage.setItem(key, typeof value === "number" ? JSON.stringify(value) : value)
}
export const getLocalStorage = ( key: string, defaultValue: string): string => {
   const value = localStorage.getItem(key)
   if (value) {
      return value
   }
   return defaultValue
}