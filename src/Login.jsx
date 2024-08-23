import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleLogin = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    const configuration = {
      method: 'post',
      url: 'http://localhost:3000/api/login',
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        console.log('result', result);
        setLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h2>Login</h2>

      <Form onSubmit={(e) => handleLogin(e)}>
        {/* email */}
        <Form.Group controlId='formBasicLoginEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId='formBasicLoginPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        {/* submit button */}
        <Button variant='primary' type='submit' onClick={(e) => handleLogin(e)}>
          Submit
        </Button>
      </Form>
      {/* display success message */}
      {login ? (
        <p className='text-success'>You Are Logged in Successfully</p>
      ) : (
        <p className='text-danger'>You Are Not Logged in</p>
      )}
    </>
  );
};
