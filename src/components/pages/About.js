import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Landing.module.css";
import Layout from "../reusables/Layout";
import Skills from "../about/skills";
import Experience from "../about/experience";
import { animtionValues, transitionValues } from "../utils/pageAnimation";

function About() {
  return (
    <div>
      <Layout>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animtionValues}
          transition={transitionValues}
        >
          <div className={styles.about}>
            <div className="container">
              <div className="alignOnly fullHeight mb-5">
                <div className={styles.heroCard}>
                  <div className="row flex-reverse no-gutters h-100">
                    <div className="col-md-6 noPad">
                      <div
                        className={`center sectionHeight--mid w-100 ${styles.iconHolder}`}
                      >
                        <div className={styles.icon}>
                          <img
                            src="/images/cube.png"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 alignOnly noPad">
                      <div className={styles.textHolder}>
                        <h2 className="sectionText textIsPink text--light">
                          _About me
                        </h2>
                        <p
                          className="sectionText--mid textIsWhite text--light mb-0 pt-2 "
                          style={{
                            lineHeight: 1.8,
                            fontSize: 20,
                            fontWeight: 700,
                          }}
                        >
                          Hello, my name is Sam Victor, a Frontend Web and
                          Mobile Developer, Technical Author and Student
                          currently living in Port Harcourt, Nigeria. I am
                          passionate about bringing Designs to life with code
                          and also breaking down complex technologies and
                          terminologies into easy to understand concepts.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row  h-100">
                    <div className="col-md-6 alignOnly noPad">
                      <div className={styles.textHolder}>
                        <h2 className="sectionTe xt textIsPink text--light">
                          ...
                        </h2>
                        <p
                          className="sectionText--mid textIsWhite text--light mb-0 pt-2 "
                          style={{
                            lineHeight: 1.8,
                            fontSize: 20,
                            fontWeight: 700,
                          }}
                        >
                          I enjoy every step of the development process. From
                          specifications and planning to implementation and
                          coding, it always gives me some level of fulfillment
                          when I complete a project.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 noPad">
                      <div
                        className={`center sectionHeight--mid w-100 ${styles.iconHolder}`}
                      >
                        <div className={`center ${styles.icon}`}>
                          <img src="/images/tools.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <h2 className="sectioonHead--mid textIsPink text--light">
                  Skills & Experience
                </h2>
                <p className="sectionText--mid textIsWhite--fade text--light">
                  My skillset and experience so far
                </p>
                <div className={`${styles.heroCard}`}>
                  <div className="sectionHeight">
                    <div className="row mt-3">
                      <div className="col-md-8">
                        <Experience />
                      </div>
                      <div className="col-md-4">
                        <Skills />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </div>
  );
}

export default About;
