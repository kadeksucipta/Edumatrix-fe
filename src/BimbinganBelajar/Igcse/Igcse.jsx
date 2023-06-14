import React from "react";
import Header from "../../Component/Header/Header";
import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faCheck,
  faFile,
  faPaperclip,
  faPhone,
  faPieChart,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import WaFloat from "../../Component/WaFloat/WaFloat";
import Footer from "../../Component/Footer/Footer";
import "./Igcse.css";
import AnimatedPage from "../../Component/Animate/Animate";

const Igcse = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AnimatedPage>
        <Header />

        <div className="box-cpns">
          <h1 className="text-center">
            <strong>IGCSE, O Level, A Level & IB Tutor Jakarta</strong>
          </h1>
        </div>

        <Container>
          <div className="content-cpns">
            <img
              className="img-cta"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/CTA-1-2-800x799.jpg"
              alt=""
            />
            <div className="text-cpns">
              <h1>
                <strong>Edumatrix Services for International Programme</strong>
              </h1>
              <h5 className="h5-cpns">
                Edumatrix Indonesia is a tutoring programme with a one-on-one
                system. We are here to provide our best services for students to
                get the best study experience.
              </h5>

              <div>
                <button onClick={() => goToPendaftaran()} className="btn-cpns1">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>

          <div className="oneonone">
            <div className="text-oneonone">
              <h3>
                <strong>Choose Our Programme Now!</strong>
              </h3>
            </div>

            <div className="paket-igcse">
              <Card className="paket-delux">
                {/* <div className="icon-populer">
                <Card.Img className="img-populer" variant="top" src="https://cdn.iconscout.com/icon/free/png-256/free-attach-attachment-clip-paperclip-pin-collate-include-13088.png"/>
              </div> */}
                <Card.Body>
                  <Card.Title className="text-center">
                    <FontAwesomeIcon className="icon-clip" icon={faPaperclip} />
                    <br />
                    <strong>Deluxe</strong>
                  </Card.Title>
                  <Card.Text className="text-center">
                    <strong>90 minutes/session.</strong>
                  </Card.Text>
                  <Card.Text>
                    This fits for those who want to learn in a short time, but
                    consistently per day.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="paket-prioigcse">
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title className="text-center">
                    <FontAwesomeIcon className="icon-pie" icon={faPieChart} />
                    <br />
                    <strong>Priority</strong>
                  </Card.Title>
                  <Card.Text className="text-center">
                    <strong>120 minutes/session</strong>
                  </Card.Text>
                  <Card.Text>
                    This fits for those who want to apply intense learning
                    method.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>

        <div className="box-jabodetabek">
          <Container>
            <h1 className="title-jabodetabek">
              <strong>
                Choose the Best Place for Edumatrix International Programme in
                Jabodetabek
              </strong>
            </h1>
            <div className="isi-jabodetabek">
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> West Jakarta
                City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Central Jakarta
                City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> South Jakarta
                City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Depok
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> East Jakarta
                City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> North Jakarta
                City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Kepulauan
                Seribu Regency
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Bogor City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Bogor Regency
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Tangerang City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> South Tangerang
                City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Tangerang
                Regency
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Bekasi City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Bekasi Regency
              </li>
            </div>
          </Container>
        </div>

        <div className="box-kota">
          <Container>
            <h1 className="title-kota">
              <strong>
                Choose the Best Place for Edumatrix International Programme in
                Your City
              </strong>
            </h1>
            <div className="isi-kota">
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Yogyakarta
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Ambon
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Banda Aceh
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Lampung
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> East Jakarta
                City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Bandung
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Banjarbaru
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Bengkulu
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Denpasar
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Gorontalo
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Jakarta
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Jambi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Jayapura
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Kendari
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Kupang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Manado
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Manokwari
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Mataram
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Medan
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Merauke
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Nabire
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Padang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Palangkaraya
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Palembang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Palu
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Pangkalpinang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Pekanbaru
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Pontianak
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Samarinda
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Semarang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Serang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Sofifi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Sorong
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Surabaya
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Tanjung Selor
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Tanjungpinang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Wamena
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Mamuju
              </li>
            </div>
          </Container>
        </div>

        <div className="mulai-daftar">
          <div className="isi-supercamp">
            <h1>
              <strong>Mulai Daftar Edumatrix Sekarang!</strong>
            </h1>
            <p className="p-supercamp">
              Jika Anda saat ini membutuhkan pengajar atau instruktur terbaik
              dari Edumatrix Indonesia, segera daftarkan diri Anda dengan
              menghubungi kami melalui WhatsApp, telepon atau mengisi formulir
              pendaftaran.
            </p>
          </div>
          <div className="btn-mulaidaftar">
            <a
              href="https://api.whatsapp.com/send?phone=+6281215523902&text=Halo%20Kak%2C%20Saya%20mau%20tanya%20mengenai%20bimbel%20diEdumatrix%20Terima%20kasih."
              className="wa-supercamp"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
            <a href="tel:+6281215523902" className="telp-supercamp">
              <FontAwesomeIcon icon={faPhone} /> Telepon
            </a>
            <button
              onClick={() => goToPendaftaran()}
              className="form-supercamp"
            >
              <FontAwesomeIcon icon={faFile} /> Form Pendaftaran
            </button>
          </div>
        </div>
        <WaFloat />
        <Footer />
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Igcse;
