import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../reusables/Layout";
import styles from "../styles/Landing.module.css";
import { animtionValues, transitionValues } from "../utils/pageAnimation";

function Home() {
  return (
    <div>
      <Layout bgText={<span>..Victor</span>}>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animtionValues}
          transition={transitionValues}
        >
          <div className={`alignOnly container ${styles.hero}`}>
            <div className="row w-100">
              <div className="col-md-6 alignOnly sectionHeight">
                <div className={`textIsWhite w-100 ${styles.textHolder}`}>
                  <div
                    className={`sectionHead--mid textIsPink mb-2 ${styles.greeting}`}
                  >
                    <ul className={styles.greetingList}>
                      <li>
                        <span>Hello</span>
                      </li>
                      <li>
                        <span>Hola</span>
                      </li>
                      <li>
                        <span>Bonjour</span>
                      </li>
                      <li>
                        <span>Salve</span>
                      </li>
                    </ul>
                  </div>
                  <p
                    style={{
                      lineHeight: 2,
                      fontSize: 17,
                      fontWeight: 400,
                    }}
                    className="text--light"
                  >
                    Hello, my name is Sam Victor, a Frontend Web and Mobile
                    Developer, Technical Author and Student currently living in
                    Port Harcourt, Nigeria. I am passionate about bringing
                    Designs to life with code and also breaking down complex
                    technologies and terminologies into easy to understand
                    concepts. I also contribute to Open source from time to time
                  </p>
                  <Link to="/portfolio" className="defaultBtn vAlign">
                    View Projects
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 sectionHeight alignOnly">
                <div className={styles.imgHolder}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </div>
  );
}

export default Home;
