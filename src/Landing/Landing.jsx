import React, { useEffect, useState } from "react";
import Header from "../Component/Header/Header";
import "./Landing.css";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faLocationDot,
  faPeopleGroup,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import siswa from "../Component/siswa.jpg";
import Footer from "../Component/Footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Landing = () => {
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
      <div className="box-landing">
        <Container>
          <div className="content-landing">
            <h1 className="title-landing">
              <strong>Bimbel Masuk Kedokteran, PTN & Kedinasan 2023</strong>
            </h1>
            <h4 className="desk-landing">
              Bimbel Persiapan UTBK SNBT / SBMPTN, Simak UI, UTUL UGM, UM Undip
              dan Ujian Mandiri PTN. Edumatrix Indonesia - Bimbel Sukses Masuk
              FK, PTN & Kedinasan Terbaik.
            </h4>
            <div>
              <a href="#about" className="btn-landing">
                Pelajari Selengkapnya
              </a>
            </div>
            <img
              className="img-landing"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/bimbel-masuk-ptn-2023.jpg"
              alt=""
            />
          </div>
        </Container>
      </div>

      <Container>
        <div className="box-about" id="about">
          <img
            src="https://bimbelsupercamp.com/wp-content/uploads/2021/03/Bimbel-Persiapan-Masuk-PTN-UI-UGM-ITB-UNPAD-UTBK-Simak-KKI-Jaminan-Program-Terbaik.png"
            alt=""
            className="img-about"
          />
          <div className="isi-about">
            <h5>
              <strong>Tentang Kami</strong>
            </h5>
            <h1>
              <strong>
                Supercamp EDUMATRIX - Bimbel Spesialis Masuk UI ITB UGM & PTN
                Favorit
              </strong>
            </h1>
            <p className="desk-about">
              Supercamp EDUMATRIX adalah program bimbingan belajar dengan sistem
              karantina. Kami hadir sebagai partner terbaik bagi siswa untuk
              menyediakan program bimbingan masuk UI, ITB, UGM, IPB, Unair, ITS,
              Undip, Unpad & Perguruan Tinggi Negeri Favorit.
            </p>
            <div>
              <button onClick={() => goToPendaftaran()} className="btn-about">
                <FontAwesomeIcon icon={faPeopleGroup} /> Mulai Gabung Sekarang
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="benefit-eduatrix">
        <Container>
          <h4 className="text-benefit1">Keunggulan Edumatrix Indonesia</h4>
          <h1 className="text-benefit2">
            <strong>Apa yang Anda Dapatkan dari Kami?</strong>
          </h1>
          <div className="box-benefit">
            {keunggulan?.map((item, index) => (
              <Card
                style={{ border: "none" }}
                className="card-benefit"
                key={index}
              >
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>{item.name}</strong>
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>

      <div className="promo-edumatrix">
        <h1>
          <strong>Promo Terpopuler Maret 2023</strong>
        </h1>
        <a>
          <img
            className="img-promo"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/4-2.jpg"
            alt=""
          />
        </a>
        <a>
          <img
            className="img-promo"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/1-1.jpg"
            alt=""
          />
        </a>
      </div>

      <div className="program-unggulan">
        <h1>
          <strong>Program Unggulan Edumatrix Indonesia 2023</strong>
        </h1>
        <h5>
          Berikut adalah program unggulan yang dirancang untuk Anda agar proses
          belajar semakin Efektif dan Efisien.
        </h5>
        <div className="box-benefit">
          <Card style={{ border: "none" }} className="card-progunggul">
            <Card.Img
              variant="top"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/bimbel-masuk-kedokteran.jpeg"
            />
            <Card.Body className="card-edumatrix">
              <Card.Title>
                <strong>Program Supercamp Kedokteran 2023</strong>
              </Card.Title>
              <br />
              <a
                href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Masuk%20Kedokteran%202023.%20Mohon%20info%20selengkapnya%20..."
                className="btn-chatnow"
              >
                <strong>Chat Us Now!</strong>
              </a>
            </Card.Body>
          </Card>

          <Card style={{ border: "none" }} className="card-progunggul">
            <Card.Img
              variant="top"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/bimbel-masuk-ptn.jpeg"
            />
            <Card.Body className="card-edumatrix">
              <Card.Title>
                <strong>Program Supercamp Sukses PTN 2023</strong>
              </Card.Title>
              <br />
              <a
                href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Masuk%20PTN%202023.%20Mohon%20info%20selengkapnya%20..."
                className="btn-chatnow"
              >
                <strong>Chat Us Now!</strong>
              </a>
            </Card.Body>
          </Card>

          <Card style={{ border: "none" }} className="card-progunggul">
            <Card.Img
              variant="top"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/les-privat-snbt-600x640.jpeg"
            />
            <Card.Body className="card-edumatrix">
              <Card.Title>
                <strong>Kelas Intensif Sukses SNBT 2023</strong>
              </Card.Title>
              <br />
              <a
                href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Kelas%20Intensif,%20Program%20Sukses%20Masuk%20FK%20&%20PTN%202023.%20Mohon%20info%20selengkapnya%20..."
                className="btn-chatnow"
              >
                <strong>Chat Us Now!</strong>
              </a>
            </Card.Body>
          </Card>

          <Card style={{ border: "none" }} className="card-progunggul">
            <Card.Img
              variant="top"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/les-privat-utbk.jpeg"
            />
            <Card.Body className="card-edumatrix">
              <Card.Title>
                <strong>Privat UTBK 2023 Online & Offline</strong>
              </Card.Title>
              <br />
              <a
                href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Les%20Privat,%20Program%20Sukses%20Masuk%20FK%20dan%20PTN%202023.%20Mohon%20info%20selengkapnya%20..."
                className="btn-chatnow"
              >
                <strong>Chat Us Now!</strong>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Container>
        <div className="tertarik-gabung">
          <div className="isi-gabung">
            <h1 className="title-gabung">
              Tertarik & Ingin Mulai Bergabung dengan{" "}
              <strong>Edumatrix Indonesia</strong>
            </h1>
            <h5 className="desk-gabung">
              Silahkan kunjungi halaman pendaftaran siswa terlebih dahulu untuk
              mengisi formulir yang kami telah sediakan.
            </h5>
            <div>
              <button onClick={() => goToPendaftaran()} className="btn-gabung">
                <FontAwesomeIcon icon={faFile} /> Pendaftaran Siswa
              </button>
            </div>
          </div>
          <img className="img-tertarik" src={siswa} alt="" />
        </div>
      </Container>

      <Container>
        <div className="univ">
          <img
            className="univ"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-560.png"
            alt=""
          />
        </div>
      </Container>

      <Container>
        <div className="testimoni-landing">
          <h1>
            <strong>Apa Kata Mereka</strong>
          </h1>
          <div className="box-edu">
            {testimoni?.map((item, index) => (
              <Card
                style={{ border: "none" }}
                className="card-landing"
                key={index}
              >
                <Card.Body className="card-edu">
                  <Card.Title>
                    <strong>{item.name}</strong>
                  </Card.Title>
                  <button className="btn-testilanding">{item.sub}</button>
                  <Card.Text className="testi-desk">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>

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
        <button onClick={() => goToPendaftaran()} className="daftar-sekarang">Daftar Sekarang</button>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Landing;
