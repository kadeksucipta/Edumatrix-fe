import React from "react";
import "./Kedokteran.css";
import Header from "../../Component/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFile, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import WaFloat from "../../Component/WaFloat/WaFloat";
import Footer from "../../Component/Footer/Footer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../Component/Animate/Animate";

const Kedokteran = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AnimatedPage>
        <Header />

        <div className="box-kedokteran">
          <img
            className="img-kedokteran"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/image-asian-male-female-doctor_296537-5186.jpg"
            alt=""
          />
          <h1 className="title-kedokteran">
            <strong>Bimbel Masuk Kedokteran</strong>
          </h1>
        </div>

        <div className="box-dokprio">
          <h5 className="desk-kedokteran">
            Bimbel Masuk Kedokteran by <strong>EDUMATRIX INDONESIA</strong>{" "}
            merupakan program belajar dengan sistem karantina dan privat yang
            berfokus pada akselerasi kemampuan siswa dalam mengerjakan soal dan
            mendapatkan skor terbaik sehingga memperbesar kemungkinan untuk
            Lolos Masuk FK PTN Favorit Indonesia.
          </h5>
          <div className="supercamp-dok">
            <Card className="card-priodok">
              <Card.Title className="header-priority">
                <strong>
                  Supercamp Garansi Priority Sukses Masuk Kedokteran 2023
                </strong>
              </Card.Title>
              <Card.Body>
                <Card.Text className="column-kedokteran">
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Sistem Belajar Privat 1 on 1
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Belajar 5 Sesi per Hari Selama 4-6 Minggu
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Room Hotel 1 kamar 1 Siswa
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Penginapan saat tes SNBT
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Modul Belajar SNBT, UTUL UGM, & SIMAK UI
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Worksheet Prediktif Edumatrix Indonesia
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Assessment Pra-Karantina
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Free Live Class Pra-Karantina
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Try Out Setiap Hari
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Tryout Real SNBT, UTUL UGM, & SIMAK UI
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Workshop TPS Mastery
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Workshop Math Master
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Motivation Training
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Progress Report Setiap Minggu
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Coaching Session - Sukses Masuk FK
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Konsultasi Akademik Personal Khusus Jurusan Kedokteran
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Tips & Trik Lulus Tes SNBT, UTUL UGM & Simak UI 2023
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Free Biaya Pendaftaran SNBT 2023
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Free Biaya Pendaftaran Simak UI/UTUL UGM/UM Undip
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Analisa dan Evaluasi Hasil Belajar setiap hari
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Antar Jemput lokasi SNBT Yogyakarta
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Free Konsultasi dan Pendampingan Ujian Mandiri
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Souvenir Supercamp Edumatrix
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Akomodasi, Makan & Laundry saat karantina
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                    Dibimbing s.d Tembus Fakultas Kedokteran
                  </li>
                </Card.Text>
                <button className="btn-priority">
                  <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Masuk%20Kedokteran%202023.%20Mohon%20info%20selengkapnya%20...">
                    <strong>Pilih Paket</strong>
                  </a>
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="box-mainedu">
          <img
            className="img-main"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/bimbel-masuk-ptn-2023-1200x800.jpg"
            alt=""
          />
          <div className="overlay-text">
            <h1>
              <strong className="title-main">Bimbel Masuk Kedokteran, PTN, & Kedinasan 2023</strong>
            </h1>

            <h5 className="desk-main">
              Bimbel Persiapan UTBK SNBT / SBMPTN, Simak UI, UTUL UGM, UM Undip,
              dan Ujian Mandiri PTN. Edumatrix Indonesia - Bimbel Sukses Masuk
              FK, PTN, & Kedinasan Terbaik.
            </h5>

            <div className="btn-konsul">
              <button className="konsul">
                <a href="tel:085600422188">Konsultasi Gratis</a>
              </button>
              <button className="proposal">
                <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20Persiapan%20Masuk%20Kedokteran.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
                  Request Proposal
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="program-supercamp">
          <h1>
            <strong>Program Unggulan Edumatrix Indonesia 2023</strong>
          </h1>
          <h5>
            Berikut adalah program unggulan yang dirancang untuk Anda agar
            proses belajar semakin Efektif dan Efisien.
          </h5>
          <div className="program-supercamp1">
            <Card style={{ border: "none" }} className="card-supercamp">
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
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
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
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
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
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
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

export default Kedokteran;
