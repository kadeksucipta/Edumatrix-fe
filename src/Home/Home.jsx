import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Home.css";
import { Button, Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCheck,
  faCheckCircle,
  faFile,
  faLocationDot,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Carausel from "../Component/Carousel/Carausel";
import Footer from "../Component/Footer/Footer";
import Dropdown from "../Component/Dropdown/Dropdown";
import Kecamatan from "../Component/Kecamatan/Kecamatan";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../Component/Animate/Animate";
import { setUserData } from "../App/features/Login/Actions";
import WaFloat from "../Component/WaFloat/WaFloat";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };
  const goToUlasan = () => {
    navigate("/Ulasan");
  };
  const goToProfileTutor = () => {
    navigate("/ProfileTutor");
  };
  const goToContactKami = () => {
    navigate("/ContactKami");
  };
  const goToTentangKami = () => {
    navigate("/TentangKami");
  };
  const goToCampEdu = () => {
    navigate("/CampEdu");
  };
  const goToCpns = () => {
    navigate("/Cpns");
  };
  const goToBumn = () => {
    navigate("/Bumn");
  };
  const goToSmaUnggul = () => {
    navigate("/SmaUnggul");
  };
  const goToPpds = () => {
    navigate("/Ppds");
  };
  const goToHomeSchool = () => {
    navigate("/HomeSchool");
  };
  const goToIgcse = () => {
    navigate("/Igcse");
  };
  const goToIht = () => {
    navigate("/Iht");
  };
  const goToOnlineOffline = () => {
    navigate("/OnlineOffline");
  };
  const goToBimbelPendidikan = () => {
    navigate("/BimbelPendidikan");
  };
  const goToPrivateMahasiswa = () => {
    navigate("/PrivateMahasiswa");
  };
  const goToPrivatIslam = () => {
    navigate("/PrivatIslam");
  };

  const [user, setUser] = useState({
    username: "",
    pesan: "",
    rating: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [review, setReveiew] = useState([]);
  const [data, setData] = useState([]);

  // STATE ULASAN
  const [ulasan, setUlasan] = useState([]);

  useEffect(() => {
    fetchReview();
    fetchData();
    fetchGetUlasan();
  }, []);

  const fetchReview = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setReveiew(data.data);
        // console.log(data);
      });
  };

  const fetchData = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/tags`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        // console.log(data);
      });
  };

  // PANGGIL DATA ULASAN
  const fetchGetUlasan = () => {
    // const payload = {...user}
    // payload.languages = payload.languages.join (",")
    console.log(user);
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/dataulasan`, {
      method: "GET",
      // body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setUserData({ user: data?.user, token: data?.token }));

        createItem(data);
        setUlasan(data);
        console.log(data);
      });
  };

  const createItem = (data) => {
    localStorage.setItem("userData", JSON.stringify(data?.user));
    localStorage.setItem("token", data?.token);
  };

  return (
    <React.Fragment>
      <AnimatedPage>
        <Navbar className="custom-nav" bg="none" expand="lg">
          <Container>
            <Navbar.Brand>
              <img
                src="https://bimbelsnbt.com/wp-content/uploads/2022/12/logo-header.png"
                width="120"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="nav-all" id="basic-navbar-nav">
              <Container>
                <Nav className="isi-navbar">
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => goToProfileTutor()}>
                      Pofile Tutor
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToContactKami()}>
                      Kontak Kami
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToTentangKami()}>
                      Tentang Kami
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Bimbingan Belajar"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={() => goToCampEdu()}>
                      CAMP EDUMATRIX
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToCpns()}>
                      Bimbel CPNS
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => goToBumn()}>
                      Bimbel BUMN
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToSmaUnggul()}>
                      Bimbel SMA Unggulan
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToPpds()}>
                      Bimbel PPDS
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToHomeSchool()}>
                      HomeSchooling
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToIgcse()}>
                      IGCSE, O Level, A Level & IB Tutor Jakarta
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToIht()}>
                      In House Training
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Privat" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => goToOnlineOffline()}>
                      Les Privat (Online/Offline)
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToBimbelPendidikan()}>
                      Bimbel Privat TK, SD, SMP & SMA
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToPrivateMahasiswa()}>
                      Les Privat Mahasiswa Nasional & Internasional
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => goToPrivatIslam()}>
                      Les Privat Agama Islam
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      Les Privat Komputer & IT
                    </NavDropdown.Item>
                    <NavDropdown.Item>Les Privat Musik</NavDropdown.Item>
                    <NavDropdown.Item>
                      Les Privat TK, SD, SMP, SMA, UTBK, SNBT Terbaik
                    </NavDropdown.Item>
                    <NavDropdown.Item>Les Privat BIPA</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Container>
              <Button
                onClick={() => goToPendaftaran()}
                style={{
                  background: "orange",
                  border: "1px solid transparent",
                }}
                className="daftar"
              >
                <strong>Pendaftaran</strong>
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* ISI */}
        <Container>
          <div className="content">
            <div className="img-teks">
              <img
                src="https://executive-education.id/wp-content/uploads/2022/01/les-privat-sd-smp-sma-4.jpeg"
                width="100%"
                className="img-isi"
                alt="React Bootstrap logo"
              />
              <h1 className="title-image">
                Bimbel masuk PTN Edumatrix Indonesia • SMA/SMK sederajat •
                Dengan sistem belajar ONE on ONE
              </h1>
              <Dropdown />
              <p className="desk-1">
                Merasa sulit untuk mendapatkan PTN impian? Tes berkali - kali
                tetapi tidak ada hasil? seiring semangat belajar yang semakin
                berkurang? Mempercayakan Edumatrix Indonesia sebagai tempat
                belajar adalah pilihan tepat dan akurat!
              </p>
              <p className="desk-2">
                Hal ini dikarenakan EDUMATRIX INDONESIA hanya memilih tenaga
                pengajar terbaik untuk melatih setiap siswanya. Setiap tenaga
                pengajar yang dipilih tergolong masih muda dan sangat
                berpengalaman di bidangnya. Jadi bisa dipastikan, setiap siswa
                akan mendapatkan pembelajaran terbaik dari ahlinya.
                <hr />
                Metode Belajar yang digunakan yaitu one on one (1 siswa 1
                mentor). Program belajar didesain secara sistematis,
                terstruktur, terukur dan teruji. Pembelajaran Tematik berdasar
                Statistik Soal yang diujikan. Fokus menerapkan Pola Sukses yang
                sudah proven.
                <hr />
                Modul belajar lengkap, Sistematis dan Prediktif terhadap
                soal-soal yang kemungkinan besar akan muncul di tes AKPOL.
                Selain itu juga dilengkapi dengan Try Out Progresif untuk
                mengukur tingkat keberhasilan siswa.
                <hr />
                Dengan program yang proven, didesain secara sistematis,
                terstruktur, terukur dan teruji, kami siap memberikan support
                terbaik untuk siswa. Komitmen kami yaitu memberikan layanan
                terbaik agar siswa dapat meraih target yaitu lulus tes.
                <hr />
                Edumatrix Indonesia bukan hanya memiliki tenaga pengajar yang
                berkualitas tapi dari segi kuantitas juga bisa diandalkan.
                Dimana Edumatrix Indonesia memiliki 5000 lebih guru privat
                profesional yang tersebar di seluruh Indonesia.
                <hr />
                Tenaga pengajar yang dimiliki oleh Edumatrix Indonesia tidaklah
                sembarangan. Namun tenaga pengajar yang terpilih dari berbagai
                PTN terbaik di Indonesia. Kami percaya bahwa kesuksesan siswa
                selalu dimulai dari tenaga pengajar yang kompeten, profesional
                dan pastinya berkualitas.
                <hr />
                Kami percaya bahwa setiap siswa pastinya memiliki kebutuhan
                belajar yang berbeda-beda. Menjawab kebutuhan tersebut,
                Edumatrix Indonesia menyiapkan berbagai program belajar yang
                bisa dipilih sesuai kebutuhan siswa. Hal inilah yang membuat
                Edumatrix Indonesia adalah Bimbel terlengkap dan terbaik.
                <hr />
                Pembelajaran yang berhasil jelas tidak bisa dilepaskan dari
                kesinambungan antara guru dan siswa. Faktor kecocokan inilah
                yang membuat proses belajar menjadi lebih menyenangkan. Sehingga
                Edumatrix Indonesia membebaskan siswa untuk memilih guru yang
                sesuai dengan kebutuhan dan referensi belajarnya.
              </p>
              <h1>Kriteria Bimbingan belajar di Edumatrix Indonesia</h1>
              <div>
                <iframe
                  className="ratio-yt"
                  src="https://www.youtube.com/embed/brdqCGOwIWo"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>

              <ListGroup className="list-edu" as="ol">
                <ListGroup.Item as="ol" active>
                  <FontAwesomeIcon icon={faCheckCircle} /> Menghadirkan bahan /
                  media pembelajaran menarik untuk meningkatkan minat belajar
                  siswa
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <FontAwesomeIcon icon={faCheckCircle} /> Melakukan evaluasi
                  pembelajaran berupa latihan contoh soal
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <FontAwesomeIcon icon={faCheckCircle} /> Menjadi figur guru
                  disiplin agar dapat diteladani siswa
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <FontAwesomeIcon icon={faCheckCircle} /> Bantu siswa pahami
                  materi yang berada dalam buku teks beserta informasi yang
                  dijabarkan
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <FontAwesomeIcon icon={faCheckCircle} /> Membuat suasana
                  belajar menjadi kondusif agar siswa tetap bisa fokus
                </ListGroup.Item>
              </ListGroup>
              <div className="box">
                <h3>
                  Mulai Bimbel masuk PTN Bersama Edumatrix Indonesia Sekarang?
                </h3>
                <p className="desk-box">
                  Segera hubungi kami untuk mulai jadwalkan Bimbel masuk PTN
                  dengan Edumatrix Indonesia. Saatnya dongkrak prestasi belajar
                  bersama sejumlah siswa yang telah bergabung bersama kami.
                </p>
                <div className="btn-call">
                  <a
                    href="https://api.whatsapp.com/send?phone=+6281215523902&text=Halo%20Kak%2C%20Saya%20mau%20tanya%20mengenai%20bimbel%20diEdumatrix%20Terima%20kasih."
                    className="wa"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />{" "}
                    <strong>WhatsApp</strong>
                  </a>
                  <a href="tel:+6281215523902" className="call">
                    <FontAwesomeIcon icon={faPhone} /> <strong>Call</strong>
                  </a>
                </div>
                <p className="btn-call">
                  atau mendaftar dengan mengisi formulir berikut
                </p>
                <button
                  onClick={() => goToPendaftaran()}
                  className="btn-formdaftar"
                >
                  <FontAwesomeIcon icon={faFile} /> Formulir Pendaftaran
                </button>
              </div>
              <div className="mata-pelajaran">
                <h1 className="title-mapel">Semua Mata Pelajaran</h1>
                <p className="desk-mapel">
                  Bimbel Edumatrix Indonesia bersedia melayani program Bimbingan
                  belajar masuk PTN bagi seluruh jenjang SMA/SMK sederajat dan
                  seluruh mata pelajaran.
                </p>
                <ul className="column-mapel">
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Pendidikan Agama Kristen
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Pendidikan Agama Islam
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Bahasa Indomesia
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Matematika
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Akuntansi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Sosiologi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Ekonomi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Sejarah
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Kimia
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Fisika
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Biologi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Geografi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Statistika
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Bahasa Asing
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Ilmu Pengetahuan Alam
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBook} /> Ilmu Pengetahuan Sosial
                  </li>
                </ul>
              </div>

              <div className="area">
                <h1 className="title-area">Semua Mata Pelajaran</h1>
                <p className="desk-area">
                  Bimbel Edumatrix Indonesia bersedia melayani program Bimbingan
                  belajar masuk PTN bagi seluruh jenjang SMA/SMK sederajat dan
                  seluruh mata pelajaran.
                </p>
                <ul className="column-area">
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Jakarta Pusat
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Jakarta Barat
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Jakarta Timur
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Jakarta Utara
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Jakarta Selatan
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Bogor
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Bekasi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Depok
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Tangerang
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> Tangerang Selatan
                  </li>
                </ul>
              </div>

              {/* <button className="btn-melayani">
              Melayani Seluruh Kecamatan di Jabodetabek
            </button> */}

              <Kecamatan />

              <div className="kursus">
                <h1 className="title-kursus">
                  Kursus Les Private Edumatrix Indonesia
                </h1>
                <p className="desk-kursus">
                  Teknik mengajar sejatinya berperan penting pada siswa,
                  khususnya ketika berhadapan dengan mata pelajaran yang sering
                  menerapkan rumus. Tujuan teknik mengajar adalah untuk
                  memudahkan siswa memahami metode yang disampaikan oleh guru
                  les privat.
                  <br />
                  <br />
                  EDUMATRIX Indonesia adalah lembaga bimbingan belajar untuk
                  Persiapan Masuk Kedokteran, PTN dan Kedinasan. Program ini
                  menjadi solusi terbaik untuk siswa agar sukses masuk UI ITB
                  UGM IPB Unpad dan Perguruan Tinggi Negeri Favorit serta
                  Sekolah Tinggi Kedinasan. Metode Belajar yang digunakan yaitu
                  personal one on one (1 siswa 1 mentor) dan juga tersedia Small
                  Class. Program belajar didesain secara sistematis,
                  terstruktur, terukur dan teruji. Pembelajaran Tematik berdasar
                  Statistik Soal yang diujikan. Fokus menerapkan Pola Sukses
                  yang sudah proven. Berikut contoh mengajar nya :
                </p>
              </div>

              <Card
                style={{ background: "rgb(201, 0, 0)", color: "white" }}
                className="mengajar"
              >
                <Card.Body>
                  <Card.Title>
                    <strong>
                      Menggunakan Media Pembelajaran Berbasis Teknologi
                    </strong>
                  </Card.Title>
                  <br />
                  <Card.Text>
                    Wajar rasanya bila generasi milenial sangat akrab dengan
                    penggunaan gawai atau smartphone. Peran teknologi pada
                    pembelajaran les privat dinilai cukup membantu siswa dan
                    guru , khususnya saat membahas mata pelajaran matematika.
                    Guru les privat nantinya akan menyediakan soal dimana siswa
                    juga diperbolehkan untuk mencari sendiri bagaimana metode
                    dan rumus cara penyelesaiannya di internet. Peran dari guru
                    les privat hanya sebagai penuntun siswa untuk tidak banyak
                    terjebak pada kesalahan pengambilan rumus, begitu pula saat
                    penerapannya.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{ background: "rgb(201, 0, 0)", color: "white" }}
                className="mengajar"
              >
                <Card.Body>
                  <Card.Title>
                    <strong>Penyedia Soal Terlengkap</strong>
                  </Card.Title>
                  <br />
                  <Card.Text>
                    Demi meningkatkan kemampuan siswa dalam memahami materi
                    pelajaran, maka kami menyediakan soal-soal latihan terbaru
                    dan terlengkap. Guru les privat juga harus memastikan bahwa
                    setiap soal harus disesuaikan dengan pembahasan materi
                    sebelumnya yang sudah dibahas. Pembahasan soal merupakan
                    cara agar siswa lebih terlatih dan familiar dengan soal-soal
                    yang keluar saat ujian berlangsung.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{ background: "rgb(201, 0, 0)", color: "white" }}
                className="mengajar"
              >
                <Card.Body>
                  <Card.Title>
                    <strong>Membuat Mind Mapping</strong>
                  </Card.Title>
                  <br />
                  <Card.Text>
                    Mempelajari materi terbaru di sekolah terkadang membuat
                    siswa merasa sulit bagaimana cara memahaminya. Guru les
                    privat hadir sebagai solusi dengan menuntun siswa untuk
                    membuat mind-mapping. Siswa yang berhasil membuat
                    mind-mapping akan cenderung lebih mudah memahami alur
                    pelajaran dari materi baru, meski hanya sekedar menulis dan
                    menggambar secara manual.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{ background: "rgb(201, 0, 0)", color: "white" }}
                className="mengajar"
              >
                <Card.Body>
                  <Card.Title>
                    <strong>Menjadi Partner Diskusi & Tanya Jawab</strong>
                  </Card.Title>
                  <br />
                  <Card.Text>
                    Siswa yang giat mendalami materi apa yang sudah dipelajari,
                    besar kemungkinan akan memiliki daya ingat yang baik ketika
                    ujian di sekolah atau pelajaran biasa. Untuk itu siswa perlu
                    didorong untuk aktif pada sesi diskusi, debat ringan atau
                    tanya jawab dengan guru les privat. Ketika siswa rajin
                    mengutarakan pertanyaan dan jawaban, maka guru les privat
                    dapat mengidentifikasi bahwa siswa tersebut sedang mengalami
                    peningkatan semangat belajar.
                  </Card.Text>
                </Card.Body>
              </Card>

              <div className="box-2">
                <h1 className="title-box2">
                  Mengapa Belajar di Lembaga Pendidikan Edumatrix Indonesia?
                </h1>
                <p>
                  Belajar bersama guru les privat yang sudah layak mengajar
                  adalah solusi tepat jika belajar di rumah terkesan
                  membosankan. Berikut ini terdapat poin-poin alasan utama
                  mengapa harus bergabung di Executive Education sebagai lembaga
                  les privat Kembangan unggulan dalam memperbaiki performa
                  pembelajaran siswa.
                </p>
                <h2>Meningkatkan Performa Belajar</h2>
                <p>
                  Siswa adakalanya sedang dalam kesulitan dalam memahami materi
                  tertentu, terutama jika siswa tersebut adalah tipikal pemalu
                  dan jarang aktif di sebuah kelas dengan jumlah siswa begitu
                  besar. Sehingga anak butuh waktu lebih untuk pahami kembali
                  isi pelajaran. Kehadiran guru les privat Kembangan adalah
                  solusi agar siswa terbantu dalam mengerjakan soal atau PR
                  secara lebih efektif.
                </p>
                <h2>Meningkatkan Antusiasme Belajar</h2>
                <p>
                  Apabila dukungan belajar telah diberikan berupa les privat,
                  secara tidak langsung orang tua memiliki target atau harapan
                  besar kepada anaknya. Dengan adanya guru les privat Kembangan
                  di rumah, maka anak menjadi lebih terbantu dalam menyusun
                  target yang akan direncanakan. Target memiliki peranan penting
                  agar siswa dapat bersemangat dalam menerima materi pelajaran.
                </p>
                <h2>Persiapan Sebelum Hadapi Ujian</h2>
                <p>
                  Bentuk evaluasi hasil belajar siswa dapat dilihat jika ia
                  telah melakukan ujian sebagai tolok ukur mengetahui
                  kemampuannya. Sebelum ujian berlangsung, siswa diharuskan
                  untuk memahami materi yang akan diuji. Untuk itu, dengan
                  mempercayakan jasa les privat di Kembangan pada Executive
                  Education diharapkan siswa mendapat hasil ujian di sekolah
                  secara memuaskan.
                </p>
                <h2>Solusi Orang Tua yang Sibuk</h2>
                <p>
                  Bila orang tua tidak memiliki waktu sama sekali dengan anak,
                  dikarenakan bekerja full siang dan malam, tentu akan menjadi
                  kendala tersendiri untuk meluangkan waktu belajar bersama anak
                  di rumah. Disinilah guru les privat di Kembangan dari
                  Executive Education memiliki peranan, meskipun orang tua
                  bekerja anak tetap belajar dan dipantau progressnya. Jika
                  progress pembelajaran anak kian membaik, bukan tidak mungkin
                  orang tua akan lebih semangat bekerja.
                </p>
              </div>

              <div className="box-3">
                <h1>Keunggulan Belajar di Edumatrix Indonesia</h1>
                <h2>Pengajar Muda & Berpengalaman</h2>
                <p>
                  Supercamp EDUMATRIX adalah lembaga bimbingan belajar persiapan
                  masuk PTN dengan Sistem Karantina. Kami hadir sebagai partner
                  terbaik bagi siswa dengan menyediakan program bimbingan masuk
                  UI, ITB, UGM, IPB, Unair, ITS, Undip, Unpad & Perguruan Tinggi
                  Negeri Favorit.
                </p>
                <h2>Metode Belajar Personal</h2>
                <p>
                  Metode Belajar yang digunakan yaitu one on one (1 siswa 1
                  mentor). Program belajar didesain secara sistematis,
                  terstruktur, terukur dan teruji. Pembelajaran Tematik berdasar
                  Statistik Soal yang diujikan. Fokus menerapkan Pola Sukses
                  yang sudah proven.
                </p>
                <h2>Bahan Ajar & Soal Lengkap</h2>
                <p>
                  Modul belajar lengkap, Sistematis dan Prediktif terhadap
                  soal-soal yang kemungkinan besar akan muncul di tes AKPOL.
                  Selain itu juga dilengkapi dengan Try Out Progresif untuk
                  mengukur tingkat keberhasilan siswa.
                </p>
                <h2>Tingkat Kelulusan Tinggi</h2>
                <p>
                  Dengan program yang proven, didesain secara sistematis,
                  terstruktur, terukur dan teruji, kami siap memberikan support
                  terbaik untuk siswa. Komitmen kami yaitu memberikan layanan
                  terbaik agar siswa dapat meraih target yaitu lulus tes.
                </p>
                <h2>5000+ Guru Privat</h2>
                <p>
                  Edumatrix Indonesia bukan hanya memiliki tenaga pengajar yang
                  berkualitas tapi dari segi kuantitas juga bisa diandalkan.
                  Dimana Edumatrix Indonesia memiliki 5000 lebih guru privat
                  profesional yang tersebar di seluruh Indonesia.
                </p>
                <h2>Guru Privat Terbaik</h2>
                <p>
                  Tenaga pengajar yang dimiliki oleh Edumatrix Indonesia
                  tidaklah sembarangan. Namun tenaga pengajar yang terpilih dari
                  berbagai PTN terbaik di Indonesia. Kami percaya bahwa
                  kesuksesan siswa selalu dimulai dari tenaga pengajar yang
                  kompeten, profesional dan pastinya berkualitas.
                </p>
                <h2>Bimbel Terlengkap</h2>
                <p>
                  Kami percaya bahwa setiap siswa pastinya memiliki kebutuhan
                  belajar yang berbeda-beda. Menjawab kebutuhan tersebut,
                  Edumatrix Indonesia menyiapkan berbagai program belajar yang
                  bisa dipilih sesuai kebutuhan siswa. Hal inilah yang membuat
                  Edumatrix Indonesia adalah Bimbel terlengkap dan terbaik.
                </p>
                <h2>Siswa Bebas Memilih Guru</h2>
                <p>
                  Pembelajaran yang berhasil jelas tidak bisa dilepaskan dari
                  kesinambungan antara guru dan siswa. Faktor kecocokan inilah
                  yang membuat proses belajar menjadi lebih menyenangkan.
                  Sehingga Edumatrix Indonesia membebaskan siswa untuk memilih
                  guru yang sesuai dengan kebutuhan dan referensi belajarnya.
                </p>
              </div>
              <Carausel />
              <div className="box-4">
                <h1>Biaya Les Private Edumatrix Indonesia</h1>
                <p>
                  Biaya Program Supercamp EDUMATRIX 2023 terdiri dari :
                  <br />
                  1. Biaya Program Belajar.
                  <br />
                  2. Biaya Booking Seat untuk memastikan Ananda terdaftar dalam
                  Program Supercamp EDUMATRIX 2023.
                  <br />
                  <br />
                  Biaya Booking Seat dibayarkan pada awal saat siswa mendaftar
                  sebagai siswa Program Supercamp EDUMATRIX dan dikalkulasikan
                  sebagai pengurang biaya program belajar. BIAYA ditentukan
                  sesuai dengan Program yang akan diikuti.
                </p>
              </div>

              <div className="logo">
                <img
                  src="https://bimbelsnbt.com/wp-content/uploads/2022/12/logo-header.png"
                  width="100%"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </div>

              <div className="box-5">
                <h2>Bimbingan Les Privat di Edumatrix Indonesia</h2>
                <p>
                  Selain bimbingan les privat Kembangan secara offline, kami
                  juga menghadirkan beberapa bimbingan les privat lain yang
                  dapat Anda pilih. Setiap bimbingan les privat yang kami
                  sediakan tentu telah ditunjang oleh guru profesional dan
                  bersertifikasi.
                </p>
              </div>

              <div className="box-6">
                <button className="btn-les1">Les Privat Offline</button>
                <button className="btn-les2">Les Privat Calisatung</button>
                <button className="btn-les3">Les Privat SBMPTN</button>
                <button className="btn-les4">Les Privat Online</button>
                <button className="btn-les5">Les Privat Olimpiade</button>
                <button className="btn-les6">Les Privat CPNS</button>
              </div>
            </div>

            {/* AREA IKLAN/REVIEW */}
            <div className="area-card">
              <div className="card-review1">
                <div className="card-review">
                  <Card style={{ border: "none" }} className="main-card">
                    <Card.Img
                      variant="top"
                      src="https://bimbelsnbt.com/wp-content/uploads/2022/12/logo-header.png"
                    />
                    <Card.Body>
                      <Card.Title>
                        Bimbel masuk PTN terbaik • Edumatrix Indonesia
                      </Card.Title>
                      <Card.Text>
                        <FontAwesomeIcon
                          style={{ color: "gold" }}
                          icon={faStar}
                        />{" "}
                        95/100
                      </Card.Text>
                      <Card.Text>
                        Berdasarkan <strong>221 Google ulasan</strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                {ulasan.data?.map((item, index) => (
                  <Card
                    key={index}
                    style={{ border: "none" }}
                    className="main-card"
                  >
                    <Card.Body>
                      <Card.Title>
                        <strong>{item.username}</strong>
                      </Card.Title>
                      <Card.Text>{item.pesan}</Card.Text>
                      <Card.Text>
                        <FontAwesomeIcon
                          style={{ color: "gold" }}
                          icon={faStar}
                        />{" "}
                        {item.rating}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
                <button onClick={() => goToUlasan()} className="beri-ulasan">
                  Berikan Ulasan
                </button>
              </div>
            </div>
          </div>
        </Container>
        <WaFloat />
        <Footer />
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Home;
