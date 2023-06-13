import React from 'react';
import "./WaFloat.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WaFloat = () => {
  return (
    <React.Fragment>
      <a href="https://api.whatsapp.com/send?phone=+6281215523902&text=Halo%20Kak%2C%20Saya%20mau%20tanya%20mengenai%20bimbel%20diEdumatrix%20Terima%20kasih." target="_blank">
        <button className="btn-floating whatsapp">
            <FontAwesomeIcon className='icon-wafloat' icon={faWhatsapp} />
            <span>(+62) 8121-5523-902</span>
        </button>
    </a>
    </React.Fragment>
  );
}

export default WaFloat;
