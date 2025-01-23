import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Header from '../../components/header_component/Header';
import Footer from '../../components/footer_component/Footer';
import '../../styles/contact/ContactUs.css'; 

const FreelancerProfileForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    marketer_name: "",
    role: '',
    profession_type: 'Freelancer',
    education_level: '',
    marital_status: '',
    gender: '',
    linkedin_profile: '',
    facebook_link: '',
    date_of_birth: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
    phone_number: '',
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
      const response = await axios.post('http://localhost:8000/api/freelancer-profile/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data); 

      setSuccess('Your freelancer profile has been created successfully!');
      setError(null);
      setFormData({
        full_name: '',
        marketer_name: "",
        role: '',
        profession_type: 'Freelancer',
        education_level: '',
        marital_status: '',
        gender: '',
        linkedin_profile: '',
        facebook_link: '',
        date_of_birth: '',
        address: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        phone_number: '',
      });
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data).flat().join(', ');
        setError(errorMessage);
      } else {
        setError('Failed to create profile. Please try again.');
      }
      setSuccess(null);
    }
  };

  return (
    <div>
      <Header />
      <Container className="contact-container my-5">
        <div className="contact-wrapper"> 
          <h2 className="heading">Drop Your Data</h2>
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

            <Form.Group controlId="formRole" className="mb-4">
              <Form.Label>Interested Course</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option value="abcmath">Abcus Math</option>
                <option value="Spoken_English">Spoken English</option>
                <option value="Kids_Science">Kids Science</option>
                <option value="Digital_Art">Digital Art</option>
                <option value="Digital_Design">Digital Design</option>
                <option value="Web_Design">Web Design</option>
                <option value="BD">Backend Development</option>
                <option value="CS">Cyber Security</option>
                <option value="Ielts">IELTS</option>
                <option value="BC">Business Communication</option>
                <option value="SK">Soft Skills</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formProfessionType" className="mb-4">
              <Form.Label>Profession Type</Form.Label>
              <Form.Control
                as="select"
                name="profession_type"
                value={formData.profession_type}
                onChange={handleChange}
                required
              >
                <option value="Freelancer">Freelancer</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Student">Student</option>
                <option value="Intern">Intern</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formEducationLevel" className="mb-4">
              <Form.Label>Education Level</Form.Label>
              <Form.Control
                as="select"
                name="education_level"
                value={formData.education_level}
                onChange={handleChange}
              >
                <option value="">Select Education Level</option>
                <option value="HighSchool">High School</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="PostGraduate">PostGraduate</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formMaritalStatus" className="mb-4">
              <Form.Label>Marital Status</Form.Label>
              <Form.Control
                as="select"
                name="marital_status"
                value={formData.marital_status}
                onChange={handleChange}
              >
                <option value="">Select Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGender" className="mb-4">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formLinkedinProfile" className="mb-4">
              <Form.Label>LinkedIn Profile</Form.Label>
              <Form.Control
                type="url"
                name="linkedin_profile"
                value={formData.linkedin_profile}
                onChange={handleChange}
                placeholder="Enter LinkedIn profile URL"
              />
            </Form.Group>

            <Form.Group controlId="formFacebookLink" className="mb-4">
              <Form.Label>Facebook Link</Form.Label>
              <Form.Control
                type="url"
                name="facebook_link"
                value={formData.facebook_link}
                onChange={handleChange}
                placeholder="Enter Facebook profile URL"
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mb-4">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
                autoComplete="tel"
              />
            </Form.Group>

            <Form.Group controlId="formDateOfBirth" className="mb-4">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-4">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </Form.Group>


            <Form.Group controlId="formCity" className="mb-4">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </Form.Group>

            <Form.Group controlId="formState" className="mb-4">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
              />
            </Form.Group>

            <Form.Group controlId="formPostalCode" className="mb-4">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                placeholder="Enter postal code"
              />
            </Form.Group>

            <Form.Group controlId="formCountry" className="mb-4">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
              />
            </Form.Group>

            <Form.Group controlId="formMarketerName" className="mb-4">
              <Form.Label>Marketer Name</Form.Label>
              <Form.Control
                type="text"
                name="marketer_name"
                value={formData.marketer_name}
                onChange={handleChange}
                placeholder="Enter marketer name"
              />
            </Form.Group>

            <Button type="submit" className="mt-3 contact-button">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default FreelancerProfileForm;
