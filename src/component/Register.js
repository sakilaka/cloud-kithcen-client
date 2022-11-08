import React, { useContext, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';

const Register = () => {


    const auth = getAuth();
    const navigate = useNavigate();
    const { signUpWithEmailPass } = useContext(AuthUserContext);
    const [success, setSuccess] = useState(false);

    const handleEmailPassRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        signUpWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                form.reset();
                updateUser(name, photoURL);
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    const updateUser = (name, photoURL) => {

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="hero container mx-auto border border-white p-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-green-400">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Please register for more Features and Order food and also review and subscribe my channel.</p>
                    </div>
                    <form onSubmit={handleEmailPassRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {success && <p className='text-green-400 text-xl my-2'>Register Successfully.</p>}
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-warning">Register</button>
                            </div>
                            <p className="text-xs text-white my-2 sm:text-sm">
                                Already Sign Up?please <Link className='font-bold text-purple-400' to='/login'>Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;