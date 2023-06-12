import React, { useEffect, useState } from "react";
import Header from "../Component/Header/Header";
import "./TentangKami.css";
import { Card, Container } from "react-bootstrap";
import { faLocationDot, faPencil, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import { useDispatch } from "react-redux";

const TentangKami = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [keunggulan, setKeunggulan] = useState([]);
  const [testimoni, setTestimoni] = useState([]);

  useEffect(() => {
    fetchKeunggulan();
    fetchTestimoni();
  }, []);

  const fetchKeunggulan = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/keunggulan`)
      .then((res) => res.json())
      .then((data) => {
        setKeunggulan(data.data);
        // console.log(data);
      });
  };

  const fetchTestimoni = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/testimoni`)
      .then((res) => res.json())
      .then((data) => {
        setTestimoni(data.data);
        // console.log(data);
      });
  };

  return (
    <React.Fragment>
      <Header />

      <div className="box-tentangkami">
        <h1>
          <strong>Tentang Kami</strong>
        </h1>
      </div>

      <Container>
        <div className="box-tentangkami2">
          <img
            className="img-tentangkami"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/logo-header.png"
            alt=""
          />
          <div className="isi-tentangkami">
            <h5>
              <strong>Edumatrix Indoneisa</strong>
            </h5>
            <h1>
              <strong>Raih PTN Idamanmu Bersama Kami</strong>
            </h1>
            <p>
              EDUMATRIX Indonesia adalah lembaga bimbingan belajar untuk
              Persiapan Masuk Kedokteran, PTN dan Kedinasan. Program ini menjadi
              solusi terbaik untuk siswa agar sukses masuk UI ITB UGM IPB Unpad
              dan Perguruan Tinggi Negeri Favorit serta Sekolah Tinggi
              Kedinasan. Metode Belajar yang digunakan yaitu personal one on one
              (1 siswa 1 mentor) dan juga tersedia Small Class. Program belajar
              didesain secara sistematis, terstruktur, terukur dan teruji.
              Pembelajaran Tematik berdasar Statistik Soal yang diujikan. Fokus
              menerapkan Pola Sukses yang sudah proven.
            </p>
          </div>
        </div>
      </Container>

      <div className="keunggulan-ptutor">
        <h1 style={{ textAlign: "center" }}>
          <strong>Kenapa Harus Pilih Edumatrix Indonesia ?</strong>
        </h1>
        <div className="box-edu">
          {keunggulan?.map((item, index) => (
            <Card
              style={{ border: "none" }}
              className="card-keunggulan"
              key={index}
            >
              <Card.Body className="card-edu">
                <Card.Text>0{item.price}</Card.Text>
                <Card.Title>
                  <strong>{item.name}</strong>
                </Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div>
          <button className="btn-ptutor" onClick={() => goToPendaftaran()}>
            {" "}
            <FontAwesomeIcon icon={faPencil} /> Klik untuk bergabung dengan Kami
          </button>
        </div>
      </div>

      <div className="testimoni">
        <h1>Apa Kata Mereka</h1>
        <div className="box-edu">
          {testimoni?.map((item, index) => (
            <Card style={{ border: "none" }} className="card-testi" key={index}>
              <Card.Body className="card-edu">
                <Card.Title>
                  <strong>{item.name}</strong>
                </Card.Title>
                <button className="btn-testi">{item.sub}</button>
                <Card.Text className="testi-alumni">
                  {item.description}
                </Card.Text>
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
        <h3 className="mulai-belajar">
          Mulai Buat Agenda Bimbingan Belajar dengan Kami ?
        </h3>
        <button onClick={() => goToPendaftaran()} className="daftar-sekarang">
          Daftar Sekarang
        </button>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default TentangKami;
