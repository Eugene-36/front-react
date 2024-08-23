import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set configurations
    const configuration = {
      method: 'post',
      url: 'http://localhost:3000/api/register',
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then(() => {
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant='primary'
          type='submit'
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
      {register ? (
        <p className='text-success'>You Are Registered Successfully</p>
      ) : (
        <p className='text-danger'>You Are Not Registered</p>
      )}
    </>
  );
};
