import React, { useEffect, useState } from "react";
import "./Umptnkin.css";
import Header from "../../Component/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowsTurnRight,
  faCheck,
  faCircle,
  faCircleDot,
  faDotCircle,
  faFile,
  faPhone,
  faTurnDown,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Container } from "react-bootstrap";
import WaFloat from "../../Component/WaFloat/WaFloat";
import Footer from "../../Component/Footer/Footer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../Component/Animate/Animate";
import swal from "sweetalert";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const Umptnkin = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [umptkin, setUmptkin] = useState([]);
  const [success, setSuccess] = useState([]);
  const [fasilitas, setFasilitas] = useState([]);

  useEffect(() => {
    fetchUmptkin();
    fetchFasilitas();
  }, []);

  const fetchUmptkin = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/umptkin`)
      .then((res) => res.json())
      .then((data) => {
        setUmptkin(data.data);
        // console.log(data);
      });
  };

  const fetchFasilitas = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/fasilitas`)
      .then((res) => res.json())
      .then((data) => {
        setFasilitas(data.data);
        // console.log(data);
      });
  };

  const ourMission = () => {
    swal({
      title: "Our Mission",
      text: "Menjadi lembaga bimbingan belajar Masuk Perguruan Tinggi Negeri yang terpercaya, terbaik, dan terdepan di Indonesia.",
      button: "OK",
    });
  };

  const ourPhilosophy = () => {
    swal({
      title: "Our Philosophy",
      text: "Kesuksesan itu BERPOLA, kita harus menerapkan POLA Sukses Masuk PTN yang telah teruji dan terbukti. Dengan success rate 90%, didukung tim pengajar yang berkompeten dan berpengalaman, kami siap membantumu meraih masa depan cerah..",
      button: "OK",
    });
  };

  const ourPromise = () => {
    swal({
      title: "Our Promise",
      text: "Kami akan membuat sistem belajar yang personal, sistematis, terstruktur, holistik, dan dipetakan berdasarkan target PTN Anda. Target Program EDUMATRIX Indonesia adalah kesuksesan Anda dalam meraih Jurusan dan PTN yang diinginkan.",
      button: "OK",
    });
  };

  const ourValues = () => {
    swal({
      title: "Our Promise",
      text: "Kami selalu menginternalisasikan value-value berikut dalam perusahaan : - Integrity - Expert - Professional",
      button: "OK",
    });
  };

  return (
    <React.Fragment>
      <AnimatedPage>
        <Header />

        <div className="box-kedokteran">
          <img
            className="img-kedokteran"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/Cover-tengah-1-800x450.jpg"
            alt=""
          />
          <h1 className="title-kedokteran">
            {/* <strong>Bimbel UMPTKIN</strong> */}
          </h1>
        </div>

        <div className="box-dokprio">
          <h5 className="desk-kedokteran">
            “Bimbel UMPTKIN by <strong>EDUMATRIX INDONESIA</strong> adalah
            program Bimbel yang dikhususkan untuk Siswa yang ingin lolos tes
            masuk PTKIN (Perguruan Tinggi Keagamaan Islam Negeri) favorit”
          </h5>
        </div>

        <Container>
          <div className="parent-umptn">
            <h3 className="h3-bimpend">
              <strong>Keunggulan Masuk PTKIN</strong>
            </h3>
            <div className="box-bimpend">
              {umptkin?.map((item, index) => (
                <div className="keunggulan-bimpend">
                  <Card className="card-utbk" key={index}>
                    <Card.Body>
                      <Card.Title>
                        <strong>{item.name}</strong>
                      </Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <div className="supercamp-dok">
          <Card className="card-priodok">
            <Card.Title className="header-priority">
              <strong>
                Supercamp Edumatrix Indonesia Priority Sukses UMPTN 2023
              </strong>
            </Card.Title>
            <Card.Body>
              <Card.Text className="column-kedokteran">
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Sistem Belajar Small Class
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Belajar 4 Sesi per Hari Selama 4-6 Minggu
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Tempat Tinggal Selama Tes
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Penginapan saat tes UMPTKIN
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Modul Belajar UMPTKIN 2023
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
                  Tryout Real Tes UMPTKIN 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Workshop TPA Mastery
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Workshop Engglish Master
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
                  Coaching Session - Sukses Masuk UMPTKIN 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Konsultasi Akademik Personal
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Tips & Trik Lulus Tes UMPTKIN 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Free Biaya Pendaftaran UMPTKIN 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Free Biaya Psikotest
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Training
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Analisa dan Evaluasi Hasil Belajar setiap hari
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Free Konsultasi dan Pendampingan Tes UMPTKIN 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Akomodasi, Makan & Laundry saat karantina
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Dibimbing Mentor Profesional
                </li>
              </Card.Text>
              <button className="btn-priority">
                <a href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20program%20UMPTN%202023.%20Mohon%20info%20selengkapnya%20...">
                  <strong>Pilih Paket</strong>
                </a>
              </button>
            </Card.Body>
          </Card>
        </div>

        <div className="box-mainedu">
          <img
            className="img-main"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/bimbel-masuk-ptn-2023-1200x800.jpg"
            alt=""
          />
          <div className="overlay-text">
            <h1>
              <strong className="title-main">Bimbel UMPTKIN</strong>
            </h1>

            <h5 className="desk-main">
              Bimbel Persiapan untuk Lolos Tes Masuk PTKIN Favorit di Indonesia.
              Dengan Sistem Belajar Intensif dan Tingkat Kelulusan yang Tinggi
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

        <div className="title-our">
          <Container>
            <h4>
              Supercamp EDUMATRIX - Bimbel Spesialis Masuk UI ITB UGM & PTN
              Favorit
            </h4>
            <p>
              <strong>Supercamp EDUMATRIX</strong> adalah program bimbingan
              belajar dengan <strong>sistem karantina</strong>. Kami hadir
              sebagai partner terbaik bagi siswa untuk menyediakan program
              bimbingan masuk UI, ITB, UGM, IPB, Unair, ITS, Undip, Unpad, &
              Perguruan Tinggi Negeri Favorit.
              <br />
              <br />
              <strong>Supercamp EDUMATRIX</strong>
              diselenggarakan oleh Alumni Universitas Indonesia yang merupakan
              praktisi bimbel dengan ribuan siswa di Jabodetabek dan berbagai
              kota besar Indonesia. Kami hadir sebagai solusi untuk kebutuhan
              bimbingan belajar yang fokus untuk menghadapi{" "}
              <strong> UTBK SNBT/SBMPTN</strong> dan Ujian Mandiri seperti{" "}
              <strong>Simak UI, UTUL UGM, UTM IPB, SMUP Unpad</strong> dan
              lainnya.
              <br />
              <br />
              Sistem <strong>bimbel konvensional</strong> dan les privat masih{" "}
              <strong>perlu disempurnakan dengan sistem karantina</strong> yang
              membuat siswa jadi lebih fokus dalam menghadapi tes masuk PTN.
              Dengan sistem belajar yang teruji dan terbukti serta didukung oleh
              pengajar yang berpengalaman dan berkompeten, kami siap menjadi
              sahabat siswa dan partner terbaik orang tua untuk membantu meraih
              PTN yang diinginkan.
            </p>
          </Container>
          <div className="btn-umptnkin">
            <button className="btn-alert" onClick={() => ourMission()}>
              Our Mission
            </button>
            <button className="btn-alert" onClick={() => ourPhilosophy()}>
              Our Philosophy
            </button>
            <button className="btn-alert" onClick={() => ourPromise()}>
              Our Promise
            </button>
            <button className="btn-alert" onClick={() => ourValues()}>
              Our Values
            </button>
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

          {/* #1 */}
          <div className="program-supercamp1">
            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-ALAUDDIN-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN ALAUDDIN 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20ALAUDDIN%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-WALISONGO-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN WALISONGO 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20WALISONGO%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-SYARIF-HIDAYATULLAH-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN Jakarta 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20SYARIF%20HIDAYATULLAH%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-SUNAN-GUNUNG-DJATI-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel UIN PTKIN SGD 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20SUNAN%20GUNUNG%20DJATI%202023.%20Mohon%20info%20selengkapnya%20..."
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
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-SUNAN-KALIJAGA-600x601.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN SUKA 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20SUNAN%20KALIJAGA%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-SUNAN-AMPEL-600x601.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UINSA 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20SUNAN%20AMPEL%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-SUMATERA-UTARA-600x601.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN SUMUT 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20SUMATERA%20UTARA%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-SULTHAN-THAHA-SAIFUDDIN-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN STS Jambi 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20STS%20Jambi%202023.%20Mohon%20info%20selengkapnya%20..."
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
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-SULTAN-SYARIF-KASIM-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN SUSKA 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20SULTAN%20SYARIF%20KASIM%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-RADEN-INTAN-600x601.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN RADEN INTAN 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20RADEN%20INTAN%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-MAULANA-MALIK-IBRAHIM-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN MALANG 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20PTKIN%20UIN%20Malang%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/UIN-AR-RANIRY-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel PTKIN UIN AR RANIRY 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Bimbel%20PTKIN%20UIN%20AR%20RANIRY%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>

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
          </div>
        </Container>

        <div className="pro-teacher">
          <img
            className="img-proteacher"
            src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Group-561.jpg"
            alt=""
          />
        </div>

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
          <div className="box-story">
            <h3>Success Stories...</h3>
            <p>
              Tim kami telah membantu siswa diterima di berbagai jurusan
              berikut:
            </p>
            <div className="bagi-success">
              <div className="column-success">
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Akuntansi Undip Internasional
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Farmasi ITB Internasional
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Sipil ITS Internasional
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Kimia ITS Internasional
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UGM
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FKG UGM
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FKH UGM
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FKG UB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UNDIP
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FKG UNAIR
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UNPAD
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FKG UNPAD
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UNSOED
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Hukum UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UNSYIAH
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UIN Jakarta
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FKH Udayana
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UNHAS
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UNSRI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UNLAM
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK UNAND
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FK Universitas Palangkaraya
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Psikologi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Akuntansi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Gizi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Metalurgi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Ekonomi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Industri UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  STEI ITB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  FTTM ITB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  SBM ITB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Arsitektur ITB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Industri dan Pertanian IPB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Biokimia IPB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Managemen UB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Statistik UB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Hukum UB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Informatika UNDIP
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Hukum UNDIP
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Akuntansi UNAIR
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Psikologi UNPAD
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Elektro ITS
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Perkapalan ITS
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Informatika ITS
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Informatika UPN Veteran Jakarta
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Industri UNS
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Hukum USU
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  PGSD UNJ
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Ilmu Ekonomi UGM
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Akuntansi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Ilmu Ekonomi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Komunikasi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Arsitektur UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Arsitektur Unair
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Industri UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Hukum UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Psikologi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Fasilkom UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Matematika UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Biologi UI
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Akuntansi UGM
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Geofisika ITB
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Tek Geofisika ITS
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Tek Perkapalan ITS
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  Teknik Geologi UNDIP
                </h6>
                <h6 className="item-success">
                  <FontAwesomeIcon className="icon-success" icon={faCircle} />{" "}
                  dan PTN Terbaik lainnya
                </h6>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="img-alumni">
            <img
              className="img-itemalumni"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/siswa-bimbel-snbt.jpg"
              alt=""
            />
            <img
              className="img-itemalumni"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/siswa-bimbel-snbt-2.jpg"
              alt=""
            />
            <img
              className="img-itemalumni"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/siswa-bimbel-snbt-3.jpg"
              alt=""
            />
            <img
              className="img-itemalumni"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/siswa-bimbel-snbt-4.jpg"
              alt=""
            />
          </div>
        </Container>

        <Container>
          <div className="fasilitas-program">
            <h3>Fasilitas Program</h3>
            {fasilitas.map((item, index) => (
              <div key={index}>
                <p>
                  <FontAwesomeIcon
                    className="icon-fasilitas"
                    icon={faArrowsTurnRight}
                  />{" "}
                  {item.name}
                </p>
              </div>
            ))}
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

export default Umptnkin;