import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Events from './components/Events'


function App() {
    const [events, setEvents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:3000/events?page=${currentPage}`)
            .then(res => res.json())
            .then(eventsObj => {
                setEvents(eventsObj.events)
                setIsLoaded(true)
            })
    }, [currentPage])

    if (!isLoaded) return <h2>Loading...</h2>

    const renderEvents = events.map(event => <Events key={event.id + event.title} {...event} />)

    const handleChangePage = () => {
        if (currentPage <= 1) {
            return <Button
                style={{ margin: '5px' }}
                variant='outline-primary'
                onClick={() => setCurrentPage(currentPage + 1)}>
                Next
            </Button>
        } else if (currentPage === 2) {
            return <Button
                style={{ margin: '5px' }}
                variant='outline-primary'
                onClick={() => setCurrentPage(currentPage - 1)}>
                Back
            </Button>
        }
    }

    return (
        <div className='app'>
            <div className='events'>
                {renderEvents}
            </div>
            <div className='button'>
                {handleChangePage()}
            </div>
        </div>
    )
}

export default App;

