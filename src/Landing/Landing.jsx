import React, { useEffect, useState } from "react";
import Header from "../Component/Header/Header";
import "./Landing.css";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsTurnRight,
  faCircle,
  faFile,
  faLocationDot,
  faPeopleGroup,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import siswa from "../Component/siswa.jpg";
import Footer from "../Component/Footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import WaFloat from "../Component/WaFloat/WaFloat";
import AnimatedPage from "../Component/Animate/Animate";
import swal from "sweetalert";

const Landing = () => {
  const goToPendaftaran = () => {
    navigate("/Pendaftaran");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keunggulan, setKeunggulan] = useState([]);
  const [testimoni, setTestimoni] = useState([]);
  const [fasilitas, setFasilitas] = useState([]);

  useEffect(() => {
    fetchKeunggulan();
    fetchTestimoni();
    fetchFasilitas();
  }, []);

  const fetchKeunggulan = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/keunggulan`)
      .then((res) => res.json())
      .then((data) => {
        setKeunggulan(data.data);
        // console.log(data);
      });
  };

  const fetchTestimoni = () => {
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/testimoni`)
      .then((res) => res.json())
      .then((data) => {
        setTestimoni(data.data);
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
        <div className="box-landing">
          <Container>
            <div className="content-landing">
              <h1 className="title-landing">
                <strong>Bimbel Masuk Kedokteran, PTN & Kedinasan 2023</strong>
              </h1>
              <h4 className="desk-landing">
                Bimbel Persiapan UTBK SNBT / SBMPTN, Simak UI, UTUL UGM, UM
                Undip dan Ujian Mandiri PTN. Edumatrix Indonesia - Bimbel Sukses
                Masuk FK, PTN & Kedinasan Terbaik.
              </h4>
              <div>
                <a href="#about" className="btn-landing">
                  Pelajari Selengkapnya
                </a>
              </div>
              <img
                className="img-landing"
                src="https://edumatrix-indonesia.com/wp-content/uploads/2022/12/bimbel-masuk-ptn-2023.jpg"
                alt=""
              />
            </div>
          </Container>
        </div>

        <Container>
          <div className="box-about" id="about">
            <img
              src="https://bimbelsupercamp.com/wp-content/uploads/2021/03/Bimbel-Persiapan-Masuk-PTN-UI-UGM-ITB-UNPAD-UTBK-Simak-KKI-Jaminan-Program-Terbaik.png"
              alt=""
              className="img-about"
            />
            <div className="isi-about">
              <h5>
                <strong>Tentang Kami</strong>
              </h5>
              <h1>
                <strong>
                  Supercamp EDUMATRIX - Bimbel Spesialis Masuk UI ITB UGM & PTN
                  Favorit
                </strong>
              </h1>
              <p className="desk-about">
                Supercamp EDUMATRIX adalah program bimbingan belajar dengan
                sistem karantina. Kami hadir sebagai partner terbaik bagi siswa
                untuk menyediakan program bimbingan masuk UI, ITB, UGM, IPB,
                Unair, ITS, Undip, Unpad & Perguruan Tinggi Negeri Favorit.
              </p>
              <div>
                <button onClick={() => goToPendaftaran()} className="btn-about">
                  <FontAwesomeIcon icon={faPeopleGroup} /> Mulai Gabung Sekarang
                </button>
              </div>
            </div>
          </div>
        </Container>

        <div className="benefit-eduatrix">
          <Container>
            <h4 className="text-benefit1">Keunggulan Edumatrix Indonesia</h4>
            <h1 className="text-benefit2">
              <strong>Apa yang Anda Dapatkan dari Kami?</strong>
            </h1>
            <div className="box-benefit">
              {keunggulan?.map((item, index) => (
                <Card
                  style={{ border: "none" }}
                  className="card-benefit"
                  key={index}
                >
                  <Card.Body className="card-edumatrix">
                    <Card.Title>
                      <strong>{item.name}</strong>
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>
        </div>

        <div className="promo-edumatrix">
          <h1>
            <strong>Promo Terpopuler Maret 2023</strong>
          </h1>
          <a>
            <img
              className="img-promo"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/4-2.jpg"
              alt=""
            />
          </a>
          <a>
            <img
              className="img-promo"
              src="https://edumatrix-indonesia.com/wp-content/uploads/2023/03/1-1.jpg"
              alt=""
            />
          </a>
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

        <div className="program-unggulan">
          <h1>
            <strong>Program Unggulan Edumatrix Indonesia 2023</strong>
          </h1>
          <h5>
            Berikut adalah program unggulan yang dirancang untuk Anda agar
            proses belajar semakin Efektif dan Efisien.
          </h5>
          <div className="box-benefit">
            <Card style={{ border: "none" }} className="card-progunggul">
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
                  className="btn-chatnow"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-progunggul">
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
                  className="btn-chatnow"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-progunggul">
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
                  className="btn-chatnow"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>

            <Card style={{ border: "none" }} className="card-progunggul">
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
                  className="btn-chatnow"
                >
                  <strong>Chat Us Now!</strong>
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Container>
          <div className="tertarik-gabung">
            <div className="isi-gabung">
              <h1 className="title-gabung">
                Tertarik & Ingin Mulai Bergabung dengan{" "}
                <strong>Edumatrix Indonesia</strong>
              </h1>
              <h5 className="desk-gabung">
                Silahkan kunjungi halaman pendaftaran siswa terlebih dahulu
                untuk mengisi formulir yang kami telah sediakan.
              </h5>
              <div>
                <button
                  onClick={() => goToPendaftaran()}
                  className="btn-gabung"
                >
                  <FontAwesomeIcon icon={faFile} /> Pendaftaran Siswa
                </button>
              </div>
            </div>
            <img className="img-tertarik" src={siswa} alt="" />
          </div>
        </Container>

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

        <Container>
          <div className="testimoni-landing">
            <h1>
              <strong>Apa Kata Mereka</strong>
            </h1>
            <div className="box-edu">
              {testimoni?.map((item, index) => (
                <Card
                  style={{ border: "none" }}
                  className="card-landing"
                  key={index}
                >
                  <Card.Body className="card-edu">
                    <Card.Title>
                      <strong>{item.name}</strong>
                    </Card.Title>
                    <button className="btn-testilanding">{item.sub}</button>
                    <Card.Text className="testi-desk">
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Container>

        <div className="info-contact">
          <span>
            <FontAwesomeIcon className="phone-daftar" icon={faPhoneSquare} />
          </span>
          <h5>
            Hubungi Kami <br />
            0812-1552-3902
          </h5>
          <span>
            <FontAwesomeIcon className="lokasi-daftar" icon={faLocationDot} />
          </span>
          <h5>Yogyakarta</h5>
          <h3 className="mulai-belajar">
            Mulai Buat Agenda Bimbingan Belajar dengan Kami ?
          </h3>
          <button onClick={() => goToPendaftaran()} className="daftar-sekarang">
            Daftar Sekarang
          </button>
        </div>

        <WaFloat />
        <Footer />
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Landing;
