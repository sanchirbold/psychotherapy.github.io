import React, { useEffect } from 'react';
import Guest from '../../Layouts/Guest';
import Input from '../../Components/Input';
import Label from '../../Components/Label';
import { useForm } from '@inertiajs/inertia-react';
import { Link } from 'react-router-dom';

export default function Register() {
    const { data, setData, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const onFileUpload = () => { 
        // Create an object of formData 
        const formData = new FormData(); 

        // Update the formData object 
        formData.append('name', data.name);
        formData.append('email', data.email );
        formData.append('password', data.password );
        formData.append('password_confirmation', data.password_confirmation );

        // Request made to the backend api 
        // Send formData object 
        axios.post('api/register', {formData})
        .then(function (response) {
                
            }
        )
        .catch(function (err) {
            console.log(err)
        })
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    return (
        <Guest>

            <form method='post' action="api/register" encType="multipart/form-data">
                <div>
                    <Label forInput="name" value="Name" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link to={'/login'} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <button type="submit" onClick={onFileUpload} className="ml-4" >
                        Register
                    </button>
                </div>
            </form>
        </Guest>
    );
}
