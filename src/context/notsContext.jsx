import { createContext, useContext, useReducer } from "react";
import { notsReducer } from "../reducers/notsReducers";

export const NotsContext = createContext();

const NotsContextProvider = ({ children }) => {

    const initialState = {
        text: "",
        title: "",
        notes: [],
        archive: [],
        bin: [],
        important: []
    };
    
        const [{ text, title, notes ,archive,bin,important}, notesDispatch] = useReducer(
            notsReducer,
            initialState
    );
    
    console.log("archive",archive);
    console.log("notes",notes);
    
    return (
        <NotsContext.Provider value={{ text, title, notes,archive,bin,important,  notesDispatch}}>
            {children}
        </NotsContext.Provider>
    )
}


const useNots = () => useContext(NotsContext);
export { useNots, NotsContextProvider };