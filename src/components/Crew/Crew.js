import React, { useEffect, useState } from 'react';
// import custom stylesheet
import './Crew.css';

// import other component files
import Person from '../Person/Person';
import List from '../List/List';


const Crew = () => {

    // set informations
    const [persons, setPersons] = useState([]);
    const [list, setList] = useState([]);

    // data load
    useEffect( () => {
        fetch('./persons.JSON')
        .then(res => res.json())
        .then(data => setPersons(data));
    },[]);

    // button event-listner
    const handleAddToList = person => {
        const updatedList = [...list, person];
        setList(updatedList);
        
    }

    return (
    // info sending
        <div className="crew-container">
            <div className="person-container">
                {
                    persons.map(person => <Person 
                        key = {person.key}
                        person={person}
                        handleAddToList = {handleAddToList}
                        >
                        </Person>)
                }
            </div>
            <div className="cart-container">
                <List list={list}></List>
            </div>
        </div>
    );
};

export default Crew;