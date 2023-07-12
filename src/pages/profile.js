import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react";
import App, { AppContext } from "../App";

export const Profile = () =>{
    const { user } = useContext(AppContext);

    return (
    <div>
        This is the profile page for {user}
        <ChangeProfile />
    </div>
    )
}