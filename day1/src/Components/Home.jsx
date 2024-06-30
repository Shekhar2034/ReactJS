import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import { themeContect } from "./theme/theme.context";


function Home(){
    
   const{state} = useContext(AuthContext);
   const {themeState, dispatch} = useContext(themeContect);
    return(
        <div style={{
            backgroundColor : themeState?.theme === "light" ? "Green" : "blue",
        }}>
            <h1>Home : {state?.user?.name}</h1>
            <button onClick={
                () => dispatch({type : themeState?.theme === "light" ? "DARK" : "LIGHT"})
            }>Change {themeState?.theme === "light" ? "light" : "dark"} theme</button>
        </div>

    )
}

export default Home;