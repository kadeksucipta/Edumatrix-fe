import React from "react";
import "./BimbelPendidikan.css";
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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import WaFloat from "../../Component/WaFloat/WaFloat";
import Footer from "../../Component/Footer/Footer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const BimbelPendidikan = () => {
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
            <strong>Bimbel Privat TK, SD, SMP, & SMA</strong>
          </h1>
        </div>

        <Container>
          <div className="content-cpns">
            <img
              className="img-cpns"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/02/TK-SD-SMP-SMA-1.jpg"
              alt=""
            />
            <div className="text-cpns">
              <h1>
                <strong>Bimbel Privat TK, SD, SMP, & SMA</strong>
              </h1>
              <h5 className="h5-cpns">
                Proses pembelajaran tentunya tidak terbatas pada level jenjang
                pendidikan tertentu saja. Setiap jenjang pendidikan pastinya
                membutuhkan proses pembelajaran yang berkelanjutan dan intensif.
                <br />
                <br />
                Tidak berhenti hanya pada pendidikan di ruang kelas semata,
                namun pendidikan ekstra di luar ruang kelas juga dibutuhkan. Hal
                ini bertujuan untuk mendapatkan proses pembelajaran yang lebih
                maksimal dan siswa menjadi lebih kompeten.
                <br />
                <br />
                Tujuan tersebut bisa dicapai dengan mengikuti Bimbel terpercaya
                dan pastinya terbaik. Tidak terkecuali untuk mereka yang berada
                di jenjang pendidikan TK, SD, SMP & SMA.
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
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/TK-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Program Belajar Private TK 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Belajar%20Privat%20TK%202023.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>

              <Card style={{ border: "none" }} className="card-supercamp">
                <Card.Img
                  variant="top"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/SD-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Program Belajar Private SD 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Belajar%20Privat%20SD%202023.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>

              <Card style={{ border: "none" }} className="card-supercamp">
                <Card.Img
                  variant="top"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/SMP-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Program Belajar Private SMP 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20Program%20Belajar%20Privat%20SMP%202023.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>

              <Card style={{ border: "none" }} className="card-supercamp">
                <Card.Img
                  variant="top"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/SMA-600x600.jpg"
                />
                <Card.Body className="card-edumatrix">
                  <Card.Title>
                    <strong>Program Belajar Private SMA 2023</strong>
                  </Card.Title>
                  <br />
                  <a
                    href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Les%20Privat,%20Program%20Belajar%20Private%20SMA%202023.%20Mohon%20info%20selengkapnya%20..."
                    className="btn-chatnowsupercamp"
                  >
                    <strong>Chat Us Now!</strong>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
        <Container>
          <div className="program-pembelajaran">
            <h2>
              <strong>Program Pembelajaran</strong>
            </h2>
            <br />
            <h5>
              <strong>Privat Akademik Offline & Online</strong>
            </h5>
            <br />
            <p>
              <strong>Edumatrix Indonesia</strong> menyediakan program
              pembelajaran secara offline & online yang bisa dipilih sesuai
              kebutuhan siswa. Seperti private akademik online yang memungkinkan
              proses pembelajaran bisa dilakukan jarak jauh. Selain akan lebih
              efektif waktu, program privat belajar online ini juga memiliki
              keuntungan lainnya.
              <br />
              <br />
              Seperti proses pembelajaran akan berjalan sangat intensif karena
              menggunakan sistem one on one. Artinya satu guru untuk siswa.
              Dengan pendekatan ini, maka proses pembelajaran akan terjadi
              secara lebih baik dan menguntungkan bagi peserta.
              <br />
              <br />
              Ditambah setiap peserta yang mengikuti akan mendapatkan modul
              pelajaran, e-book materi hingga rekaman proses pembelajaran. Hal
              itu bisa dimanfaatkan untuk mengulang materi pembelajaran secara
              mandiri untuk hasil yang lebih maksimal.
              <br />
              <br />
              Sedangkan untuk private belajar ini juga bisa dilakukan offline
              untuk mempertemukan guru dan siswa di tempat yang sama.
            </p>

            <br />
            <h2>
              <strong>Mengapa Sistem Belajarnya Private?</strong>
            </h2>
            <p>
              Kami percaya bahwa sistem belajar yang berhasil adalah ketika
              program belajar dijalankan secara intens dan memberikan kenyamanan
              bagi pengajar maupun siswa. Hal ini kami wujudkan dengan sistem
              belajar private di Edumatrix Indonesia. Sistem belajar private ini
              dirancang untuk mendukung kebutuhan siswa demi belajar yang lebih
              interaktif dan suportif.
            </p>
          </div>
        </Container>
        <div className="pro-teacher">
          <img
            className="img-proteacher"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-561.jpg"
            alt=""
          />
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

export default BimbelPendidikan;
