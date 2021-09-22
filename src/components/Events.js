import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Events({ id, title, event_start, event_end, image_url, venue }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var eventStart = new Date(event_start)
    var eventEnd = new Date(event_end)

    const eventDate = 


    return (
        <>
            <Card style={{ width: '22rem', margin: '1rem' }} onClick={handleShow}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {eventStart.toDateString()},
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5><strong>Event Details</strong></h5><br />
                    <p>
                        <strong>Date & Time</strong><br />
                        {eventStart.toDateString()} - {eventEnd.toDateString()}<br />
                        {eventStart.toLocaleTimeString('en-US')} - {eventEnd.toLocaleTimeString('en-US')}<br />
                        <br /><strong>Location</strong><br />

                    </p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Events