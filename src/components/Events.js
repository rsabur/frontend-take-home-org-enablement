import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Events({ id, title, event_start, event_end, image_url, venue, description }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var eventStart = new Date(event_start)
    var eventEnd = new Date(event_end)

    const handleShowDetails = () => {
        if (venue === null) return 'TBD'
        else {
            for (var propName in venue) {
                if (venue[propName] === null) {
                    delete venue[propName]
                }
                return Object.values(venue).slice(0, 6).join(" ")
            }
        }
    }

    // const handleShowDate = () => {
    //     if(eventStart.toDateString() === eventEnd.toDateString()) return eventStart.toDateString()
    //     else return eventStart.toDateString() - eventEnd.toDateString()
    // }

    const handleShowEventLocation = () => {
        if (venue === null) return 'TBD'
        else return venue.city
    }
console.log(description);
    return (
        <>
            <Card style={{ width: '22rem', margin: '1rem' }} onClick={handleShow}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {eventStart.toDateString()}, {handleShowEventLocation()}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5><strong>Event Details</strong></h5><br />
                    <strong>Date & Time</strong><br />
                    {eventStart.toDateString()} - {eventEnd.toDateString()}<br />
                    {eventStart.toLocaleTimeString('en-US')} - {eventEnd.toLocaleTimeString('en-US')}<br />
                    <br /><strong>Location</strong><br />
                    {handleShowDetails()}<br />
                    <hr />
                    <strong>Description</strong>
                    {description}

                </Modal.Body>
            </Modal>
        </>
    )
}

export default Events