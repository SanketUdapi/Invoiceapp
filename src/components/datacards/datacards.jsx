import React from 'react';
import Card from 'react-bootstrap/Card'
import './datacards.css'
import Accordion from 'react-bootstrap/Accordion'

const Datacard = ({ heading, data,bg }) => {
    return ( 
        <div className="container">
            <div className="Heading">{heading}</div>
            <div className="wrapper">
            {data.map((datacard, index) => {
                return(
                    <Accordion>
            <Card className="card" style={{ width: '18rem' }} key={index} bg={bg}>
            <Card.Body>
                <Card.Title>Invoice Subject : {datacard.subject}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">status : Pending</Card.Subtitle>
                <Card.Text>
                {datacard.date}
                </Card.Text>
                <Card.Text>
                {datacard.text}
                </Card.Text>
                <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="acc p-2 text-center accordian-main"
                    >
                      INVOICE DEATAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                        
                        <Card.Text>
                            {datacard.details}
                        </Card.Text>
                    </Accordion.Collapse>
            </Card.Body>
            </Card>
            </Accordion>
                );
            })} 
            </div>
        </div>

     );
}
 
export default Datacard;