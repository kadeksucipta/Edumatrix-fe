import React from "react";
import Header from "../../Component/Header/Header";
import "./SmaUnggul.css";
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

const SmaUnggul = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header />

      <div className="box-smaunggul">
        <h1>
          <strong>Bimbel Masuk SMA Unggulan</strong>
        </h1>
      </div>

      <Container>
        <div className="content-cpns">
          <img
            className="img-cpns"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/CTA-6-800x800.jpg"
            alt=""
          />
          <div className="text-cpns">
            <h1>
              <strong>Bimbel Masuk SMA Unggulan Bersama Edumatrix Indonesia</strong>
            </h1>
            <h5 className="h5-cpns">
              Kami meyakini bahwa setiap orang yang ingin mendaftar SMA Unggulan
              pastinya ingin lolos dari tes SMA Unggulan dengan sebaik mungkin. Untuk
              itulah, mereka membutuhkan pendampingan belajar profesional untuk
              memaksimalkan potensi terbaik. Supaya bisa lolos tes SMA Unggulan dengan
              gemilang. Edumatrix Indonesia adalah solusi yang kamu butuhkan.
            </h5>

            <div>
              <button onClick={() => goToPendaftaran()} className="btn-cpns1">Daftar Sekarang</button>
            </div>
          </div>
        </div>

        {/* <div className="cpns-edu">
          <Card className="card-cpns">
            <Card.Title className="header-cpns">
              <strong>Supercamp Garansi Priority Sukses Lolos CPNS 2023</strong>
            </Card.Title>
            <Card.Body>
              <Card.Text className="column-cpns">
                <li>
                  <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                  Sistem Belajar Privat 1 on 2
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
                  Penginapan saat tes CPNS
                </li>
                <li>
                  <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                  Modul Belajar Persiapan Tes CPNS
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
                  Tryout Real Tes CPNS 2023
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
                  Coaching Session - Sukses Masuk CPNS
                </li>
                <li>
                  <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                  Konsultasi Akademik Personal Khusus CPNS
                </li>
                <li>
                  <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                  Tips & Trik Lulus Tes CPNS
                </li>
                <li>
                  <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                  Analisa dan Evaluasi Hasil Belajar setiap hari
                </li>
                <li>
                  <FontAwesomeIcon className="icon-cpns" icon={faCheck} />
                  Antar Jemput lokasi SNBT Yogyakarta
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
                  Dibimbing s.d Tes CPNS 2023
                </li>
              </Card.Text>
              <button className="btn-cpns2">
                <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Tes%20CPNS%202023.%20Mohon%20info%20selengkapnya%20...">
                  <strong>Pilih Paket</strong>
                </a>
              </button>
            </Card.Body>
          </Card>
        </div> */}

        <div className="oneonone">
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
              {/* <div className="icon-populer">
                <Card.Img className="img-populer" variant="top" src="https://cdn.iconscout.com/icon/free/png-256/free-attach-attachment-clip-paperclip-pin-collate-include-13088.png"/>
              </div> */}
              <Card.Body>
                <Card.Title>
                  <strong>Paket Populer (5 & 10 Sesi)</strong>
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
        </div>

        <div className="smallgroup">
          <div className="text-smallgroup">
            <h3>
              <strong>Small Group (1 on 2) - Home Tutoring</strong>
            </h3>
            <p>
              Paket ini merupakan paket belajar les privat (personal tutoring)
              dengan sistem satu guru untuk dua siswa.
            </p>
          </div>

          <div className="paket-cpns">
            <Card className="paket-populer">
              {/* <div className="icon-populer">
                <Card.Img className="img-populer" variant="top" src="https://cdn.iconscout.com/icon/free/png-256/free-attach-attachment-clip-paperclip-pin-collate-include-13088.png"/>
              </div> */}
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
            Jika Anda saat ini membutuhkan pengajar atau instruktur terbaik dari
            Edumatrix Indonesia, segera daftarkan diri Anda dengan menghubungi
            kami melalui WhatsApp, telepon atau mengisi formulir pendaftaran.
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
          <button onClick={() => goToPendaftaran()} className="form-supercamp">
            <FontAwesomeIcon icon={faFile} /> Form Pendaftaran
          </button>
        </div>
      </div>
      <WaFloat />
      <Footer />
    </React.Fragment>
  );
};

export default SmaUnggul;
