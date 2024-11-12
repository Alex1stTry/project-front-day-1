import {useNavigate} from "react-router-dom";

import css from './header.module.css'

const Header = () => {
    const nav = useNavigate();

    return (
        <div className={css.Header}>
            <div>
                <button className={css.button} onClick={() => nav('/auth/register')}>Register</button>
                <button className={css.button} onClick={() => nav('/auth/log-in')}>Login</button>
            </div>
        </div>
    );
};

export {Header}