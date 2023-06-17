import React, { useEffect, useState } from "react";
import "./Akmil.css";
import Header from "../../Component/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsTurnRight,
  faCheck,
  faCircle,
  faFile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Card, Container } from "react-bootstrap";
import WaFloat from "../../Component/WaFloat/WaFloat";
import Footer from "../../Component/Footer/Footer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../Component/Animate/Animate";
import swal from "sweetalert";

const Akmil = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [akmil, setAkmil] = useState([]);
  const [fasilitas, setFasilitas] = useState([]);
  const [fasilitasakmil, setFasilitsAkmil] = useState([]);

  useEffect(() => {
    fetchFasilitasAkmil();
    fetchAkmil();
  }, []);

  const fetchAkmil = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/bimbelakmil`)
      .then((res) => res.json())
      .then((data) => {
        setAkmil(data.data);
        // console.log(data);
      });
  };

  const fetchFasilitasAkmil = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/fasilitasakmil`)
      .then((res) => res.json())
      .then((data) => {
        setFasilitsAkmil(data.data);
        // console.log(data);
      });
  };

  const ourMission = () => {
    swal({
      title: "Apa Itu Training Camp Edumatrix?",
      text: "Training EDUMATRIX adalah program bimbingan belajar dengan sistem karantina. Kami hadir sebagai partner terbaik bagi siswa dalam menyediakan program belajar terbaik untuk lolos tes AKMIL 2023.",
      button: "OK",
    });
  };

  const ourPhilosophy = () => {
    swal({
      title: "Siapa Tenaga Pengajarnya?",
      text: "Supercamp EDUMATRIX diselenggarakan oleh para profesional yang merupakan praktisi bimbel dengan ribuan siswa di Jabodetabek dan berbagai kota besar Indonesia. Kami hadir sebagai solusi untuk kebutuhan bimbingan belajar yang fokus untuk menghadapi tes masuk AKMIL.",
      button: "OK",
    });
  };

  const ourPromise = () => {
    swal({
      title: "Perbedaan dengan Bimbel Konvensional",
      text: "Sistem bimbel konvensional dan les privat masih perlu disempurnakan dengan sistem karantina yang membuat siswa jadi lebih fokus dalam menghadapi persiapan Test masuk AKMIL.",
      button: "OK",
    });
  };

  const ourValues = () => {
    swal({
      title: "Sistem Belajar Teruji",
      text: "Dengan sistem belajar yang teruji dan terbukti serta didukung oleh pengajar yang berpengalaman dan berkompeten, kami siap menjadi sahabat siswa dan partner terbaik orang tua untuk membantu lolos AKMIL.",
      button: "OK",
    });
  };

  return (
    <React.Fragment>
      <AnimatedPage>
        <Header />

        <div className="box-akmil">
          <Container>
            <div className="content-landing">
              <strong className="judul-kedokteran">Bimbel AKMIL</strong>
            </div>
          </Container>
        </div>

        <div className="box-dokprio">
          <h5 className="desk-kedokteran">
            “Bimbel AKMIL by <strong>EDUMATRIX INDONESIA</strong> adalah program
            Bimbel yang dikhususkan untuk Siswa yang ingin masuk ke AKMIL
            (Akademi Militer)”
          </h5>
        </div>

        <Container>
          <div className="parent-umptn">
            <h3 className="h3-bimpend">
              <strong>Keunggulan AKMIL</strong>
            </h3>
            <div className="box-bimpend">
              {akmil?.map((item, index) => (
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
                Training Camp Taruna Edumatrix Indonesia Priority Sukses Lolos
                AKMIL 2023
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
                  Belajar 4 Sesi per Hari Selama 4 Minggu
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Tempat Tinggal Selama Training Camp
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Penginapan saat tes AKMIL
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Modul Belajar Taruna AKMIL 2023
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
                  Free 30 Sesi Privat Online Pra-Karantina
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Try Out Setiap Hari
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Tryout Real Tes AKMIL 2023
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
                  Coaching Session - Sukses Masuk AKMIL 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Konsultasi Akademik Personal
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Tips & Trik Lulus Tes AKMIL 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Free Biaya Medical Check Up
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Free Biaya Psikotest
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Free Biaya Cek Postur Tubuh
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Free Fisioterapi 8 Kali
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Training KESEMAPTAAN
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Analisa dan Evaluasi Hasil Belajar setiap hari
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Free Konsultasi dan Pendampingan Tes AKMIL 2023
                </li>
                <li>
                  <FontAwesomeIcon className="icon-campedu" icon={faCheck} />
                  Souvenir Training Camp Edumatrix
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
                <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Training%20Camp%20AKMIL%202023.%20Mohon%20info%20selengkapnya%20...">
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
              <strong className="title-main">Bimbel AKMIL</strong>
            </h1>

            <h5 className="desk-main">
              Bimbel Persiapan Untuk Mengikuti Tes AKADEMI MILITER 2023. Dengan
              Sistem Belajar Intensif dan Tingkat Kelulusan yang Tinggi
            </h5>

            <div className="btn-konsul">
              <button className="konsul">
                <a href="tel:085600422188">Konsultasi Gratis</a>
              </button>
              <button className="proposal">
                <a href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20tahu%20mengenai%20Program%20Edumatrix%2C%20Bimbel%20AKMIL.%20Bagaimana%20penjelasan%20detail%20programnya%3F">
                  Tanya Program
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="title-our">
          <Container>
            <h4>
              Training Camp EDUMATRIX - Bimbel Terbaik Persiapan Masuk AKMIL
            </h4>
            <p>
              Butuh Bimbel yang bisa membantu kamu untuk lolos AKMIL?{" "}
              <strong>Edumatrix Indonesia</strong> adalah jawabannya. Tidak
              seperti Bimbel lainnya, Edumatrix Indonesia menawarkan sistem
              pembelajaran yang efektif dan juga lebih intens. Dimana kami
              menggunakan sistem private dan small class yang dikombinasikan.
              <br />
              <br />
              Ini dilakukan demi bisa menciptakan suasana belajar yang kondusif,
              interaktif dan pastinya lebih efisien. Dibuktikan dengan beberapa
              <strong>program belajar terbaik</strong> yang ditawarkan Edumatrix
              Indonesia. Seperti privat bimbel online, privat bimbel offline
              hingga Supercamp. Edumatrix Indonesia adalah pilihan terbaik untuk
              kamu yang ingin lolos masuk ke <strong>AKMIL.</strong>
              <br />
              <br />
              Karena sistem <strong>bimbel konvensional</strong> dan les privat
              masih <strong>perlu disempurnakan dengan sistem karantina</strong>{" "}
              yang membuat peserta jadi lebih fokus dalam menghadapi tes masuk
              BUMN. Dengan sistem belajar yang teruji dan terbukti serta
              didukung oleh pengajar yang berpengalaman dan berkompeten, kami
              siap membantu kamu mewujudkan mimpi untuk lolos AKMIL.
            </p>
          </Container>
          <div className="btn-umptnkin">
            <button className="btn-alert" onClick={() => ourMission()}>
              Apa Itu Training Camp Edumatrix?
            </button>
            <button className="btn-alert" onClick={() => ourPhilosophy()}>
              Siapa Tenaga Pengajarnya?
            </button>
            <button className="btn-alert" onClick={() => ourPromise()}>
              Perbedaan dengan Bimbel Konvensional
            </button>
            <button className="btn-alert" onClick={() => ourValues()}>
              Sistem Belajar Teruji
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
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/AKPOL-1-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Program Training Camp AKPOL 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Training%20Camp%20AKPOL%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/AKMIL-1-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Program Training Camp AKMIL 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Program%20Training%20Camp%20AKMIL%202023.%20Mohon%20info%20selengkapnya%20..."
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
                  <strong>Program Training Camp Sekolah Kedinasan 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281216365729&text=Halo%20Kak%20Aulia,%20saya%20ingin%20daftar%20Program%20Training%20Camp%20Sekolah%20Kedinasan%202023.%20Mohon%20info%20selengkapnya%20..."
                  className="btn-chatnowsupercamp"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-supercamp">
              <Card.Img
                variant="top"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/CPNS-2-600x600.jpg"
              />
              <Card.Body className="card-edumatrix">
                <Card.Title>
                  <strong>Bimbel Tes CPNS 2023</strong>
                </Card.Title>
                <br />
                <a
                  href="https://web.whatsapp.com/send?phone=6281215523902&text=Halo%20Kak%20Eka,%20saya%20ingin%20daftar%20Bimbel%20Tes%20CPNS%202023.%20Mohon%20info%20selengkapnya%20..."
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

            <h5>
              <strong>
                Privat akademik offline, online & kesemaptaan (online)
              </strong>
            </h5>
            <br />
            <p>
              Edumatrix Indonesia juga menyediakan program privat akademik
              offline, online & kesemaptaan (online). Khusus untuk kesemaptaan
              ini maka tersedia dalam pilihan online yang membuat guru dan siswa
              bisa melakukan pembelajaran dari jarak jauh. Nantinya master
              teacher kami akan memberikan materi pelajaran kesemaptaan melalui
              video ekslusif dan bisa diakses secara online hanya oleh siswa.
            </p>

            <h5>
              <strong>Training Camp Edumatrix Indonesia</strong>
            </h5>
            <br />
            <p>
              Training Camp Edumatrix Indonesia adalah program belajar karantina
              yang memfokuskan pembelajaran secara lebih intens. Dengan program
              belajar Small Class yang terstruktur untuk mendapatkan hasil
              belajar yang berkualitas dan juga memaksimalkan potensi setiap
              siswa.
            </p>
          </div>
        </Container>

        <Container>
          <div className="jadwal-kegiatan">
            <h2>
              <strong>Jadwal Kegiatan</strong>
            </h2>
            <p>
              Berikut merupakan gambaran untuk jadwal kegiatan Training Camp
              yang akan diadakan di Yogyakarta
            </p>

            <Container>
              <div className="img-jadwal">
                <img
                  className="item-jadwal"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Frame-636-800x1009.jpg"
                  alt=""
                />
                <img
                  className="item-jadwal"
                  src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/Frame-550-800x1066.jpg"
                  alt=""
                />
              </div>
            </Container>
          </div>
        </Container>

        <Container>
          <div className="fasilitas-program">
            <h3>Fasilitas Program</h3>
            {fasilitasakmil.map((item, index) => (
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
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Analisa dan Evaluasi Hasil Belajar setiap hari.
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Laporan dan Evaluasi Hasil Belajar setiap minggu.
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Setiap Siswa Dipantau 24 jam oleh Koordinator pembimbing
              masing-masing siswa-siswi.
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Motivation Training Program untuk menambah semangat belajar siswa.
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Garansi Penggantian Pengajar jika merasa tidak cocok*.
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Layanan Laundry.
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Antar Jemput ke Lokasi Ujian (Jabodetabek).
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Bimbingan dan Arahan Strategi Belajar Efektif.
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Bimbingan Informasi dalam Tes Masuk AKMIL
            </p>
            <p>
              <FontAwesomeIcon
                className="icon-fasilitas"
                icon={faArrowsTurnRight}
              />{" "}
              Dibimbing sampai dengan diterima di AKMIL
            </p>
          </div>
        </Container>

        <div className="box-jabodetabek">
          <Container>
            <h1 className="title-jabodetabek">
              <strong>Pilih Tempat Bimbel AKMIL Terbaik di Kotamu</strong>
            </h1>
            <div className="akmil-jabodetabek">
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Depok
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Bogor
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Tangerang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Tangerang Selatan
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Bekasi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Malang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Tasikmalaya
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Cimahi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Sukabumi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Cirebon
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Flores
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Solo
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Pekalongan
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Purwokerto
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Banjarmasin
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Batam
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Bukittinggi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Belitung
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Pare-Pare
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Bau-Bau
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Tegal
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Ternate
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Lhokseumawe
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Binjai
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Pematang Siantar
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Payakumbuh
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Solok
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Padang Panjang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Dumai
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Garut
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Banjarnegara
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Klaten
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Blora
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Lamongan
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Blora
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Sumenep
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Kendal
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Madiun
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Sragen
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Blitar
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Jember
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Probolinggo
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Banyuwangi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Cilegon
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Madura
              </li>
            </div>
          </Container>
        </div>

        <div className="box-kota">
          <Container>
            <h1 className="title-kota">
              <strong>
                Pilih Tempat Bimbel AKMIL Terbaik di Ibukota Indonesia
              </strong>
            </h1>
            <div className="akmil-kota">
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Yogyakarta
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Ambon
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Banda Aceh
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Lampung
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> East Jakarta City
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Bandung
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Banjarbaru
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Bengkulu
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Denpasar
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Gorontalo
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Jakarta
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Jambi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Jayapura
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Kendari
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Kupang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Manado
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Manokwari
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Mataram
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Medan
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Merauke
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Nabire
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Padang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Palangkaraya
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Palembang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Palu
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Pangkalpinang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Pekanbaru
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Pontianak
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Samarinda
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Semarang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Serang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Sofifi
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Sorong
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Surabaya
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Tanjung Selor
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Tanjungpinang
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Wamena
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsTurnRight} /> Mamuju
              </li>
            </div>
          </Container>
        </div>

        <Container>
          <div className="asked-question">
            <h3 className="text-center">
              <strong>Frequently Asked Questions</strong>
            </h3>
            <Accordion className="all-acordion">
              <Accordion.Item style={{border: "none", borderBottom: "1px solid rgb(191, 191, 191)"}} eventKey="0">
                <Accordion.Header>
                  <strong>Apa itu Bimbel AKMIL by Edumatrix Indonesia?</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Bimbel AKMIL by Edumatrix Indonesia adalah program bimbingan
                  belajar khusus untuk persiapan masuk Akademi Militer (AKMIL)
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{border: "none", borderBottom: "1px solid rgb(191, 191, 191)"}} eventKey="1">
                <Accordion.Header>
                  <strong>
                    Apa saja yang disediakan dalam Bimbel AKMIL by Edumatrix
                    Indonesia?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Program Bimbel AKMIL by Edumatrix Indonesia menyediakan
                  berbagai materi belajar, latihan soal, try out, dan bimbingan
                  konsultasi dari guru-guru ahli yang telah berpengalaman dalam
                  persiapan masuk AKMIL
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{border: "none", borderBottom: "1px solid rgb(191, 191, 191)"}} eventKey="3">
                <Accordion.Header>
                  <strong>
                    Apa itu Program Training Camp Edumatrix Indoensia?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  <strong>Program Training Camp EDUMATRIX</strong> adalah
                  program persiapan untuk lulus ujian AKPOL, AKMIL, Sekolah
                  Kedinasan maupun yang lainnya dengan{" "}
                  <strong>Sistem Karantina.</strong>
                  <br />
                  <br />
                  Disebut Program Training camp karena program menginap selama
                  waktu tertentu dan didampingi TIM KHUSUS Sukses Masuk AKPOL,
                  AKMIL maupun Sekolah Kedinasan untuk meningkatkan skill dan
                  kemampuan dalam mengerjakan soal maupun meningkatkan kemampuan
                  fisik.
                  <br />
                  <br />
                  Dengan target utama yaitu masuk AKPOL, AKMIL maupun Sekolah
                  Kedinasan yang diinginkan.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{border: "none", borderBottom: "1px solid rgb(191, 191, 191)"}} eventKey="4">
                <Accordion.Header>
                  <strong>Apa bedanya Training Camp dengan SuperCamp?</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Training Camp dan Supercamp memiliki kesamaan dalam hal
                  menggunakan sistem belajar karantina bagi setiap siswanya.
                  Bedanya, Training Camp memiliki program belajar Kesemaptaan
                  baik offline maupun online.
                  <br />
                  <br />
                  Seperti yang diketahui bahwa Kesemaptaan ini menjadi ujian
                  wajib bagi siswa yang ingin mendaftar di AKPOL, AKMIL maupun
                  Sekolah Kedinasan. Sehingga Edumatrix Indonesia menyediakan
                  program khusus Kesemaptaan bagi siswa yang ingin mendaftar
                  AKPOL, AKMIL maupun Sekolah Kedinasan.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{border: "none", borderBottom: "1px solid rgb(191, 191, 191)"}} eventKey="5">
                <Accordion.Header>
                  <strong>
                    Siapa yang dapat mengikuti program Bimbel AKMIL by Edumatrix
                    Indonesia?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Program Edumatrix Indonesia Bimbel AKMIL dapat diikuti oleh
                  calon siswa/siswi yang ingin mempersiapkan diri untuk masuk
                  Akademi Militer (AKMIL)
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{border: "none", borderBottom: "1px solid rgb(191, 191, 191)"}} eventKey="6">
                <Accordion.Header>
                  <strong>
                    Bagaimana cara mendaftar di Bimbel AKMIL by Edumatrix
                    Indonesia?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Anda dapat menghubungi tim kami pada tombol Contact Us untuk
                  mendapatkan bantuan dalam mendaftar program Bimbel AKMIL
                  maupun bimbel yang lainnya.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{border: "none", borderBottom: "1px solid rgb(191, 191, 191)"}} eventKey="7">
                <Accordion.Header>
                  <strong>
                    Apa saja metode pembayaran yang diterima di bimbel AKMIL by
                    Edumatrix Indoesia?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Edumatrix Indonesia Bimbel AKMIL menerima pembayaran dengan
                  transfer bank dan cash.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{border: "none", borderBottom: "1px solid rgb(191, 191, 191)"}} eventKey="8">
                <Accordion.Header>
                  <strong>
                    Apakah Bimbel AKMIL by Edumatrix Indonesia menyediakan ujian
                    try out?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Ya, Edumatrix Indonesia Bimbel AKPOL menyediakan ujian try out
                  sebagai bentuk simulasi ujian masuk AKMIL
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item style={{border: "none"}} eventKey="9">
                <Accordion.Header>
                  <strong>
                    Bagaimana jika saya mengalami kesulitan atau pertanyaan
                    selama mengikuti program Bimbel AKMIL by Edumatrix
                    Indonesia?
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Anda dapat menghubungi tim dukungan pelanggan kami melalui
                  email atau telepon untuk mendapatkan bantuan dalam mengatasi
                  masalah atau kesulitan yang Anda hadapi selama mengikuti
                  program Bimbel AKMIL by Edumatrix Indonesia.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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

export default Akmil;
