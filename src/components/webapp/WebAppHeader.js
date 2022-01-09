import React from 'react'
import {useDispatch} from  'react-redux'
import {startLogout} from '../../actions/auth'
import { useSelector } from 'react-redux'

export const WebAppHeader = () => {

    const dispatch = useDispatch()
    const {name} = useSelector(state => state.auth)    
    const handleLogout = ( ) =>{
        dispatch(startLogout())
    }
    


    return (
        <header>
            <div className="header-container">
            <p>{name}</p> 
            <button
                type="submit"
                className="btn btn-primary entry__btn"
                onClick={handleLogout}
            >
                Logout
            </button>              
            </div>

        </header>
    )
}
