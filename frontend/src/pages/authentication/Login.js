import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/authentication/Login.css'; 
import Footer from '../../components/footer_component/Footer'; 

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { refresh, access, username, email, user_type, contact_number, user_id } = response.data;
      const userData = {
        accessToken: access,
        refreshToken: refresh,
        userId: user_id,          
        username: username,
        email: email,
        userType: user_type,
        contactNumber: contact_number
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      setSuccess('Login successful!');
      setError(null);

      // Redirecting to the appropriate dashboard based on user type
      switch (user_type) {
        case 'staff':
          navigate('/dashboard/staff');
          break;
        case 'employee':
          navigate('/dashboard/employee');
          break;
        case 'student':
          navigate('/dashboard/student');
          break;
        default:
          navigate('/'); 
          break;
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.error || 'Login failed. Please try again.';
        setError(errorMessage);
      } else {
        setError('Login failed. Please try again.');
      }
      setSuccess(null);
    }
  };

  return (
    <div>
      <Container className="login-container my-5">
        <div className="login-wrapper">
          <h2 className='heading'>Login</h2>
          <div className="login-heading-border"></div>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12}>
                <Form.Group controlId="formUsername" className="mb-4">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    autoComplete="username"
                    placeholder="Enter your username"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" className="mt-3 login-button">
              Login
            </Button>
          </Form>
          <div className="no-account-yet mt-3">
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
            <p><Link to="/password-reset">Forgot Password?</Link></p> 
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Login;
