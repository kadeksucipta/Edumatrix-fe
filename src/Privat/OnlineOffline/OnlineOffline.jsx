import React from "react";
import Header from "../../Component/Header/Header";
import AnimatedPage from "../../Component/Animate/Animate";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faFile,
  faPaperclip,
  faPhone,
  faPieChart,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Component/Footer/Footer";
import WaFloat from "../../Component/WaFloat/WaFloat";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./OnlineOffline.css";

const OnlineOffline = () => {
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
            <strong>Les Privat Ke Rumah & Online</strong>
          </h1>
        </div>

        <Container>
          <div className="content-cpns">
            <img
              className="img-cpns"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/01/les-privat-utbk.jpeg"
              alt=""
            />
            <div className="text-cpns">
              <h1>
                <strong>Les Privat Ke Rumah & Online</strong>
              </h1>
              <h5 className="h5-cpns">
                Les privat guru ke rumah dan online adalah les privat yang
                disediakan Edumatrix Indonesia sesuai dengan kebutuhan siswa.
                Siswa bisa memilih untuk guru datang ke rumah atau melakukan
                sistem belajar secara online. Les privat ini memiliki keunggulan
                yakni lebih personal dan interaktif.
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
                  <Card.Title className="text-center">
                    <FontAwesomeIcon className="icon-clip" icon={faPaperclip} />
                    <br />
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
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      TDR (Tutoring Daily Report) Harian
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
                  <Card.Title className="text-center">
                    <FontAwesomeIcon className="icon-pie" icon={faPieChart} />
                    <br />
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
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      TDR (Tutoring Daily Report) Harian
                    </li>
                    <li>
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      Modul Bahan Belajar
                    </li>
                    <li>
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      Try Out Progresif
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
                  <Card.Title className="text-center">
                    <FontAwesomeIcon
                      className="icon-square"
                      icon={faSquareArrowUpRight}
                    />
                    <br />
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
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      TDR (Tutoring Daily Report) Harian
                    </li>
                    <li>
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      Modul Bahan Belajar
                    </li>
                    <li>
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      Try Out Progresif
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
                <Card.Body>
                  <Card.Title className="text-center">
                    <FontAwesomeIcon className="icon-clip" icon={faPaperclip} />
                    <br />
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
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      TDR (Tutoring Daily Report) Harian
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
                  <Card.Title className="text-center">
                    <FontAwesomeIcon className="icon-pie" icon={faPieChart} />
                    <br />
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
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      TDR (Tutoring Daily Report) Harian
                    </li>
                    <li>
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      Modul Bahan Belajar
                    </li>
                    <li>
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      Try Out Progresif
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
                  <Card.Title className="text-center">
                    <FontAwesomeIcon
                      className="icon-square"
                      icon={faSquareArrowUpRight}
                    />
                    <br />
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
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      TDR (Tutoring Daily Report) Harian
                    </li>
                    <li>
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      Modul Bahan Belajar
                    </li>
                    <li>
                      <FontAwesomeIcon className="icon-cpns" icon={faCheck} />{" "}
                      Try Out Progresif
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

          <div className="pro-teacher">
            <img
              className="img-proteacher"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-561.jpg"
              alt=""
            />
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
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/TK-SD-SMP-SMA-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Les Privat TK, SD, SMP & SMA 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Les%20Privat%20TK,%20SD,%20SMP%20dan%20SMA.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>

              <Card style={{ border: "none" }} className="card-supercamp">
                <Card.Img
                  variant="top"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Bahasa-Asing-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Les Privat Bahasa Asing 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Private%20Bahasa%20Asing.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>

              <Card style={{ border: "none" }} className="card-supercamp">
                <Card.Img
                  variant="top"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Mahasiswa-Nasional-dan-Internasional-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>
                      Private for International School Students 2023
                    </strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Tutor%20for%20International%20School%20Students.%20Mohon%20info%20selengkapnya%20..."
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
                    href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Les%20Privat,%20Program%20Sukses%20Masuk%20FK%20dan%20PTN%202023.%20Mohon%20info%20selengkapnya%20..."
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

export default OnlineOffline;
