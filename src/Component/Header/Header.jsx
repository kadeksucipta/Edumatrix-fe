import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const goToHome = () => {
    navigate("/Home");
  };
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };
  const goToProfileTutor = () => {
    navigate("/ProfileTutor");
  };
  const goToContactKami = () => {
    navigate("/ContactKami");
  };
  const goToTentangKami = () => {
    navigate("/TentangKami");
  };
  const goToCampEdu = () => {
    navigate("/CampEdu");
  };
  const goToCpns = () => {
    navigate("/Cpns");
  };
  const goToBumn = () => {
    navigate("/Bumn");
  };
  const goToSmaUnggul = () => {
    navigate("/SmaUnggul");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar className="custom-nav" bg="none" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => goToHome()}>
            <img
              style={{ cursor: "pointer" }}
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
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => goToProfileTutor()}>
                  Pofile Tutor
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToContactKami()}>
                  Kontak Kami
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToTentangKami()}>
                  Tentang Kami
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Bimbingan Belajar" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => goToCampEdu()}>
                  CAMP EDUMATRIX
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToCpns()}>
                  Bimbel CPNS
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => goToBumn()}>Bimbel BUMN</NavDropdown.Item>
                <NavDropdown.Item onClick={() => goToSmaUnggul()}>Bimbel SMA Unggulan</NavDropdown.Item>
                <NavDropdown.Item>Les Privat SBMPTN</NavDropdown.Item>
                <NavDropdown.Item>Les Privat CPNS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Kursus" id="basic-nav-dropdown">
                <NavDropdown.Item>Kursus Bahasa Asing</NavDropdown.Item>
                <NavDropdown.Item>Kursus Kesenian</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Kursus Olahraga</NavDropdown.Item>
                <NavDropdown.Item>Kursus Komputer</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              onClick={() => goToPendaftaran()}
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
};

export default Header;
