import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from 'firebase/auth'
import { auth } from '../config';

function Registration(props) {


    // const [provider, setProvider] = useState('')
    // const [profile, setProfile] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [doc, setDoc] = useState('');

    const Naviget = useNavigate()


    const handleLogin = (data) => {
        // const orignalData = { email: 'aushalsavaliya994@gmail.com', password: 'asdfghjkl' }

        // if (data.email === orignalData.email && data.password === orignalData.password) {
        //     localStorage.setItem("Dlogin", JSON.stringify(data));
        //     Naviget('/doctor')
        // }
        // else {
        //     alert("Email and Password Are Wrong!")
        // }
    }


    const signup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log(userCredential);
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        sendEmailVerification(user);
                    } else {

                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Registration</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="col-12 mt-5 mt-lg-0">
                        <form onSubmit={signup} className="php-email-form">

                            <div className="mx-auto col-md-6 form-group mt-3 mt-md-0">
                                <input type="name" className="form-control" name="name" id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}  />
                                <p style={{ color: "red" }}></p>
                            </div>

                            <div className="mx-auto col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <p style={{ color: "red" }}></p>
                            </div>

                            <div className="mx-auto col-md-6 form-group">
                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <p style={{ color: "red" }}></p>
                            </div>

                            <div className="text-center"><button type="submit" >Registration</button></div>

                            <p className='left'>
                                Already have an account? <a href='/auth'>Login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Registration;