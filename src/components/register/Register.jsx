import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
    }

    /**
     * 
     * @param {*} event
     * Stores user input as a state depending on form input identification  
     */
    
    const handleChange = (event) => {
        switch(event.target.id) {
            case 'formName':
                setName(event.target.value);
                break;
            case 'formSurname':
                setSurname(event.target.value);
                break;
            case 'formEmail':
                setEmail(event.target.value);
                break;
            default:
                break;
        }
    }

  return (
        <Form onSubmit={(e) => submitForm(e)}>
        {/* User name input */}
        <Form.Group className='mb-3' controlId='formName'>
            <Form.Label>
                Unesite ime:   
            </Form.Label>
            <Form.Control required onChange={e => handleChange(e)} value={name} type="text" minLength={3} maxLength={25} placeholder="Primjer: Pero" />
        </Form.Group>

        {/* User surname input */}
        <Form.Group className='mb-3' controlId='formSurname'>
            <Form.Label>
                Unesite prezime:   
            </Form.Label>
            <Form.Control required onChange={e => handleChange(e)} value={surname} type="text" minLength={3} maxLength={50} placeholder="Primjer: Perić" />
        </Form.Group>

        {/* User email input */}
        <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>
                Unesite email:   
            </Form.Label>
            <Form.Control required onChange={e => handleChange(e)} value={email} type="email" minLength={3} maxLength={100} placeholder="Primjer: pero.peric@gmail.com" />
        </Form.Group>

        {/* Terms and service */}
        <Form.Group className='mb-3' controlId='formTerms'>
            <Form.Check required type='checkbox' label="Slažem se s uvjetima pružanja usluga" />
        </Form.Group>

        {/* Submit button */}
        <div className='text-center'>
            <Button className='text-center' variant='primary' type='submit'>
                Registriraj me!
            </Button>
        </div>
    </Form>
  )
}

export default Register