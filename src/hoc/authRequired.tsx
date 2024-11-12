import {FC, PropsWithChildren} from "react";
import {authService} from "../services/authService";
import {useNavigate} from "react-router-dom";

export interface IProps extends PropsWithChildren {

}

const AuthRequired: FC<IProps> = ({children}) => {
    const access = authService.getAccess()
    const nav = useNavigate();
    if (!access) {
        nav('/auth')
    }

    return (
        <div>
            {children}
        </div>
    );
};

export {AuthRequired};