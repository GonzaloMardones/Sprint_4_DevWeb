import React from 'react'
import {useDispatch} from  'react-redux'
import {startLogout} from '../../actions/auth'

export const WebAppHeader = () => {

    const dispatch = useDispatch()

    const handleLogout = ( ) =>{
        dispatch(startLogout())
    }
    

    return (
        <header>
            <p>Header</p> 
            <button
                type="submit"
                className="btn btn-primary entry__btn"
                onClick={handleLogout}
            >
                Logout
            </button>              
        </header>
    )
}
