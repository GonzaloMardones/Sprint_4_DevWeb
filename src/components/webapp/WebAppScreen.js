import React from 'react'
import { WebAppEntries } from './WebAppEntries'
import {useDispatch} from  'react-redux'
import {startLogout} from '../../actions/auth'
import { useSelector } from 'react-redux'
import { startNewNote } from '../../actions/notes'
export const WebAppScreen = () => {

    const {name} = useSelector(state => state.auth)
    const {active} = useSelector(state => state.notes)


    const dispatch = useDispatch()

    const handleLogout = ( ) =>{
        dispatch(startLogout())
    }


    const handleAddNewNote = (e) =>{
        e.preventDefault()
        dispatch(startNewNote())
    }

    return (
        <div className="webapp__main-content">

            <form 
                className="webapp__main-form"
                onSubmit={handleAddNewNote}
                >
                <div 
                    className="webapp__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzkkRrH-rt3lfZU1VIa0dBXVFhPqU77AYaw&usqp=CAU)'
                    }}
                >
                
                </div>
                <p>{name}</p>
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
                            Enter
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

            {
                (active)
                ? (console.log("selecciono un elemento"))
                : (console.log("no selecciono ningun elemento"))
            }
            <WebAppEntries/>
        </div>
    )
}
