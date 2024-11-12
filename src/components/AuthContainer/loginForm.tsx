import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services/authService";
import css from './registerForm.module.css'
import {ILogIn} from "../../interfaces/log-in.interface";
import {authValidator} from "../../validators/authValidator";

const LoginForm = () => {
    const {register, formState: {isValid}, handleSubmit} = useForm<ILogIn>({
        mode: 'all',
        resolver: joiResolver(authValidator)
    });
    const nav = useNavigate();

    const save = async (auth: ILogIn) => {
        try {
            await authService.logIn(auth)
            nav('/user')
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(save)}
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
                marginTop: '40px'
            }}
            noValidate
            autoComplete="off"
        >
            <div className={css.Form}>
                <TextField
                    label="Email"
                    id="outlined-size-small"
                    size="small"
                    {...register('email')}
                /> <TextField
                label="Password"
                id="outlined-size-small"
                size="small"
                {...register('password')}
            />
                <Button type={'submit'} disabled={!isValid} variant="contained">Login</Button>
            </div>
        </Box>
    );
};

export {
    LoginForm
};