import React from "react";
import Header from "../../Component/Header/Header";
import "./Bumn.css";
import { Card, Container } from "react-bootstrap";
import {
  faCheck,
  faFile,
  faPaperclip,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../Component/Footer/Footer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import WaFloat from "../../Component/WaFloat/WaFloat";
import AnimatedPage from "../../Component/Animate/Animate";

const Bumn = () => {
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
            <strong>Bimbel Masuk BUMN</strong>
          </h1>
        </div>

        <Container>
          <div className="content-cpns">
            <img
              className="img-cpns"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/02/BUMN-1.jpg"
              alt=""
            />
            <div className="text-cpns">
              <h1>
                <strong>Bimbel BUMN Bersama Edumatrix Indonesia</strong>
              </h1>
              <h5 className="h5-cpns">
                Kami meyakini bahwa setiap orang yang ingin mendaftar BUMN
                pastinya ingin lolos dari tes BUMN dengan sebaik mungkin. Untuk
                itulah, mereka membutuhkan pendampingan belajar profesional
                untuk memaksimalkan potensi terbaik. Supaya bisa lolos tes BUMN
                dengan gemilang. Edumatrix Indonesia adalah solusi yang kamu
                butuhkan.
              </h5>

              <div>
                <button onClick={() => goToPendaftaran()} className="btn-cpns1">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>

          <div className="cpns-edu">
            <Card className="card-cpns">
              <Card.Title className="header-cpns">
                <strong>
                  Supercamp Garansi Priority Sukses Lolos Rekrutmen BUMN 2023
                </strong>
              </Card.Title>
              <Card.Body>
                <Card.Text className="column-cpns">
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Sistem Belajar Privat 1 on 1
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Belajar 4 Sesi per hari selama 1-2 minggu
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Room Hotel 1 kamar 2 Siswa
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Penginapan saat tes BUMN
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Modul Belajar BUMN
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Worksheet Prediktif Edumatrix Indonesia
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Assessment Pra-Karantina
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Free 7 Sesi Privat Online Pra-Karantina
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Try Out Setiap Hari
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Tryout Real Tes BUMN 2023
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Workshop TIU Mastery
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Workshop TKP Master
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Motivation Training
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Progress Report Setiap Minggu
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Coaching Session - Sukses Masuk BUMN
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Konsultasi Akademik Personal Khusus Lolos BUMN
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Tips & Trik Lulus Tes BUMN
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Souvenir Supercamp Edumatrix
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Akomodasi, Makan & Laundry saat karantina
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                    Dibimbing s.d Tes BUMN
                  </li>
                </Card.Text>
                <button className="btn-cpns2">
                  <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Tes%20CPNS%202023.%20Mohon%20info%20selengkapnya%20...">
                    <strong>Pilih Paket</strong>
                  </a>
                </button>
              </Card.Body>
            </Card>
          </div>

          {/* <div className="oneonone">
          <div className="text-oneonone">
            <h3>
              <strong>1 on 1 - Home Tutoring</strong>
            </h3>
            <p>
              Paket ini merupakan paket belajar les privat (personal tutoring)
              dengan sistem One on One (satu guru satu siswa).
            </p>
          </div>

          <div className="paket-cpns">
            <Card className="paket-populer">
              <Card.Body>
                <Card.Title>
                  <strong>Paket Populer (10 Sesi)</strong>
                </Card.Title>
                <Card.Text>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Sistem Belajar Privat 1 Guru 1 Siswa
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Belajar 1 Sesi per Hari (durasi 2 jam)
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Pendaftaran
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Assessment
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Konsultasi Personal
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    E-book Latihan Soal & Pembahasan
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> TDR
                    (Tutoring Daily Report) Harian
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Progress Report diakhir Sesi
                  </li>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="paket-champion">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <strong>Paket Champion (20, 40 & 60 Sesi)</strong>
                </Card.Title>
                <Card.Text>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Sistem Belajar Privat 1 Guru 1 Siswa
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Belajar 1 Sesi per Hari (durasi 2 jam)
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Pendaftaran
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Assessment
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Konsultasi Personal
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    E-book Latihan Soal & Pembahasan
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> TDR
                    (Tutoring Daily Report) Harian
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Modul Bahan Belajar
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> Try
                    Out Progresif
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Progress Report Bulanan
                  </li>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="paket-priority">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <strong>Paket Priority (80, 100 & 200 Sesi)</strong>
                </Card.Title>
                <Card.Text>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Sistem Belajar Privat 1 Guru 1 Siswa
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Belajar 1 Sesi per Hari (durasi 2 jam)
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Pendaftaran
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Assessment
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Konsultasi Personal
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    E-book Latihan Soal & Pembahasan
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> TDR
                    (Tutoring Daily Report) Harian
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Modul Bahan Belajar
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> Try
                    Out Progresif
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Progress Report Bulanan
                  </li>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div> */}

          <div className="smallgroup">
            {/* <div className="text-smallgroup">
            <h3>
              <strong>Small Group (1 on 2) - Home Tutoring</strong>
            </h3>
            <p>
              Paket ini merupakan paket belajar les privat (personal tutoring)
              dengan sistem satu guru untuk dua siswa.
            </p>
          </div> */}

            <div className="paket-cpns">
              {/* <Card className="paket-populer">
              <Card.Body>
                <Card.Title>
                  <strong>Paket Populer (5 & 10 Sesi)</strong>
                </Card.Title>
                <Card.Text>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Sistem Belajar Privat 1 Guru 2 Siswa
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Belajar 1 Sesi per Hari (durasi 2 jam)
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Pendaftaran
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Assessment
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Konsultasi Personal
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    E-book Latihan Soal & Pembahasan
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> TDR
                    (Tutoring Daily Report) Harian
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Progress Report diakhir Sesi
                  </li>
                </Card.Text>
              </Card.Body>
            </Card> */}

              {/* <Card className="paket-champion">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <strong>Paket Champion (20, 40 & 60 Sesi)</strong>
                </Card.Title>
                <Card.Text>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Sistem Belajar Privat 1 Guru 2 Siswa
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Belajar 1 Sesi per Hari (durasi 2 jam)
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Pendaftaran
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Assessment
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Konsultasi Personal
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    E-book Latihan Soal & Pembahasan
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> TDR
                    (Tutoring Daily Report) Harian
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Modul Bahan Belajar
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> Try
                    Out Progresif
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Progress Report Bulanan
                  </li>
                </Card.Text>
              </Card.Body>
            </Card> */}

              {/* <Card className="paket-priority">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <strong>Paket Priority (80, 100 & 200 Sesi)</strong>
                </Card.Title>
                <Card.Text>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Sistem Belajar Privat 1 Guru 2 Siswa
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Belajar 1 Sesi per Hari (durasi 2 jam)
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Pendaftaran
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Free Assessment
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Konsultasi Personal
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    E-book Latihan Soal & Pembahasan
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> TDR
                    (Tutoring Daily Report) Harian
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Modul Bahan Belajar
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} /> Try
                    Out Progresif
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                    Progress Report Bulanan
                  </li>
                </Card.Text>
              </Card.Body>
            </Card> */}
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
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/CPNS-2-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Bimbel CPNS 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20CPNS%202023.%20Mohon%20info%20selengkapnya%20..."
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
                    <strong>Bimbel Tes Masuk BUMN</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20BUMN%202023.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>

              <Card style={{ border: "none" }} className="card-supercamp">
                <Card.Img
                  variant="top"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Kedinasan-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Bimbel Sekolah Kedinasan 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20program%20Training%20Camp%20Sekolah%20Kedinasan%202023.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>

              <Card style={{ border: "none" }} className="card-supercamp">
                <Card.Img
                  variant="top"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/AKPOL-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Bimbel AKMIL/AKPOL 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Training%20Camp%20AKPOL/AKMIL%202023.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
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

export default Bumn;
