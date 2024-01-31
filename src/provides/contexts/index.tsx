import React, { createContext, useReducer, Dispatch } from "react";
import { defaultValue, defaultValueType } from "./default";

type ActionType = {
   type: string;
   payload: "dark" | "light";
};

type ContextValueType = {
   state: defaultValueType;
   dispatch: Dispatch<ActionType>; 
};

export const AppContext = createContext<ContextValueType>({
   state: {
      theme: "light"
   },
   dispatch: () => {}
});

const reducer = (state: defaultValueType, action: ActionType): defaultValueType => {
   switch (action.type) {
      case "setTheme": {
         return {
            ...state,
            theme: action.payload
         };
      }
      case "reset":
         return defaultValue;
      default:
         throw new Error("No action");
   }
};

type Props = {
   children?: React.ReactNode;
};

export const AppContextProvider: React.FC<Props> = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, defaultValue);
   const value: ContextValueType = { state, dispatch }; // Corrected the property name to 'dispatch'

   return (
      <AppContext.Provider value={value}>
         {children}
      </AppContext.Provider>
   );
};
