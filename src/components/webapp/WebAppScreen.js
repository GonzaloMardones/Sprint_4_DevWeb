import React, { useState } from 'react'
import { WebAppEntries } from './WebAppEntries'
import {useDispatch} from  'react-redux'
import { useSelector } from 'react-redux'
import { startNewNote } from '../../actions/notes'
export const WebAppScreen = () => {

    // const {name} = useSelector(state => state.auth)
    const {active} = useSelector(state => state.notes)
    const dispatch = useDispatch()
    const [body, setBody] = useState('')


    const handleAddNewNote = (e) =>{
        e.preventDefault()
        dispatch(startNewNote(body))
        if(body.trim().length>2){
            setBody('')
        }        
    }

    const handleInputChange = ( e ) =>{
        setBody(e.target.value)
        console.log(body)

    }


    return (
        <div className="webapp__main-content">

            <form 
                className="webapp__main-form"
                onSubmit={handleAddNewNote}
                >
                    <div className="webapp__entry-picture">       
                        <a 
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzkkRrH-rt3lfZU1VIa0dBXVFhPqU77AYaw&usqp=CAU"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzkkRrH-rt3lfZU1VIa0dBXVFhPqU77AYaw&usqp=CAU" width="75" height="75" alt="imagen"/>
                        </a>
                    </div>                                    
                    <input
                        type="text"
                        placeholder="What’s happening?"
                        name="texto"
                        value={body}
                        className="webapp__main-input"
                        autoComplete="off"
                        onChange={handleInputChange}
                    />
                <div></div>
                <div className="webapp__main-content-button">
                    <button
                            type="submit"
                            className="btn btn-primary entry__btn "
                            onClick={handleAddNewNote}
                        >
                            Enter
                        </button>
                        {/* <button
                            type="submit"
                            className="btn btn-primary entry__btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>   */}

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
