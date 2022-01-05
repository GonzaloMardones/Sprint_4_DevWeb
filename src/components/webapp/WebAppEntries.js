import React from 'react'
import { useSelector } from 'react-redux'
import { WebAppEntry } from './WebAppEntry'

export const WebAppEntries = () => {

    const {notes} = useSelector(state => state.notes)

    return (
        <div className="webapp__entries">
            {
                notes.map( note =>(
                    <WebAppEntry 
                        key={note.id}
                        {...note}
                    />
                    
                ))
            }
        </div>
    )
}
