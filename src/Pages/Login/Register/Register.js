import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div>

            <form onSubmit={handleRegister} className='register-form'>

                <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />

                <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;