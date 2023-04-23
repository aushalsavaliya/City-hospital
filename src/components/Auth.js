import React, { useCallback, useState } from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { signInWithPopup, } from 'firebase/auth';
import { auth, provider } from '../config';

function Auth(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Naviget = useNavigate()
    
    const handleLogin = (data) => {
        const orignalData = ([])

        if (data.email === orignalData.email && data.password === orignalData.password) {
            localStorage.setItem("Dlogin", JSON.stringify(data));
            Naviget('/doctor')
        }
        // else {
        //     alert("Email and Password Are Wrong!")
        // }

    }

    const Hendal = async () => {
        try {
            const data = await signInWithPopup(auth, provider)
            localStorage.setItem("Dlogin", JSON.stringify(data));
            Naviget('/Medicine')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Login</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="col-12 mt-5 mt-lg-0">
                        <div className='button-GoogleLoginButton'>
                            <GoogleLoginButton onClick={Hendal} />
                        </div>
                            <form onSubmit={login} className="php-email-form">

                                <div className="mx-auto col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <p style={{ color: "red" }}></p>
                                </div>

                                <div className="mx-auto col-md-6 form-group">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" ></input>
                                    <p style={{ color: "red" }}></p>
                                </div>

                                <div className="text-center"><button type="submit">Login</button></div>
                                <p className='left'>
                                    Don't have an account? <a href='/registration'>Registration</a>
                                </p>
                            </form>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Auth;

