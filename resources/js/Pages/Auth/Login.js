import React, { useEffect, useState } from 'react';
import Checkbox from '../../Components/Checkbox';
import Guest from '../../Layouts/Guest';
import Input from '../../Components/Input';
import Label from '../../Components/Label';
import { useForm } from '@inertiajs/inertia-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [loggedUser, setLoggedUser] = useState(null)

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const onUserLog = () => { 
        // Create an object of formData 
        const formData = new FormData(); 

        // Update the formData object 
        formData.append('email', data.email );
        formData.append('password', data.password );

        // Request made to the backend api 
        // Send formData object 
        
        axios.get(`/api/authuser/${localStorage.getItem('user')}`)
        .then(res => {
            localStorage.setItem('loggedUser', JSON.stringify(res.data[0]))
            setLoggedUser(localStorage.getItem('loggedUser'))
        })
        .catch(error => {
            console.log(error)
        })

        axios.post(`api/login`, {formData})
        .then(function (response) {
                
            }
        )
        .catch(function (err) {
            console.log(err)
        })
        handleClick()
    };

    function handleClick() {
        if(localStorage.getItem('user') === 'admin@app.com'){
            navigate('/dashboard')
        }else{
            navigate('/')
        }
    }

    useEffect(() => {
        localStorage.setItem('user', data.email)
        localStorage.setItem('loggedUser', loggedUser)
    },[data.email])

    // useEffect(() => {
    //     axios.get(`/api/authuser/${localStorage.getItem('user')}`)
    //     .then(res => {
    //         console.log(res.data[0])
    //     })
    // })

    return (
        <Guest>
            <form method='post' action='api/login' encType="multipart/form-data">
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <Link className='text-black' to={'/register'}>
                        Register
                    </Link>
                    {
                        data.email &&
                        <button type='submit' onClick={onUserLog}>
                            Log in
                        </button>
                    }
                </div>
            </form>
        </Guest>
    );
}
