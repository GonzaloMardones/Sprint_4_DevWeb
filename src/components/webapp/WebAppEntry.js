import React from 'react'
import moment from 'moment'

export const WebAppEntry = ({id, username, date, body, url, likes}) => {

    const noteDate = moment(date)

    return (
        <div className="webapp__entry pointer">
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
                    {username} - <span>{noteDate.format("L") }</span> 
                </p>
                {/* <p className="webapp__entry-title">
                    {title} 
                </p> */}

                <p className="webapp__entry-content">
                    {body}
                </p>                
            </div>
            {/* <div className="webapp__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div> */}
        
        </div>
    )
}
