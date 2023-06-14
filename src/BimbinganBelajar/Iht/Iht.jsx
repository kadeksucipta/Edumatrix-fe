import React from "react";
import Header from "../../Component/Header/Header";
import { Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFile, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WaFloat from "../../Component/WaFloat/WaFloat";
import Footer from "../../Component/Footer/Footer";
import "./Iht.css";
import AnimatedPage from "../../Component/Animate/Animate";

const Iht = () => {
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
          <h1>
            <strong>In House Training</strong>
          </h1>
        </div>

        <Container>
          <div className="content-cpns">
            <img
              className="img-ppds"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/CTA.jpg"
              alt=""
            />
            <div className="text-cpns">
              <h1>
                <strong>Edumatrix Indonesia - In House Training</strong>
              </h1>
              <h5 className="h5-cpns">
                In-house training (IHT) adalah pelatihan di dalam perusahaan
                untuk meningkatkan keterampilan karyawan. Pelatihan dilakukan di
                dalam perusahaan dan disesuaikan dengan kebutuhan perusahaan.
                In-house training membantu menghemat biaya pelatihan dan
                meningkatkan motivasi karyawan.
              </h5>

              <div>
                <button onClick={() => goToPendaftaran()} className="btn-cpns1">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </Container>

        <div className="program-ppds">
          <h1>
            <strong>Program Unggulan Edumatrix Indonesia 2023</strong>
          </h1>
          <h5>
            Berikut adalah program unggulan yang dirancang untuk Anda agar
            proses belajar semakin Efektif dan Efisien.
          </h5>
          {/* #1 */}
          <div className="program-supercamp1">
            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Pertamina-600x601.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training Pertamina 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20In%20House%20Training%20Pertamina%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Kementerian-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training Kementerian 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20In%20House%20Training%20Kementrian%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Instansi-Swasta-600x601.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training Instansi Swasta 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20program%20In%20House%20Training%20Instansi%20Swasta%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Instansi-Pemerintah-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training Instansi Pemerintah 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20In%20House%20Training%20Instansi%20Pemerintah%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>
          </div>

          {/* #2 */}
          <div className="program-supercamp1">
            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Universitas-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training Universitas 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20In%20House%20Training%20Universitas%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Sekolah-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training Sekolah 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20In%20House%20Training%20Sekolah%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Rumah-Sakit-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training Rumah Sakit 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20program%20In%20House%20Training%20Rumah%20Sakit%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/PT-600x601.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training PT 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20In%20House%20Training%20PT%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>
          </div>

          {/* #3 */}
          <div className="program-supercamp1">
            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/BUMN-1-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training BUMN 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20In%20House%20Training%20BUMN%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Bank-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>In House Training Bank 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6282174144728&text=Halo%20Kak%20Roaz,%20saya%20ingin%20daftar%20In%20House%20Training%20Bank%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/CPNS-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Privat Lolos Tes CPNS</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20program%20Privat%20Lolos%20Tes%20CPNS.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/BUMN-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel Rekrutmen BUMN 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Bimbel%20Rekrutmen%20BUMN%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>
          </div>
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

export default Iht;
