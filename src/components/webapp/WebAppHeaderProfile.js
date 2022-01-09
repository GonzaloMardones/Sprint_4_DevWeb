import React from 'react'
import {useDispatch} from  'react-redux'
import {startLogout} from '../../actions/auth'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { WebAppProfileScreen } from './WebAppProfileScreen'

export const WebAppHeaderProfile = () => {

    const dispatch = useDispatch()
    const {name} = useSelector(state => state.auth)    
    const handleLogout = ( ) =>{
        dispatch(startLogout())
    }
    
   
    return (
        <header>
            <div className="header-container">
            {/* <p>{name}</p>  */}
            <div className="webapp__entry-picture">    
            <Link 
                to="/"
                className="link"
            >    
                <p className="header-enlace"> Home - {name} </p>
            </Link>            
               
          
            </div>   
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
