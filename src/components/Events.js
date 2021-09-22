import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function Events({ id, title, event_start, event_end, image_url, venue }) {


    return (
            <Card>
                <Image src={image_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>title</Card.Header>
                    <Card.Meta>
                        <span className='date'>{event_start}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
    )
}

export default Events