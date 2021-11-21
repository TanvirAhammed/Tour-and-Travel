import React from 'react';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className='pt-5'>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


        </div>
    );
};

export default Login;