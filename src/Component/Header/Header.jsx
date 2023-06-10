import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css"
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const goToHome = () => {
    navigate("/Home");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar className="custom-nav" bg="none" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => goToHome()}>
            <img
              style={{cursor: 'pointer'}}
              src="https://bimbelsnbt.com/wp-content/uploads/2022/12/logo-header.png"
              width="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav-all" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Tentang Kami" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Pofile Tutor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Kontak Kami
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Bimbingan Belajar" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Les Privat Offline
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Les Privat Online
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Les Privat Calistung
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Les Privat Olimpiade
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Les Privat SBMPTN
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Les Privat CPNS
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Kursus" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Kursus Bahasa Asing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Kursus Kesenian
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Kursus Olahraga
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Kursus Komputer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
            //   onClick={() => errorHandler()}
              style={{ background: "orange", border: "1px solid transparent" }}
              className="daftar"
            >
              <strong>Pendaftaran</strong>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
