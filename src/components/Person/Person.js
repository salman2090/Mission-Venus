import React from 'react';
import './Person.css';
import '../Bootstrap/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const Person = (props) => {
    console.log(props.person)
    const{name, age, image, position,origin, wage} = props.person;
    return (
        <div className="person">
            {/* <h1>I'm a person</h1>
            <h4>{name}</h4>
            <img src={image} alt="" /> */}
            
        <CardGroup>
            <Card className="m-3 mt-5 rounded">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                   
                    <h5>Age: {age}</h5>
                    <h5>position: {position}</h5>
                    <h5>Origin: {origin}</h5>
                    <h5>Salary: {wage}</h5>
                    <br/>
                        
                    <Button variant="outline-dark">Secondary</Button>{' '}             
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
  
        </div>
    );
};

export default Person;