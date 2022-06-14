import React from "react";
import { FaRegCopyright} from 'react-icons/fa'



import "../styles/footer.scss";

export const Footer = () => {
      
  return (
    <div className="footer">
      <div className="icons-left">
        <FaRegCopyright className="copyright-icon" />
        <span>EcoWax</span>
      </div>

    </div>
  );
};
