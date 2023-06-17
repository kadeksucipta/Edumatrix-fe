import React from "react";
import Header from "../Component/Header/Header";
import { Container } from "react-bootstrap";
import "./ContactKami.css";
import quest from "../Component/quest.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faPhoneSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Component/Footer/Footer";
import WaFloat from "../Component/WaFloat/WaFloat";
import AnimatedPage from "../Component/Animate/Animate";

const ContactKami = () => {
  return (
    <React.Fragment>
      <AnimatedPage>
        <Header />

        <div className="box-quest">
          <h1>
            <strong>Kontak Kami</strong>
          </h1>
        </div>
        <Container>
          <div className="box-contact">
            <img className="img-quest" src={quest} alt="" />
            <div className="isi-contact">
              <h1>
                <strong>Ada yang Bisa Kami Bantu ?</strong>
              </h1>
              <p>
                Hubungi Kami atau Visit ke Kantor untuk konsultasi dan
                mendapatkan informasi SNBT 2023 dan Ujian Mandiri PTN 2023
                sesuai kebutuhan Anda.
              </p>
              <hr />
              <a href="tel:+6281215523902" className="contact-phone">
                <FontAwesomeIcon className="icon-phone" icon={faPhoneSquare} />
                0812-1552-3902
              </a>
              <a href="mailto:edumatrix.id@gmail.com" className="contact-email">
                <FontAwesomeIcon className="icon-email" icon={faEnvelope} />
                edumatrix.id@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/place/Edumatrix+Indonesia+-+Bimbel+Masuk+PTN/@-7.7328872,110.353152,17z/data=!3m1!4b1!4m6!3m5!1s0xa061035ebad1e1f1:0x9f455d43288cba88!8m2!3d-7.7328872!4d110.3557269!16s%2Fg%2F11sds4z_21?entry=ttu"
                className="contact-lokasi"
              >
                <FontAwesomeIcon className="icon-lokasi" icon={faLocationDot} />
                Bale Wangsa Residence Kav. 70, Sendangadi, Mlati, Sleman, Daerah
                Istimewa Yogyakarta
              </a>
            </div>
          </div>
        </Container>
        <WaFloat />
        <Footer />
      </AnimatedPage>
    </React.Fragment>
  );
};

export default ContactKami;
