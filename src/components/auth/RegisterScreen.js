import React from 'react'
import {Link} from 'react-router-dom' 

export const RegisterScreen = () => {
    return (
        <>
        <h1 className="auth__title">Register</h1>

        <form>
            <input
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
            />

            <input
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
            />   

            <input
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                className="auth__input"
            />   

            <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
                // disabled={true}
            >
                Login
            </button>

            {/* <div className="auth__social-networks">
                <p>Login with social networks</p>
                <div 
                    className="google-btn"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div> */}

            <Link 
                to="/auth/login"
                className="link"
            >
                Already registered?
            </Link>

        </form>
    </>
    )
}
