import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const CityInput = ({city,setCity,fetchCityWeater}) => {
    
    const [error,setError] = useState("");
    const handleInputChange = (event) =>{
        setCity(event.target.value);
    }
    const handleClick =()=>{
        if(!city)
            setError("City field is empty")
        else
        fetchCityWeater();
    }
    return (
        <div>
            {console.log(city)}
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" onChange={handleInputChange}/>
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button variant="primary" onClick={handleClick}>Submit</Button>
                </Form>
            </Container>
        </div>
    );
};

export default CityInput;