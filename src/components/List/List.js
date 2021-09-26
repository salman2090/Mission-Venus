import React from 'react';

// custom stylesheet
import './List.css'

// bootstrap Stylesheet
import '../Bootstrap/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const List = (props) => {
    const {list} = props;

    let total = 0;
    let name = [];

    for(const person of list) {
        total = total + person.wage;
        name.push(person.name);
    }

    return (
        // Listed data display
        <section className="list-body">
            <div>
            <h1 className="mt-5">List Overview</h1>
            <Card className="mt-5 ms-3" style={{ width: '18rem' }}>
            <Card.Body>
                <h4>Person Count: {props.list.length}</h4>
                <h4 className="mb-2 text-muted">Total Wages: {total}</h4>
            </Card.Body>
            </Card>
            </div>

            <div>
            <Card className="mt-5 ms-3" style={{ width: '18rem' }}>
            <Card.Body>
                <h4>Added Persons: </h4>               
                <ul>
                {
                    name.map(name => (
                        <li className="fs-5 text-danger">{name}</li>
                    )            
                )
                }
                </ul>       
            </Card.Body>
            </Card>
             </div>
        </section>
    );
};

export default List;