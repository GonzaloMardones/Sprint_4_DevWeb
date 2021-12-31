import React from 'react'
import { WebAppEntries } from './WebAppEntries'
import {useDispatch} from  'react-redux'
import {startLogout} from '../../actions/auth'
export const WebAppScreen = () => {


    const dispatch = useDispatch()

    const handleLogout = ( ) =>{
        dispatch(startLogout())
    }

    return (
        <div className="webapp__main-content">

            <form className="webapp__main-form">
            <div 
                className="webapp__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzkkRrH-rt3lfZU1VIa0dBXVFhPqU77AYaw&usqp=CAU)'
                }}
            >
            </div>
                <input
                    type="text"
                    placeholder="Text"
                    name="texto"
                    className="webapp__main-input"
                    autoComplete="off"
                />
            
            <div className="webapp__main-content-button">
                <button
                        type="submit"
                        className="btn btn-primary entry__btn"
                        // disabled={true}
                    >
                        Login
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary entry__btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>                    
            </div>

            </form>

                {/* <div>
                    <h1>Main Content</h1>
                </div>

                <div className="webapp__new-entry">
                    <i className="far fa-calendar-plus fa-5x"></i>
                    <p className="mt-5">
                        New entry
                    </p>
                </div> */}
            <WebAppEntries/>
        </div>
    )
}
