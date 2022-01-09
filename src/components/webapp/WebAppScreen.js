import React, { useState } from 'react'
import { WebAppEntries } from './WebAppEntries'
import {useDispatch} from  'react-redux'
import { useSelector } from 'react-redux'
import { startNewNote } from '../../actions/notes'
import Swal from 'sweetalert2'
export const WebAppScreen = () => {

    // const {name} = useSelector(state => state.auth)
    const {active} = useSelector(state => state.notes)
    const dispatch = useDispatch()
    const [body, setBody] = useState('')


    const handleAddNewNote = (e) =>{
        e.preventDefault()
        if(body.trim().length>2){
            dispatch(startNewNote(body))
            setBody('')
        }
        else{
            Swal.fire('Error', "El contenido del mensaje debe ser mayor a dos letras", 'error')
        }
    }

    const handleInputChange = ( e ) =>{
        setBody(e.target.value)
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
                    <div className="webapp-input-card">
                        <input
                            type="text"
                            placeholder="What’s happening?"
                            name="texto"
                            value={body}
                            className="webapp__main-input"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                    </div> 
                    {/* <div className="webapp_input_color-container">
                        <div>
                            <button 
                                className="webapp_input_color-btn" 
                                onClick={handleInputClick}   
                            >
                            Cargar Imagen
                            </button>
                        </div>                                   
                    </div> */}


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
