import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { Link, NavLink, useNavigate } from 'react-router-dom'; 
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../images/ecadet.png'; 
import '../../styles/header/Header.css'; 

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100); 
        };

        window.addEventListener('scroll', handleScroll);
        const userData = localStorage.getItem('userData');
        if (userData) {
            setIsAuthenticated(true);
            setUserType(JSON.parse(userData).userType);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userData');
        setIsAuthenticated(false);
        setUserType(null);
        navigate('/login');
    };

    return (
        <Navbar className={`navbar-custom ${scrolled ? 'scrolled' : 'transparent'} fixed-top`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: '50px' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {isAuthenticated && (
                            <>
                                {userType === 'staff' && (
                                    <NavLink to="/dashboard/staff" className="nav-link" activeClassName="active">
                                        Staff Dashboard
                                    </NavLink>
                                )}
                                {userType === 'employee' && (
                                    <NavLink to="/dashboard/employee" className="nav-link" activeClassName="active">
                                        Employee Dashboard
                                    </NavLink>
                                )}
                                {userType === 'student' && (
                                    <NavLink to="/dashboard/student" className="nav-link" activeClassName="active">
                                        Student Dashboard
                                    </NavLink>
                                )}
                            </>
                        )}
                        <NavLink exact to="/" className="nav-link" activeClassName="active">
                            Home
                        </NavLink>
                        <NavLink to="/contact-us" className="nav-link" activeClassName="active">
                            Contact
                        </NavLink>
                    </Nav>
                    <Nav className="d-lg-none">
                        {isAuthenticated ? (
                            <Nav.Link onClick={handleLogout}>
                                Logout
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                    <Nav className="d-none d-lg-flex align-items-center contact">
                        <Nav.Item className="me-3">
                            <div className="contact-info">
                                <span className="contact-text">Any Question?</span>
                                <span className="contact-number">+880-1897-792679</span>
                            </div>
                        </Nav.Item>
                        <Nav.Item className="access-icon">
                            {isAuthenticated ? (
                                <FaSignOutAlt 
                                    size={24} 
                                    style={{ color: 'black', cursor: 'pointer' }} 
                                    onClick={handleLogout} 
                                />
                            ) : (
                                <Link to="/login">
                                    <FaSignInAlt size={24} style={{ color: 'black' }} />
                                </Link>
                            )}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
