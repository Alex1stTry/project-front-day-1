import {FC} from "react";
import { makeStyles } from '@mui/styles';

import css from './me.module.css'
import {IUser} from "../../interfaces/user-interface";

interface IProps {
    user: {
        data: IUser
    }
}

const useStyles = makeStyles({
    meContainer: {
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-start',
        fontFamily: 'Roboto, sans-serif',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
    text: {
        fontSize: '16px',
        color: '#555',
    },
});
const MeComponent: FC<IProps> = ({user}) => {
    const {id, name, email} = user.data;

    const classes = useStyles();
    return (
        <div className={classes.meContainer}>
            <div className={classes.title}>MyAccount</div>
            <div className={classes.text}>id: {id}</div>
            <div className={classes.text}>name: {name}</div>
            <div className={classes.text}>email: {email}</div>
        </div>
    );
};

export {MeComponent};