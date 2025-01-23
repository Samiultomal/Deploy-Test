import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Header from '../../components/header_component/Header';
import Footer from '../../components/footer_component/Footer';
import '../../styles/contact/ContactUs.css'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    contact_number: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/contact-us/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setSuccess('Your message has been sent successfully!');
      setError(null);
      setFormData({ full_name: '', email: '', contact_number: '', message: '' });
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data).flat().join(', ');
        setError(errorMessage);
      } else {
        setError('Failed to send message. Please try again.');
      }
      setSuccess(null);
    }
  };

  return (
    <div>
      <Header />
      <Container className="contact-container my-5">
        <div className="contact-wrapper"> 
          <h2 className="heading">Contact Us</h2>
          <div className="contact-heading-border"></div>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName" className="mb-4">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                autoComplete="name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
            </Form.Group>

            <Form.Group controlId="formContactNumber" className="mb-4">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                placeholder="Number must be like +880-0000-000-000"
                autoComplete="tel"
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-3 contact-button">
              Send Message
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
