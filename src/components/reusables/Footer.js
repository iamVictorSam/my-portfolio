import React from "react";
import styles from "../styles/Nav.module.css";

function Footer() {
  return (
    <div className={`alignOnly ${styles.footer}`}>
      <div className="container">
        <div className="spaceBetween ">
          <div className="">
            <p className="sectionText--small mb-0 textIsWhite">
              Copyright © 2022. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
