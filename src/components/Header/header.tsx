import {useNavigate} from "react-router-dom";

import css from './header.module.css'

const Header = () => {
    const nav = useNavigate();

    return (
        <div className={css.Header}>
           <button className={css.button} onClick={()=>nav('/auth/register')}>Register</button>
        </div>
    );
};

export {Header}