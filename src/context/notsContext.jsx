import { createContext } from "react";

export const notsContext = createContext();

export const notsContextProvider = ({children}) => {
    return (
        <notsContext.Provider value={{}}>
            {children}
        </notsContext.Provider>
    )
}