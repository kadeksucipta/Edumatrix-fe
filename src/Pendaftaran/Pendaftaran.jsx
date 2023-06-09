import React, { useEffect, useState } from "react";
import Header from "../Component/Header/Header";
import "./Pendaftaran.css";
import { Card, Container, Form } from "react-bootstrap";
import Dropdown from "../Component/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
  faPhone,
  faPhoneSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Component/Footer/Footer";
import AnimatedPage from "../Component/Animate/Animate";

const Pendaftaran = () => {
  const [keunggulan, setKeunggulan] = useState([]);
  const [testimoni, setTestimoni] = useState([]);

  const [value, onChange] = useState(1);
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  useEffect(() => {
    fetchKeunggulan();
    fetchTestimoni();
  }, []);

  const fetchKeunggulan = () => {
    fetch(`https://edumatrix-fe-production.up.railway.app/api/keunggulan`)
      .then((res) => res.json())
      .then((data) => {
        setKeunggulan(data.data);
        // console.log(data);
      });
  };

  const fetchTestimoni = () => {
    fetch(`https://edumatrix-fe-production.up.railway.app/api/testimoni`)
      .then((res) => res.json())
      .then((data) => {
        setTestimoni(data.data);
        // console.log(data);
      });
  };

  return (
    <React.Fragment>
        <AnimatedPage>
      <Header />

      {/* ISI */}
      <div className="box-daftar">
        <div className="box-title">
          <h1><strong>DAFTAR SEKARANG</strong></h1>
          <h4 className="raih-ptn">RAIH PTN IMPIANMU BERSAMA KAMI</h4>
        </div>
      </div>

      <Container>
        <div className="content-daftar">
          <img
            src="https://bimbelsnbt.com/wp-content/uploads/2022/12/logo-header.png"
            className="logo-edu"
          />
          {/* <div className="teks-daftar">
            <h1>Raih PTN Idaman mu Bersama Kami</h1>
          </div> */}
          <div className="form-daftar">
            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Jenjang Pendidikan</strong>
              </Form.Label>
              <Form.Select>
                <option>SMA</option>
                <option>SMK</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Status Pendaftaran</strong>
              </Form.Label>
              <Form.Select>
                <option>Siswa</option>
                <option>Orang Tua</option>
                <option>Saudara</option>
                <option>FEC</option>
                <option>OEC</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Nama Lengkap</strong>
              </Form.Label>
              <Form.Control type="text" placeholder="Masukan nama..." />
            </Form.Group>

            <Form.Group className="mt-1">
              <Form.Label>
                <strong>Mata Pelajaran</strong>
              </Form.Label>
              <Form.Control type="text" placeholder="Masukan mapel..." />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Preferensi Belajar</strong>
              </Form.Label>
              <Form.Select>
                <option>Offline</option>
                <option>Online</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Program Belajar</strong>
              </Form.Label>
              <Form.Select>
                <option>Private atau Perorangan</option>
                <option>Kelompok Belajar 2 Orang</option>
                <option>Kelompok Belajar 3 Orang</option>
              </Form.Select>
            </Form.Group>

            <div className="slider-parent">
              <Form.Label>
                <strong>Total Sesi Belajar</strong>
              </Form.Label>
              <input
                className="range-input"
                type="range"
                min="1"
                max="100"
                value={value}
                onChange={({ target: { value: radius } }) => {
                  onChange(radius);
                }}
              />
              <div className="buble">{value} kali pertemuan</div>
            </div>

            <Form.Group className="mt-5">
              <Form.Label>
                <strong>Nomor WhatsApp/Telepon</strong>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukan nomor whatsapp/telepon..."
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Email</strong>
              </Form.Label>
              <Form.Control type="email" placeholder="Masukan email..." />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Pesan Tambahan</strong>
              </Form.Label>
              <Form.Control type="text" placeholder="Masukan pesan..." />
            </Form.Group>
          </div>
        </div>
        <button className="btn-daftar">Daftar</button>
      </Container>
      <div className="box-keunggulan">
        <h1>Kenapa Harus Pilih Edumatrix Indonesia ?</h1>
        <div className="box-edu">
          {keunggulan?.map((item, index) => (
            <Card
              style={{ border: "none" }}
              className="card-keunggulan"
              key={index}
            >
              <Card.Body className="card-edu">
                <Card.Text>0{item.price}</Card.Text>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div className="testimoni">
        <h1>Apa Kata Mereka</h1>
        <div className="box-edu">
          {testimoni?.map((item, index) => (
            <Card style={{ border: "none" }} className="card-testi" key={index}>
              <Card.Body className="card-edu">
                <Card.Title>{item.name}</Card.Title>
                <button className="btn-testi">{item.sub}</button>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div className="info-contact">
        <span>
          <FontAwesomeIcon className="phone-daftar" icon={faPhoneSquare} />
        </span>
        <h5>
          Hubungi Kami <br />
          0812-1552-3902
        </h5>
        <span>
          <FontAwesomeIcon className="lokasi-daftar" icon={faLocationDot} />
        </span>
        <h5>Yogyakarta</h5>
        <h3 className="mulai-belajar">Mulai Buat Agenda Bimbingan Belajar dengan Kami ?</h3>
        <button className="daftar-sekarang">Daftar Sekarang</button>
      </div>
      <Footer />
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Pendaftaran;
