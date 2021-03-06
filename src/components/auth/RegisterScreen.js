import React from 'react'
import {Link} from 'react-router-dom' 
import { useForm } from '../../hooks/useForm'
import validator from 'validator' 
import {useDispatch, useSelector} from 'react-redux'
import {removeError, setError} from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'


export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const {msgError}= useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        confirm_password: ''

    }) 

    const {name,email,password,confirm_password} = formValues


    const handleRegister = (e) =>{
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
            // console.log("Formulario Correcto")
        }
    }

    const isFormValid = () =>{
        if(name.trim().length === 0){
            dispatch(setError('Name is required ') )
            return false

        }else if(!validator.isEmail(email)){
            dispatch(setError('Email is not valid'))
            return false

        }else if(password !== confirm_password || password.length<5){
             dispatch(setError('Password is incorrect'))
             return false
         }

         dispatch(removeError())
        return true
    }

    return (
        <>
        <h1 className="auth__title">Register</h1>

        <form onSubmit={handleRegister}> 
            
            {
                msgError &&
                (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                )
            }


            <input
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />

            <input
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}                
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value={password}
                onChange={handleInputChange}                
            />   

            <input
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                className="auth__input"
                value={confirm_password}
                onChange={handleInputChange}                
            />   

            <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
            >
                Register
            </button>

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
