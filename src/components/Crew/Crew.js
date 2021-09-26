import React, { useEffect, useState } from 'react';
import './Crew.css';
import Person from '../Person/Person';

const Crew = () => {
    const [persons, setPersons] = useState([]);
    
    useEffect( () => {
        fetch('./persons.JSON')
        .then(res => res.json())
        .then(data => setPersons(data));
    },[]);

    return (
        <div className="crew-container">
            <div className="person-container">
                {
                    persons.map(person => <Person 
                        key = {person.key}
                        person={person}>
                        </Person>)
                }
            </div>
            <div className="cart-container">
                <h3>Cart Summery</h3>
                <h4>Added Person: </h4>
            </div>
        </div>
    );
};

export default Crew;