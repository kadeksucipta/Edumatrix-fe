import React, { useState } from "react";
import Header from "../Component/Header/Header";
import { Container, Form } from "react-bootstrap";
import "./Ulasan.css";
import Footer from "../Component/Footer/Footer";
import { setUserData } from "../App/features/Login/Actions";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import WaFloat from "../Component/WaFloat/WaFloat";
import AnimatedPage from "../Component/Animate/Animate";

const Ulasan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToHome = () => {
    navigate("/Home");
  };

  const [user, setUser] = useState({
    username: "",
    pesan: "",
    rating: "",
  });

  // DATA MASUK DATABASE
  const fetchUlasan = () => {
    const token = localStorage.getItem("token");
    const payload = { ...user };
    // payload.languages = payload.languages.join (",")
    fetch(`https://odd-puce-panther-tie.cyclic.app/api/dataulasan`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgxNDU0ZTYyN2Y3OWM3NDlhNDA2MGEiLCJmdWxsX25hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImN1c3RvbWVyX2lkIjoxLCJpYXQiOjE2ODYxOTM0OTN9.OoeVAzKnltPYiQCqG-jTw9LyTkoGrOCjpQM_cLhOeWg`,
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
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

  const createItem = (data) => {
    localStorage.setItem("userData", JSON.stringify(data?.user));
    localStorage.setItem("token", data?.token);
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
    fetchUlasan();
    // console.log(user);
    swal({
      title: "Ulasan sudah ditambahkan",
      text: "Terimakasih",
      icon: "success",
      button: false,
      timer: 2000,
    });
    goToHome();
  };

  return (
    <React.Fragment>
      <AnimatedPage>
        <Header />
        <div className="content-ulasan">
          <Container>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Nama</strong>
                </Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  value={user.username}
                  name="username"
                  type="text"
                  placeholder="Masukan nama"
                />
              </Form.Group>
              <Form.Label>
                <strong>Ulasan</strong>
              </Form.Label>
              <textarea
                onChange={onChangeHandler}
                value={user.pesan}
                className="text-ulasan"
                placeholder="beri ulasan..."
                name="pesan"
              ></textarea>
              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Rating</strong>
                </Form.Label>
                <Form.Control
                  onChange={onChangeHandler}
                  value={user.rating}
                  name="rating"
                  type="text"
                  placeholder="Berikan rating (contoh : 90/100)"
                />
              </Form.Group>
              <button type="submit" className="btn-ulasan">
                Kirim Ulasan
              </button>
            </Form>
          </Container>
        </div>
        <WaFloat />
        <Footer />
      </AnimatedPage>
    </React.Fragment>
  );
};

export default Ulasan;
