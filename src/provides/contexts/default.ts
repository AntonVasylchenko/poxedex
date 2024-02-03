import { getLocalStorage } from "../../utils/utils"



export type defaultValueType = {
   theme: string
}

export const defaultValue:defaultValueType = {
   theme: getLocalStorage("theme","light")
}