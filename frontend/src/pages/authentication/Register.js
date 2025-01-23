import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/authentication/Register.css';
import Footer from '../../components/footer_component/Footer.js';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    contact_number: '',
    user_type: 'student', 
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match.');
      setSuccess(null);
      return;
    }

    try {
      setLoading(true);
      await axios.post('http://localhost:8000/api/register/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSuccess('Registration successful! Please check your email to verify your account.');
      setError(null);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        contact_number: '',
        user_type: 'student',
      });
      setLoading(false);
      navigate('/check-email');
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data).flat().join(', ');
        setError(errorMessage);
      } else {
        setError('Registration failed. Please try again.');
      }
      setSuccess(null);
    }
  };

  return (
    <div>
      <Container className="register-container my-5">
        <div className="register-wrapper">
          <h2 className='heading'>Register</h2>
          <div className="register-heading-border"></div>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group controlId="formUsername" className="mb-4">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    autoComplete="username"
                    aria-label="Username"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    aria-label="Email"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                    aria-label="Password"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formConfirmPassword" className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm your password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                    aria-label="Confirm Password"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <Form.Group controlId="formUserType" className="mb-4">
                  <Form.Label>User Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="user_type"
                    value={formData.user_type}
                    onChange={handleChange}
                    required
                    aria-label="User Type"
                  >
                    <option value="staff">Staff</option>
                    <option value="employee">Employee</option>
                    <option value="student">Student</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formContactNumber" className="mb-4">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact_number"
                    placeholder="Number must be like +880-1301123456"
                    value={formData.contact_number}
                    onChange={handleChange}
                    autoComplete="tel"
                    aria-label="Contact Number"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" className="mt-3 register-button" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Register'}
            </Button>
          </Form>
          <div className="already-have-account mt-3">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Register;
