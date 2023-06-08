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
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Carausel from "../Component/Carousel/Carausel";
import Footer from "../Component/Footer/Footer";
import swal from "sweetalert";

const Home = () => {
  const [review, setReveiew] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchReview();
    fetchData();
  }, []);

  const fetchReview = () => {
    fetch(`https://edumatrix-fe-production.up.railway.app/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setReveiew(data.data);
        // console.log(data);
      });
  };

  const fetchData = () => {
    fetch(`https://edumatrix-fe-production.up.railway.app/api/tags`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        // console.log(data);
      });
  };

  const errorHandler = () => [
    swal({
      title: "Fitur sedang dibangun",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }),
  ];
  return (
    <React.Fragment>
      <Navbar className="custom-nav" bg="none" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
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
            <Nav className="mr-auto">
              <NavDropdown title="Tentang Kami" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Pofile Tutor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Kontak Kami
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Bimbingan Belajar" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Les Privat Offline
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Les Privat Online
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Les Privat Calistung
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Les Privat Olimpiade
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Les Privat SBMPTN
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Les Privat CPNS
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Kursus" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Kursus Bahasa Asing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Kursus Kesenian
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Kursus Olahraga
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Kursus Komputer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button
              onClick={() => errorHandler()}
              style={{ background: "orange", border: "1px solid transparent" }}
              className="daftar"
            >
              Pendaftaran
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
              Bimbel masuk PTN Edumatrix Indonesia • SMA/SMK sederajat • Dengan
              sistem belajar ONE on ONE
            </h1>
            <Button onClick={() => errorHandler()}>Daftar isi</Button>
            <p className="desk-1">
              Merasa sulit untuk mengerjakan tugas di rumah? Nilai ujian terus
              mengalami penurunan seiring semangat belajar yang semakin
              berkurang? Mempercayakan Executive Education sebagai penyedia jasa
              guru les privat Cilandak adalah pilihan solutif!
            </p>
            <p className="desk-2">
              Hal ini dikarenakan Executive Education menghadirkan guru yang
              mayoritas berasal dari Universitas Indonesia. Proses seleksi
              terhadap calon guru les privat juga wajib kami lakukan untuk
              mengetahui bagaimana kepribadiannya, karakteristiknya dan metode
              yang digunakan sebelum terjun mengajar untuk siswa di Cilandak.
              Dengan demikian, kami siap membantu siswa semaksimal mungkin
              meraih hasil belajar lebih optimal karena Executive Education
              menyediakan guru les privat TK, SD, SMP & SMA yang tidak diragukan
              lagi kompetensinya.
            </p>
            <h1>Kriteria Guru Les Privat Cilandak dari Executive Education</h1>
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
                <FontAwesomeIcon icon={faCheckCircle} /> Membuat suasana belajar
                menjadi kondusif agar siswa tetap bisa fokus
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
                <button onClick={() => errorHandler()} className="wa">
                  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                </button>
                <button onClick={() => errorHandler()} className="call">
                  <FontAwesomeIcon icon={faPhone} /> Call
                </button>
              </div>
              <p className="btn-call">
                atau mendaftar dengan mengisi formulir berikut
              </p>
              <button onClick={() => errorHandler()} className="btn-formdaftar">
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

            <button className="btn-melayani">
              Melayani Seluruh Kecamatan di Jabodetabek
            </button>

            <div className="kursus">
              <h1 className="title-kursus">Kursus Les Privat Kembangan</h1>
              <p className="desk-kursus">
                Teknik mengajar sejatinya berperan penting pada siswa, khususnya
                ketika berhadapan dengan mata pelajaran yang sering menerapkan
                rumus. Tujuan teknik mengajar adalah untuk memudahkan siswa
                memahami metode yang disampaikan oleh guru les privat.
                <br />
                <br />
                EDUMATRIX Indonesia adalah lembaga bimbingan belajar untuk
                Persiapan Masuk Kedokteran, PTN dan Kedinasan. Program ini
                menjadi solusi terbaik untuk siswa agar sukses masuk UI ITB UGM
                IPB Unpad dan Perguruan Tinggi Negeri Favorit serta Sekolah
                Tinggi Kedinasan. Metode Belajar yang digunakan yaitu personal
                one on one (1 siswa 1 mentor) dan juga tersedia Small Class.
                Program belajar didesain secara sistematis, terstruktur, terukur
                dan teruji. Pembelajaran Tematik berdasar Statistik Soal yang
                diujikan. Fokus menerapkan Pola Sukses yang sudah proven.
                Berikut contoh mengajar nya :
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
                  pembelajaran les privat dinilai cukup membantu siswa dan guru
                  , khususnya saat membahas mata pelajaran matematika. Guru les
                  privat nantinya akan menyediakan soal dimana siswa juga
                  diperbolehkan untuk mencari sendiri bagaimana metode dan rumus
                  cara penyelesaiannya di internet. Peran dari guru les privat
                  hanya sebagai penuntun siswa untuk tidak banyak terjebak pada
                  kesalahan pengambilan rumus, begitu pula saat penerapannya.
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
                  pelajaran, maka kami menyediakan soal-soal latihan terbaru dan
                  terlengkap. Guru les privat juga harus memastikan bahwa setiap
                  soal harus disesuaikan dengan pembahasan materi sebelumnya
                  yang sudah dibahas. Pembahasan soal merupakan cara agar siswa
                  lebih terlatih dan familiar dengan soal-soal yang keluar saat
                  ujian berlangsung.
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
                  Mempelajari materi terbaru di sekolah terkadang membuat siswa
                  merasa sulit bagaimana cara memahaminya. Guru les privat hadir
                  sebagai solusi dengan menuntun siswa untuk membuat
                  mind-mapping. Siswa yang berhasil membuat mind-mapping akan
                  cenderung lebih mudah memahami alur pelajaran dari materi
                  baru, meski hanya sekedar menulis dan menggambar secara
                  manual.
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
                Mengapa Belajar di Lembaga Les Privat Kembangan?
              </h1>
              <p>
                Belajar bersama guru les privat yang sudah layak mengajar adalah
                solusi tepat jika belajar di rumah terkesan membosankan. Berikut
                ini terdapat poin-poin alasan utama mengapa harus bergabung di
                Executive Education sebagai lembaga les privat Kembangan
                unggulan dalam memperbaiki performa pembelajaran siswa.
              </p>
              <h2>Meningkatkan Performa Belajar</h2>
              <p>
                Siswa adakalanya sedang dalam kesulitan dalam memahami materi
                tertentu, terutama jika siswa tersebut adalah tipikal pemalu dan
                jarang aktif di sebuah kelas dengan jumlah siswa begitu besar.
                Sehingga anak butuh waktu lebih untuk pahami kembali isi
                pelajaran. Kehadiran guru les privat Kembangan adalah solusi
                agar siswa terbantu dalam mengerjakan soal atau PR secara lebih
                efektif.
              </p>
              <h2>Meningkatkan Antusiasme Belajar</h2>
              <p>
                Apabila dukungan belajar telah diberikan berupa les privat,
                secara tidak langsung orang tua memiliki target atau harapan
                besar kepada anaknya. Dengan adanya guru les privat Kembangan di
                rumah, maka anak menjadi lebih terbantu dalam menyusun target
                yang akan direncanakan. Target memiliki peranan penting agar
                siswa dapat bersemangat dalam menerima materi pelajaran.
              </p>
              <h2>Persiapan Sebelum Hadapi Ujian</h2>
              <p>
                Bentuk evaluasi hasil belajar siswa dapat dilihat jika ia telah
                melakukan ujian sebagai tolok ukur mengetahui kemampuannya.
                Sebelum ujian berlangsung, siswa diharuskan untuk memahami
                materi yang akan diuji. Untuk itu, dengan mempercayakan jasa les
                privat di Kembangan pada Executive Education diharapkan siswa
                mendapat hasil ujian di sekolah secara memuaskan.
              </p>
              <h2>Solusi Orang Tua yang Sibuk</h2>
              <p>
                Bila orang tua tidak memiliki waktu sama sekali dengan anak,
                dikarenakan bekerja full siang dan malam, tentu akan menjadi
                kendala tersendiri untuk meluangkan waktu belajar bersama anak
                di rumah. Disinilah guru les privat di Kembangan dari Executive
                Education memiliki peranan, meskipun orang tua bekerja anak
                tetap belajar dan dipantau progressnya. Jika progress
                pembelajaran anak kian membaik, bukan tidak mungkin orang tua
                akan lebih semangat bekerja.
              </p>
            </div>

            <div className="box-3">
              <h1>Keunggulan Belajar di Lembaga Les Privat Kembangan</h1>
              <p>
                Terkadang belajar sendiri di rumah seringkali dilanda kesulitan
                memahami materi, untuk itu memanggil jasa les privat adalah
                solusi tepat untuk pembelajaran yang efektif.
                <br />
                Jika progress pemahaman terhadap materi semakin membaik, besar
                kemungkinan ada pencapaian prestasi dari nilai ujian yang
                semakin membaik pula. Berikut ini ada empat manfaat yang
                dirasakan orang tua dan siswa bila memanggil jasa les privat
                Kembangan untuk SD, SMP & SMA dari Executive Education.
              </p>
              <h2>Waktu Belajar Lebih Fleksibel</h2>
              <p>
                Dalam hal waktu, tidak dipungkiri jika les privat lebih
                memudahkan siswa menentukan kapan harus belajar dibandingkan
                dengan bimbingan kelompok. Fokus belajar bersama guru les privat
                akan lebih terjaga, mengingat siswa telah mengetahui jadwal
                pribadinya untuk kapan harus bermain dan beristirahat. Jika
                siswa tiba-tiba jatuh sakit atau ada acara mendadak yang tidak
                bisa diganggu, maka segera ajukan perubahan jadwal les privat
                pada tim admin Executive Education.
              </p>
              <h2>Hemat Biaya Transportasi</h2>
              <p>
                Dengan memanggil jasa les privat Kembangan dari Executive
                Education, kamu tidak perlu lagi pulang dan pergi ke tempat
                bimbingan belajar. Cukup sediakan tempat yang tenang dan
                fasilitas yang nyaman untuk mendukung aktivitas pembelajaran di
                rumah bersama guru les privat. Memanggil jasa les privat
                Kembangan adalah solusi praktis, karena tidak banyak
                mengeluarkan tenaga dan sangat praktis.
              </p>
              <h2>Data Evaluasi Siswa / Report Card</h2>
              <p>
                Executive Education hadir dengan fitur Data Evaluasi Siswa atau
                Report Card secara sistematis yang tentu saja lain dengan
                beberapa les privat Kembangan dan sekitarnya. Dengan
                memanfaatkan fitur tersebut, maka kami dapat melakukan
                peninjauan terkait performa belajar siswa, apakah ada
                peningkatan atau justru mengalami penurunan. Evaluasi akan
                segera dilakukan oleh guru kami jika performa belajar siswa
                mengalami penurunan. Adapun, pihak orang tua juga berhak
                menyampaikan komplain ganti guru les privat baru atau keluhan
                lainnya jika terdapat kekurangan yang harus diperbaiki.
              </p>
              <h2>Lebih Intensif dan Personal</h2>
              <p>
                Jika guru kelas atau guru bimbingan belajar menghadapi lebih
                dari 5 siswa sekaligus, maka guru les privat hanya fokus pada 1
                hingga 2 siswa saja. Dengan jumlah siswa yang sedikit inilah
                maka guru les privat mampu mengenali lebih dalam tentang
                karakter belajar siswa, begitu pula kelemahan dan kelebihannya.
                Dalam les privat, perlu adanya kedekatan antara guru dan siswa
                untuk lebih memudahkan pemahaman materi yang disampaikan saat
                pembelajaran berlangsung.
              </p>
            </div>
            <Carausel />
            <div className="box-4">
              <h1>Biaya Les Privat Kembangan</h1>
              <p>
                Penawaran biaya les privat Executive Education ditentukan
                berdasarkan kualifikasi guru, jenjang pendidikan, bahasa
                pengantar, penerapan kurikulum dan jarak atau kemudahan akses ke
                lokasi siswa. Secara umum, biaya les privat per pertemuan di
                Kembangan memang tinggi dibandingkan dengan les privat.
                <br />
                <br />
                Walau demikian, perubahan pemahaman materi dan pencapaian
                belajar siswa akan sebanding dengan biaya les privat yang sudah
                dikeluarkan oleh orang tua. Tertarik untuk ketahui lebih detail
                terkait harga les privat di Kembangan dari Executive Education?
                Silahkan hubungi pihak customer service kami melalui icon
                WhatsApp yang terpasang pada situs ini. Dapatkan PROMO SPESIAL
                pendaftaran les privat SD, SMP & SMA di Kembangan dari Executive
                Education pada hari-hari besar tertentu di Indonesia.
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
              <h2>Bimbingan Les Privat di Kembangan</h2>
              <p>
                Selain bimbingan les privat Kembangan secara offline, kami juga
                menghadirkan beberapa bimbingan les privat lain yang dapat Anda
                pilih. Setiap bimbingan les privat yang kami sediakan tentu
                telah ditunjang oleh guru profesional dan bersertifikasi.
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
            <div className="card-review">
            <div className="card-review">
                <Card style={{border: "none"}} className="main-card">
                <Card.Img variant="top" src="https://bimbelsnbt.com/wp-content/uploads/2022/12/logo-header.png" />
                  <Card.Body>
                    <Card.Title>Bimbel masuk PTN terbaik • Edumatrix Indonesia</Card.Title>
                    <Card.Text><FontAwesomeIcon style={{color: "gold"}} icon={faStar} /> 95/100</Card.Text>
                    <Card.Text>Berdasarkan <strong>221 Google ulasan</strong></Card.Text>
                  </Card.Body>
                </Card>
            </div>
              {review?.map((item, index) => (
                <Card key={index} style={{border: "none"}} className="main-card">
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text><FontAwesomeIcon style={{color: "gold"}} icon={faStar} /> 95/100</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
