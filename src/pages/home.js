import { useContext } from "react";
import App, { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () =>{
    const { data, isLoading, refetch } = useQuery(['cat'], () => {
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    });

    if (isLoading){
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            <h1>This is the home page and the fact is {data?.fact}</h1>
            <button onClick={refetch}>Update</button>
        </div>

    )
}