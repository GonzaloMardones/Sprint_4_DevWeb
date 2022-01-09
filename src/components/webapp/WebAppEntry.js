import React from 'react'
import moment from 'moment'
import {useDispatch} from  'react-redux'
import { activeNote } from '../../actions/notes'
import { useSelector } from 'react-redux'

export const WebAppEntry = ({id, username, date, body, url, likes}) => {

    const dispatch = useDispatch()
    const noteDate = moment(date)
    const {name} = useSelector(state => state.auth)

    const handleEntryClick = ()=>{
        dispatch(
                activeNote(id,{
                    date, body, url
                }))
    }

    return (
        <div className="webapp__entry pointer"
             onClick={handleEntryClick}
        >
           {
            url &&
            <div 
                    className="webapp__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                >
            
                </div>
            }

            <div className="webapp__entry-body">
                <p className="webapp__entry-title">
                    {name} - <span>{noteDate.format("L") }</span> 
                </p>
                <p className="webapp__entry-content">
                    {body}
                </p>                
            </div>
            <i 
                className="fa fa-remove"
                // name={category}
                // onClick ={handleRemoveItem}    
            ></i>
        </div>
    )
}
