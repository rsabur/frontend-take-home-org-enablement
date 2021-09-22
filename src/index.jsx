import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card } from "semantic-ui-react"
import "./styles.css";

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

  const renderEvents = events.map(event => {
    <div key={event.id + event.name}/>
  })
  // console.log(renderEvents)

  return (
    <>
      <div>Working...</div>
      {renderEvents}
    </>
  )
}

const element = <App />
ReactDOM.render(
  element,
  document.getElementById("root-container")
);
