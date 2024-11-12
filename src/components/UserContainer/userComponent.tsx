import {useEffect, useState} from "react";
import {authService} from "../../services/authService";
import {MeComponent} from "./meComponent";

const UserComponent = () => {
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        authService.me().then((data) => setUser(data))
    }, []);

    return (
        <div>
            {user && <MeComponent user={user}/>}
        </div>
    );
};

export {UserComponent};