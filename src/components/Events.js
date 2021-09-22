import React from 'react'

function Events({id, title, event_start, event_end, image_url, venue}) {
    
    
    return (
        <div className='event-card'>
            {title}
        </div>
    )
}

export default Events