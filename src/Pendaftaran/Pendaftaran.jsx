import React, { useEffect, useState } from "react";
import Header from "../Component/Header/Header";
import "./Pendaftaran.css";
import { Card, Container, Form } from "react-bootstrap";
import Dropdown from "../Component/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faPhoneSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Component/Footer/Footer";
import AnimatedPage from "../Component/Animate/Animate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { setUserData } from "../../src/App/features/Login/Actions";
import WaFloat from "../Component/WaFloat/WaFloat";

const Pendaftaran = () => {
  const [keunggulan, setKeunggulan] = useState([]);
  const [testimoni, setTestimoni] = useState([]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [status, setStatus] = useState("");
  const [mapel, setMapel] = useState("");
  const [hp, setHp] = useState(0);
  const [pesan, setPesan] = useState("");
  const [sesi, setSesi] = useState("");
  const [preferensi, setPreferensi] = useState("");
  const [belajar, setBelajar] = useState("");

  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, onChange] = useState(1);
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  useEffect(() => {
    fetchKeunggulan();
    fetchTestimoni();
  }, []);

  const [user, setUser] = useState({
    username: "",
    email: "",
    pendidikan: "",
    status: "",
    mapel: "",
    hp: 62,
    pesan: "",
    sesi: "",
    preferensi: "",
    belajar: "",
  });

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

  // DATA PENDAFTARAN MASUK DATABASE
  const fetchDaftar = () => {
    const payload = { ...user };
    // payload.languages = payload.languages.join (",")
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/datadaftar`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setUserData({ user: data?.user, token: data?.token }));

        createItem(data);
        console.log(data);
      });
  };

  const onChangeHandler = (event) => {
    console.log(event);
    if (event.target.name === "languages") {
      let copy = { ...user };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter(
          (el) => el !== event.target.value
        );
      }

      setUser(copy);
    } else {
      setUser(() => ({
        ...user,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchDaftar();
    console.log(user);
    swal("Pendaftaran anda telah direkam", "Tekan tombol OK", "success");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     email.length == 0 ||
  //     username.length == 0 ||
  //     pendidikan.length == 0 ||
  //     status.length == 0 ||
  //     mapel.length == 0 ||
  //     hp.length == 0 ||
  //     sesi.length == 0 ||
  //     preferensi.length == 0 ||
  //     belajar.length == 0
  //   ) {
  //     return setError(true)
  //   }
  //   const formData = new URLSearchParams({
  //     username: username,
  //     email,
  //     pendidikan,
  //     status,
  //     mapel,
  //     hp,
  //     sesi,
  //     preferensi,
  //     belajar
  //   });
  //   fetchLogin(formData);
  //   console.log(email, password);
  // };

  const createItem = (data) => {
    localStorage.setItem("userData", JSON.stringify(data?.user));
    localStorage.setItem("token", data?.token);
  };

  return (
    <React.Fragment>
      <AnimatedPage>
        <Header />

        {/* ISI */}
        <div className="box-daftar">
          <div className="box-title">
            <h1 className="daftar-bimbelsekarang">
              <strong>DAFTAR SEKARANG</strong>
            </h1>
            <h4 className="raih-ptn">RAIH PTN IMPIANMU BERSAMA KAMI</h4>
          </div>
        </div>

        <Container>
          <div className="content-daftar">
            <img
              src="https://bimbelsnbt.com/wp-content/uploads/2022/12/logo-header.png"
              className="logo-edu"
            />
            {/* <div className="teks-daftar">
            <h1>Raih PTN Idaman mu Bersama Kami</h1>
          </div> */}
            <div className="form-daftar">
              <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Jenjang Pendidikan</strong>
                  </Form.Label>
                  <Form.Select
                    name="pendidikan"
                    onChange={onChangeHandler}
                    value={user.pendidikan}
                  >
                    <option>Pilih pendidikan</option>
                    <option value="sma">SMA</option>
                    <option value="smk">SMK</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Status Pendaftaran</strong>
                  </Form.Label>
                  <Form.Select
                    name="status"
                    onChange={onChangeHandler}
                    value={user.status}
                  >
                    <option>Pilih status</option>
                    <option value="siswa">Siswa</option>
                    <option value="orang tua">Orang Tua</option>
                    <option value="saudara">Saudara</option>
                    <option value="fec">FEC</option>
                    <option value="oec">OEC</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Nama Lengkap</strong>
                  </Form.Label>
                  <Form.Control
                    name="username"
                    onChange={onChangeHandler}
                    value={user.username}
                    type="text"
                    placeholder="Masukan nama..."
                  />
                </Form.Group>

                <Form.Group className="mt-1">
                  <Form.Label>
                    <strong>Mata Pelajaran</strong>
                  </Form.Label>
                  <Form.Control
                    name="mapel"
                    onChange={onChangeHandler}
                    value={user.mapel}
                    type="text"
                    placeholder="Masukan mapel..."
                  />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>
                    <strong>Preferensi Belajar</strong>
                  </Form.Label>
                  <Form.Select
                    name="preferensi"
                    onChange={onChangeHandler}
                    value={user.preferensi}
                  >
                    <option>Pilih preferensi</option>
                    <option value="offline">Offline</option>
                    <option value="online">Online</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>
                    <strong>Program Belajar</strong>
                  </Form.Label>
                  <Form.Select
                    name="belajar"
                    onChange={onChangeHandler}
                    value={user.belajar}
                  >
                    <option>Pilih program belajar</option>
                    <option value="private atau perorangan">
                      Private atau Perorangan
                    </option>
                    <option value="kelompok belajar 2 orang">
                      Kelompok Belajar 2 Orang
                    </option>
                    <option value="kelompok belajar 3 orang">
                      Kelompok Belajar 3 Orang
                    </option>
                  </Form.Select>
                </Form.Group>

                {/* <div className="slider-parent">
                  <Form.Label>
                    <strong>Total Sesi Belajar</strong>
                  </Form.Label>
                  <input
                    className="range-input"
                    type="range"
                    min="1"
                    max="100"
                    value={user.sesi}
                    onChange={({ target: { value: radius } }) => {
                      onChange(radius);
                    }}
                  />
                  <div className="buble">{value} kali pertemuan</div>
                </div> */}

                <Form.Group className="mt-3">
                  <Form.Label>
                    <strong>Total Sesi Belajar</strong>
                  </Form.Label>
                  <Form.Control
                    onChange={onChangeHandler}
                    value={user.sesi}
                    name="sesi"
                    type="number"
                    placeholder="Masukan sesi belajar..."
                  />
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>
                    <strong>Nomor WhatsApp/Telepon</strong>
                  </Form.Label>
                  <Form.Control
                    onChange={onChangeHandler}
                    value={user.hp}
                    name="hp"
                    type="number"
                    placeholder="Masukan nomor whatsapp/telepon..."
                  />
                </Form.Group>

                <Form.Group className="mt-3" controlId="formBasicEmail">
                  <Form.Label>
                    <strong>Email</strong>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    onChange={onChangeHandler}
                    value={user.email}
                    type="email"
                    placeholder="Masukan email..."
                  />
                </Form.Group>

                <Form.Group className="mt-3" controlId="formBasicEmail">
                  <Form.Label>
                    <strong>Pesan Tambahan</strong>
                  </Form.Label>
                  <Form.Control
                    name="pesan"
                    onChange={onChangeHandler}
                    value={user.pesan}
                    type="text"
                    placeholder="Masukan pesan..."
                  />
                </Form.Group>
                <button type="submit" className="btn-daftar">
                  Daftar
                </button>
              </Form>
            </div>
          </div>
        </Container>
        <div className="box-keunggulan">
          <h1><strong>Kenapa Harus Pilih Edumatrix Indonesia ?</strong></h1>
          <div className="box-edu">
            {keunggulan?.map((item, index) => (
              <Card
                style={{ border: "none" }}
                className="card-keunggulan"
                key={index}
              >
                <Card.Body className="card-edu">
                  <Card.Text><strong>0{item.price}</strong></Card.Text>
                  <Card.Title><strong>{item.name}</strong></Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        <div className="testimoni">
          <h1><strong>Apa Kata Mereka</strong></h1>
          <div className="box-edu">
            {testimoni?.map((item, index) => (
              <Card
                style={{ border: "none" }}
                className="card-testi"
                key={index}
              >
                <Card.Body className="card-edu">
                  <Card.Title><strong>{item.name}</strong></Card.Title>
                  <button className="btn-testi">{item.sub}</button>
                  <Card.Text className="testi-alumni">{item.description}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

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
          <button className="daftar-sekarang">Daftar Sekarang</button>
        </div>
        <WaFloat />
        <Footer />
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Pendaftaran;
