import React, { useEffect, useState } from "react";
import Header from "../Component/Header/Header";
import "./ProfileTutor.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPencil,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import WaFloat from "../Component/WaFloat/WaFloat";
import AnimatedPage from "../Component/Animate/Animate";

const ProfileTutor = () => {
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
      <AnimatedPage>
        <Header />
        <div className="box-ptutor">
          <h1>
            <strong>Our Professional Teachers...</strong>
          </h1>
        </div>
        <div className="content-ptutor">
          <h3>
            <strong>Profesional dan Bersertifikasi</strong>
          </h3>
          <h6 className="desk-ptutor">
            Edumatrix Indonesia telah didukung dengan tenaga pengajar yang
            terampil, cekatan dan profesional. Tidak sedikit diantaranya berasal
            dari universitas ternama di Indonesia!
          </h6>
          <img
            className="img-ptutor"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-561.jpg"
            alt=""
          />
        </div>

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
                  <Card.Text><strong>0{item.price}</strong></Card.Text>
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
              <FontAwesomeIcon icon={faPencil} /> Klik untuk bergabung dengan
              Kami
            </button>
          </div>
        </div>

        <div className="testimoni">
          <h1><strong>Apa Kata Mereka</strong></h1>
          <div className="box-edu">
            {testimoni?.map((item, index) => (
              <Card
                style={{ border: "none" }}
                className="card-testi"
                key={index}
              >
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
        <WaFloat />
        <Footer />
      </AnimatedPage>
    </React.Fragment>
  );
};

export default ProfileTutor;
