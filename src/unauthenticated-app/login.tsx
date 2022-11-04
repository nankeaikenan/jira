import React, { FormEvent } from 'react';
import { useAuth } from '../context/auth-context';

export const Login = () => {
    const {login} = useAuth()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[0] as HTMLInputElement).value;
        login({username, password})
    };
    return (
    <form onSubmit={handleSubmit}> 
        <div>
            <label htmlFor='username'>用户名</label>
            <input type='text' id='username' defaultValue='jiracj'/>
        </div>
        <div>
            <label htmlFor='password'>密码</label>
            <input type='password' id='password' defaultValue='jiracj'/>
        </div>
        <button type='submit'>登录</button>
    </form>
    );
};