import React, { useState } from "react";
import "./Kecamatan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPaperclip,
  faTurnDown,
} from "@fortawesome/free-solid-svg-icons";

const Kecamatan = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="kecamatan">
      <div className="kecamatan-btn" onClick={(e) => setIsActive(!isActive)}>
        Melayani Seluruh Kecamatan di Jabodetabek
        <span>
          <FontAwesomeIcon icon={faTurnDown} />
        </span>
      </div>
      {isActive && (
        <div className="kecamatan-content">
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Alam Sutera
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} /> 
            Bangka
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            BSD City
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Cakung
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Cempaka Putih
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Cengkareng
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Cilandak
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Cilincing
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Cipayung
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Cipete
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Ciracas
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Duren Sawit
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Gading Serpong
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Gambir
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Grogol Petamburan
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Jagakarsa
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Jatinegara
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Johar Baru
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Kalideres
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Kebayoran Baru
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Kebayoran Lama
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Kebon Jeruk
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Kelapa Gading
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Kemang
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />
            Kemayoran
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Kembangan
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Koja
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Kramat Jati
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Makasar
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Mampang
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Matraman
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Menteng
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Pademangan
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Palmerah
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Pancoran
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Pasar Rebo
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Pasar Minggu
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Pejaten
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Penjaringan
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Pesanggrahan
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Pulo Gadung
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Sawah Besar
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Senen
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Setiabudi
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Taman Sari
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Tambora
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Tanah Abang
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Tnajung Priok
          </div>
          <div className="kecamatan-item">
            <FontAwesomeIcon className="icon-kecamatan" icon={faLocationDot} />Tebet
          </div>
        </div>
      )}
    </div>
  );
};

export default Kecamatan;
