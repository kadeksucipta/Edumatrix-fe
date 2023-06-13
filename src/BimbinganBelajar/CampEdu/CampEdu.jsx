import React from "react";
import Header from "../../Component/Header/Header";
import "./CampEdu.css";
import { Button, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFile, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import WaFloat from "../../Component/WaFloat/WaFloat";

const CampEdu = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header />

      <div className="box-campedu">
        <h1>
          <strong>SuperCamp Edumatrix 2023</strong>
        </h1>
      </div>

 
        <div className="text-campedu">
          <h5 className="desk-campedu">
            Supercamp Edumatrix 2023 merupakan program belajar dengan sistem
            karantina yang berfokus pada akselerasi kemampuan siswa dalam
            mengerjakan soal dan mendapatkan skor terbaik sehingga memperbesar
            kemungkinan untuk Lolos PTN Favorit Indonesia.
          </h5>
        </div>

        <div className="supercamp-edu">
          <Card className="card-priority">
            <Card.Title className="header-priority">
              <strong>
                Supercamp Garansi Priority Sukses Masuk Kedokteran 2023
              </strong>
            </Card.Title>
            <Card.Body>
              <Card.Text>
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

          <Card className="card-platinum">
            <Card.Title className="header-platinum">
              <strong>Supercamp Garansi Platinum Sukses Masuk PTN 2023</strong>
            </Card.Title>
            <Card.Body>
              <Card.Text>
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
                  Coaching Session - Sukses Masuk PTN
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Konsultasi Akademik Personal Masuk PTN Pilihan
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
                  Dibimbing s.d Tembus PTN
                </li>
              </Card.Text>
              <button className="btn-platinum">
                <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Masuk%20PTN%202023.%20Mohon%20info%20selengkapnya%20...">
                  <strong>Pilih Paket</strong>
                </a>
              </button>
            </Card.Body>
          </Card>

          <Card className="card-gold">
            <Card.Title className="header-gold">
              <strong>Supercamp Kelas Gold Sukses FK & PTN 2023</strong>
            </Card.Title>
            <Card.Body>
              <Card.Text>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Sistem Belajar Privat 1 Guru 2 Siswa
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Belajar 5 Sesi per Hari Selama 4-6 Minggu
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
                  Coaching Session - Sukses Masuk PTN
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Konsultasi Akademik Personal Masuk PTN Pilihan
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Tips & Trik Lulus Tes SNBT, UTUL UGM & Simak UI 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Analisa dan Evaluasi Hasil Belajar setiap hari
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
                  Dibimbing s.d Tembus PTN
                </li>
              </Card.Text>
              <button className="btn-gold">
                <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Supercamp%20Garansi%20Priority%20Masuk%20PTN%202023.%20Mohon%20info%20selengkapnya%20...">
                  <strong>Pilih Paket</strong>
                </a>
              </button>
            </Card.Body>
          </Card>
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

export default CampEdu;
