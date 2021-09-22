import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Events from './Events'


function App() {
    const [events, setEvents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [pageNum, setPageNum] = useState(1) 

    useEffect(() => {
        fetch(`http://localhost:3000/events?page=${pageNum}`)
            .then(res => res.json())
            .then(eventsObj => {
                setEvents(eventsObj.events)
                setIsLoaded(true)
            })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>
    // console.log(events);

    const renderEvents = events.map(event => <Events key={event.id + event.title} {...event} />)

    const loadMoreEvents = () => {
        console.log('loading...')
    }

    return (
        <div className='app'>
            <div className='events'>
                {renderEvents}
            </div>
            <div className='button'>
                <Button
                    variant='secondary'
                    onClick={() => loadMoreEvents()}>
                        Load More
                </Button>
            </div>
        </div>
    )
}

export default App;

