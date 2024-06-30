import { createContext, useReducer } from "react";
export const themeContect = createContext();

function Reducer(state, action){
    switch(action.type){
        case "DARK":
            return {...state , theme : "dark"};
        case "LIGHT":
            return {...state, theme : "light"};
        default:
            return state;
    }

}

const initialState = {theme : "light"};

function ThemeContextProvider ({children}){
    const [themeState, dispatch] = useReducer(Reducer, initialState);
    return(
        <themeContect.Provider value={{themeState, dispatch}}>
            {children}
        </themeContect.Provider>
    )
}

export default ThemeContextProvider;