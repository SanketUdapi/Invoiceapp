import React from 'react';
import {Form,Button,Col} from 'react-bootstrap';
import './form.css'


const MyForm = () => {
  
 


    return ( 
      <div className=" cont">
        <h1 className="pro pt-3 text-center font-details-b pb-3">Enter Invoice Details Here</h1>
        <Form className="formcont " >
            <Form.Group >
              <Form.Label>Email address</Form.Label>
              <Form.Control className="shad" type="email"  placeholder="name@example.com"  />
            </Form.Group>
            <Form.Group >
              <Form.Label>What is the invoice in respect to?</Form.Label>
              <Form.Control  className="shad" type="text" placeholder="eg - Science Lab invoice" />
            </Form.Group>
            <Form.Group >
          <Form.Row>
        <Form.Group as={Col} md="8" xs="8" >
          <Form.Label>Reason </Form.Label>
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="eg-Materials"  
          /> 
        </Form.Group>
        <Form.Group as={Col} md="4"  xs="4">
          <Form.Label>Expenditure</Form.Label>
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="eg-10,000"

          />  
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="8" xs="8" >
          
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="..."
            
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" xs="4" >
          
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="$"
          
          />
          
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="8" xs="8" >
          
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="..."
            
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" xs="4" >
          
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="$"
          
          />
          
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="8" xs="8">
          
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="..."
            
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4"  xs="4" controlId="validationCustom02">
          
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="$"
          
          />
          
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="8" xs="8">
          
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder="Total"
            disabled
            
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" xs="4" >
          <Form.Control
            className="shad"
            required
            type="text"
            placeholder=""
            disabled
          
          />
          
        </Form.Group>
      </Form.Row>
            </Form.Group>
            <Form.Group >
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control  className="shad" type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
            <Form.Group >
              <Form.Label>Notes</Form.Label>
              <Form.Control className="shad" as="textarea" placeholder="eg-how to pay ,where to send etc" rows={3} />
            </Form.Group>
            <Button className="buttonsub" varient="dark" type="submit" >
             Submit
            </Button>
        </Form>
        </div>
        
    );
}
 
export default MyForm;