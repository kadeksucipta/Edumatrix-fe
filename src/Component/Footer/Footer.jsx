import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img src="https://bimbelsnbt.com/wp-content/uploads/2022/12/logo-header.png" />
          <h3>
            <br />
            Tentang<span>Kami</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a> | <a href="#">Blog</a> | <a href="#">About</a>{" "}
            | <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">
          © All rights reserved. • Edumatrix Indonesia
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Bale Wangsa Residence Kav. 70,</span>
              Sendangadi, Mlati, Sleman, Daerah Istimewa Yogyakarta
            </p>
          </div>
          <br />
          <div>
            <FontAwesomeIcon style={{ color: "white" }} icon={faPhone} />{" "}
            <p>+62 85-600422188</p>
          </div>
          <div>
            <FontAwesomeIcon style={{ color: "white" }} icon={faEnvelope} />{" "}
            <p>
              <a href="https://edumatrix-indonesia.com/">
                edumatrix-indonesia.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            EDUMATRIX Indonesia adalah lembaga bimbingan belajar untuk Persiapan
            Masuk Kedokteran, PTN dan Kedinasan. Program ini menjadi solusi
            terbaik untuk siswa agar sukses masuk UI ITB UGM IPB Unpad dan
            Perguruan Tinggi Negeri Favorit serta Sekolah Tinggi Kedinasan.
            Metode Belajar yang digunakan yaitu personal one on one (1 siswa 1
            mentor) dan juga tersedia Small Class. Program belajar didesain
            secara sistematis, terstruktur, terukur dan teruji. Pembelajaran
            Tematik berdasar Statistik Soal yang diujikan. Fokus menerapkan Pola
            Sukses yang sudah proven.
          </p>
          <div className="footer-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
