//@ts-nocheck
'use client';
import classes from './auth.module.scss';
import TextField from '@/components/common/textField/textField';
import { useState } from 'react';
import httpService from '@/services/http.service';

export default function Auth() {
    const [authData, setAuthData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (target) => {
        setAuthData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('authData', authData);
        try {
            await httpService.post('/api/auth/signUp', authData);
        } catch (e) {
            console.log('Ошибка', e.response.data.error);
        }
    };

    return (
        <div className={classes.authForm}>
            <div className={classes.authForm__container}>
                <form
                    onSubmit={(event) => handleSubmit(event)}
                    className={classes.authForm__form}
                >
                    <div className={classes.authForm__item}>
                        <TextField
                            placeholder="email"
                            value={authData.email}
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.authForm__item}>
                        <TextField
                            placeholder="password"
                            value={authData.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                    <button type={'submit'}>Отправить</button>
                </form>
            </div>
        </div>
    );
}
