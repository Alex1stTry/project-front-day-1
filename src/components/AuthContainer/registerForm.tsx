import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {Box, Button, TextField} from "@mui/material";

import {IUser} from "../../interfaces/user-interface";
import {userValidator} from "../../validators/userValidator";
import css from './registerForm.module.css'
import {useNavigate} from "react-router-dom";
import {authService} from "../../services/authService";

const RegisterForm = () => {
    const {register, formState: {isValid}, handleSubmit} = useForm<IUser>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });
    const nav = useNavigate()
    const save: SubmitHandler<IUser> = async (user: IUser) => {
        try {
            await authService.register(user)
            nav('/auth/log-in')
        } catch (e) {
            console.log(e)
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
                    label="Name"
                    id="outlined-size-small"
                    size="small"
                    {...register('name')}
                /> <TextField
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
                <Button type={'submit'} disabled={!isValid} variant="contained">Register</Button>
            </div>
        </Box>
    );
};

export {
    RegisterForm
};