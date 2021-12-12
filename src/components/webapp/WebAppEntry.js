import React from 'react'

export const WebAppEntry = () => {
    return (
        <div className="webapp__entry pointer">
            <div 
                className="webapp__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzkkRrH-rt3lfZU1VIa0dBXVFhPqU77AYaw&usqp=CAU)'
                }}
            >
            </div>

            <div className="webapp__entry-body">
                <p className="webapp__entry-title">
                    USERNAME - <span>Monday</span>
                </p>
                <p className="webapp__entry-content">
                    Lorem ipsum
                </p>                
            </div>
            {/* <div className="webapp__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div> */}
        
        </div>
    )
}
