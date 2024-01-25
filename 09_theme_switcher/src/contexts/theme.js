import { createContext, useContext } from "react";

//this file is compressing what was used in the previous project into a single file
export const ThemeContext = createContext({
    //setting default values / defining objects that we instantiate later
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider // creating some variables to simplify expressions

// creating this hook to shorten the "import *Context, useContext(*Context) lines from before"
export default function useTheme(){ // ide
    return useContext(ThemeContext)
}