import { createContext, useContext, useReducer } from "react";
import { notsReducer } from "../reducers/notsReducers";

export const NotsContext = createContext();

const NotsContextProvider = ({ children }) => {

    const initialState = {
            text: "",
            title: "",
            notes: [],
        };
    
        const [{ text, title, notes }, notesDispatch] = useReducer(
            notsReducer,
            initialState
        );
    return (
        <NotsContext.Provider value={{ text, title, notes,notesDispatch}}>
            {children}
        </NotsContext.Provider>
    )
}


const useNots = () => useContext(NotsContext);
export { useNots, NotsContextProvider };