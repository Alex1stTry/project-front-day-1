import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {Box, Button, TextField} from "@mui/material";

import {IUser} from "../../interfaces/user-interface";
import {authService} from "../../services/authService";
import {userValidator} from "../../validators/userValidator";
import css from './registerForm.module.css'

const RegisterForm = () => {
    const {register, formState: {isValid}, handleSubmit} = useForm<IUser>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });
    const save = async (user: IUser) => {
        console.log(user)
        await authService.register(user)
    }
    return (

        // <form onSubmit={handleSubmit(save)}>
        //     <input type={'text'} placeholder={'name'}{...register('name')}/>
        //     <input type={'text'} placeholder={'email'}{...register('email')}/>
        //     <input type={'text'} placeholder={'password'}{...register('password')}/>
        //     <button disabled={!isValid}>save</button>
        // </form>
        <Box
            component="form"
            onSubmit={handleSubmit(save)}
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <div className={css.Form}>
                <TextField
                    label="Name"
                    id="outlined-size-small"
                    defaultValue="John"
                    size="small"
                    {...register('name')}
                /> <TextField
                label="Email"
                id="outlined-size-small"
                defaultValue="testemail@gmail.com"
                size="small"
                {...register('email')}
            /> <TextField
                label="Password"
                id="outlined-size-small"
                defaultValue="Password1!"
                size="small"
                {...register('password')}
            />
                <button disabled={!isValid}>save</button>
            </div>
        </Box>
    );
};

export {
    RegisterForm
};