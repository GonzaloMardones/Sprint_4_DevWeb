import React from 'react'
import { WebAppEntry } from './WebAppEntry'

export const WebAppEntries = () => {
    const entries  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    return (
        <div className="webapp__entries">
            {
                entries.map( value =>(
                    <WebAppEntry key={value}/>
                ))
            }
        </div>
    )
}
