import React, { useState, useEffect } from 'react'
import Events from './Events'


function App() {
    const [events, setEvents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/events')
            .then(res => res.json())
            .then(eventsObj => {
                setEvents(eventsObj.events)
                setIsLoaded(true)
            })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>
    console.log(events);

    const renderEvents = events.map(event => <Events key={event.id + event.title} {...event} />)


    return (
        <div className='app'>
            <div className='events'>
                {renderEvents}
            </div>
        </div>
    )
}

export default App;

