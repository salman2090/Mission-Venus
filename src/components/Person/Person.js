import React from 'react';
// import custom stylesheet
import './Person.css';

// import bootstrap stylesheet
import '../Bootstrap/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle, faPhone, faIdCard} from '@fortawesome/free-solid-svg-icons';


const Person = (props) => {
    // destructuring info
    const{name, age, image, position,origin, wage} = props.person;

    // icon info
    const element = <FontAwesomeIcon icon={faPlusCircle} />
    const icon1 = <FontAwesomeIcon icon={faPhone} />
    const icon2 = <FontAwesomeIcon icon={faIdCard} />

    return (
        <div className="person">
            
        {/* Person Details */}

        <CardGroup>
            <Card className="m-3 mt-5 card-bg shadow p-3 mb-5 bg-body rounded">
                <Card.Img variant="top " className="rounded-circle border border-1 border-dark" src={image} />
                <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                   
                    <h5>Age: {age}</h5>
                    <h5>position: {position}</h5>
                    <h5>Origin: {origin}</h5>
                    <h5>Salary: {wage}</h5>
                    <br/>
                        
                    <Button onClick={ () => props.handleAddToList(props.person)} variant="outline-dark" >{element} Add to List</Button>&emsp;&emsp;   
                    <span>{icon1}</span>{' '}&emsp;
                    <span>{icon2}</span>
                         
                </Card.Body>
            </Card>
        </CardGroup>
  
        </div>
    );
};

export default Person;