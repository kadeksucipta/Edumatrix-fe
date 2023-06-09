import React, { useState } from "react";
import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faTurnDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Daftar Isi
        <span>
          <FontAwesomeIcon icon={faTurnDown} />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            1. Kriteria Guru Les Privat Kembangan dari Executive Education
          </div>
          <div className="dropdown-item">
            1.1. Mulai Les Privat Kembangan Bersama Executive Education
            Sekarang?
          </div>
          <div className="dropdown-item">
            1.2. Semua Mata Pelajaran
          </div>
          <div className="dropdown-item">
            1.2.1. Jangkauan Area Les Privat
          </div>
          <div className="dropdown-item">
            1.3. Kursus Les Privat Kembangan
          </div>
          <div className="dropdown-item">
            1.3.1. Menggunakan Media Pembelajaran Berbasis Teknologi
          </div>
          <div className="dropdown-item">
            1.3.2. Menjadi Partner Diskusi & Tanya Jawab
          </div>
          <div className="dropdown-item">
            1.3.3. Membuat Mind Mapping
          </div>
          <div className="dropdown-item">
            1.3.4. Penyedia Soal Terlengkap
          </div>
          <div className="dropdown-item">
            1.4. Mengapa Belajar di Lembaga Les Privat Kembangan?
          </div>
          <div className="dropdown-item">
            1.4.1. Meningkatkan Performa Belajar
          </div>
          <div className="dropdown-item">
            1.4.2. Meningkatkan Antusiasme Belajar
          </div>
          <div className="dropdown-item">
            1.4.3. Persiapan Sebelum Hadapi Ujian
          </div>
          <div className="dropdown-item">
            1.4.4. Solusi Orang Tua yang Sibuk
          </div>
          <div className="dropdown-item">
            1.5. Keunggulan Belajar di Lembaga Les Privat Kembangan
          </div>
          <div className="dropdown-item">
            1.5.1. Waktu Belajar Lebih Fleksibel
          </div>
          <div className="dropdown-item">
            1.5.2. Hemat Biaya Transportasi
          </div>
          <div className="dropdown-item">
            1.5.3. Data Evaluasi Siswa / Report Card
          </div>
          <div className="dropdown-item">
            1.5.4. Lebih Intensif dan Personal
          </div>
          <div className="dropdown-item">
            1.6. Biaya Les Privat Kembangan
          </div>
          <div className="dropdown-item">
            1.7. Bimbingan Les Privat di Kembangan
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
