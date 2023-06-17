import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  const goToPpds = () => {
    navigate("/Ppds");
  };
  const goToHomeSchool = () => {
    navigate("/HomeSchool");
  };
  const goToIgcse = () => {
    navigate("/Igcse");
  };
  const goToIht = () => {
    navigate("/Iht");
  };
  const goToOnlineOffline = () => {
    navigate("/OnlineOffline");
  };
  const goToBimbelPendidikan = () => {
    navigate("/BimbelPendidikan");
  };
  const goToPrivatMahasiswa = () => {
    navigate("/PrivatMahasiswa");
  };
  const goToPrivatIslam = () => {
    navigate("/PrivatIslam");
  };
  const goToPrivatIT = () => {
    navigate("/PrivatIT");
  };
  const goToPrivatMusik = () => {
    navigate("/PrivatMusik");
  };
  const goToPrivatUtbk = () => {
    navigate("/PrivatUtbk");
  };
  const goToPrivatBipa = () => {
    navigate("/PrivatBipa");
  };
  const goToKedokteran = () => {
    navigate("/Kedokteran");
  };
  const goToSnbt = () => {
    navigate("/Snbt");
  };
  const goToGapyear = () => {
    navigate("/Gapyear");
  };
  const goToUmptn = () => {
    navigate("/Umptn");
  };
  const goToUmptnkin = () => {
    navigate("/Umptnkin");
  };
  const goToAkmil = () => {
    navigate("/Akmil");
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
            <Container>
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
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => goToCpns()}>
                    Bimbel CPNS
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToBumn()}>
                    Bimbel BUMN
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToSmaUnggul()}>
                    Bimbel SMA Unggulan
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToPpds()}>
                    Bimbel PPDS
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => goToHomeSchool()}>
                    HomeSchooling
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToIgcse()}>
                    IGCSE, O Level, A Level & <br />
                    IB Tutor Jakarta
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToIht()}>
                    In House Training
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown
                    className="multi-dropdown"
                    title="Taruna Edumatrix"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={() => goToAkmil()}>
                      Bimbel AKMIL
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToContactKami()}>
                      Bimbel AKPOL
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToTentangKami()}>
                      Bimbel Sekolah Kedinasan
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown title="Privat" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => goToOnlineOffline()}>
                    Les Privat (Online/Offline)
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToBimbelPendidikan()}>
                    Bimbel Privat TK, SD, SMP & SMA
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToPrivatMahasiswa()}>
                    Les Privat Mahasiswa Nasional & Internasional
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToPrivatIslam()}>
                    Les Privat Agama Islam
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => goToPrivatIT()}>
                    Les Privat Komputer & IT
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToPrivatMusik()}>
                    Les Privat Musik
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToPrivatUtbk()}>
                    Les Privat TK, SD, SMP, SMA, UTBK, SNBT Terbaik
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToPrivatBipa()}>
                    Les Privat BIPA
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="PTN" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => goToKedokteran()}>
                    BIMBEL KEDOKTERAN
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToSnbt()}>
                    BIMBEL UTBK SNBT
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToGapyear()}>
                    BIMBEL GAP YEAR
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToUmptn()}>
                    BIMBEL UMPTN
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goToUmptnkin()}>
                    BIMBEL UMPTKIN
                  </NavDropdown.Item>
                </NavDropdown>
                <Button
                  onClick={() => goToPendaftaran()}
                  style={{
                    background: "orangered",
                    border: "1px solid transparent",
                  }}
                  className="daftar"
                >
                  <strong>Pendaftaran</strong>
                </Button>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
