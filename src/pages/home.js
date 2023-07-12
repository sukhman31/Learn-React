import { useContext } from "react";
import App, { AppContext } from "../App";

export const Home = () =>{
    const { user } = useContext(AppContext);
    return <h1>This is the home page for {user}</h1>
}