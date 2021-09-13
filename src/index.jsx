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
      .then(eventArr => {
        setEvents(eventArr)
        setIsLoaded(true)
      })
  }, [])

  if (!isLoaded) return <h2>Loading...</h2>
  
  console.log(events)
  // const renderEvents = events.map(event => <Card keys={event.id + event.name} {...event} />)
  return (
    <div>Working...</div>
    // {renderEvents}
  )
}

const element = <App />
ReactDOM.render(
  element,
  document.getElementById("root-container")
);
