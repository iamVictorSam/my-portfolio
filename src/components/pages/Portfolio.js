import React from "react";
import styles from "../styles/Landing.module.css";
import Layout from "../reusables/Layout";
import { animtionValues, transitionValues } from "../utils/pageAnimation";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div>
      <Layout bgText="Portfolio">
        <div className="w-100">
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animtionValues}
            transition={transitionValues}
          >
            <div className={`sectionHeight ${styles.portfolio}`}>
              <div className="container pt-3">
                <h2 className="sectionHead--mid textIsPink text--light">
                  Recent Projects
                </h2>

                <div className="row pt-3 pb-4">
                  <div className="col-md-6">
                    <div className={`center isClickable ${styles.projectCard}`}>
                      <div>
                        <div className={styles.imgHolder}>
                          <img
                            src="/images/gpt3.png"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`center ${styles.projectInfo} `}>
                        <div className="p-4 vAlign">
                          <p className="textIsPink sectionHead--mid">AI App</p>
                          <p className="textIsWhite">
                            An Artificial Intelligent Landing page built with
                            React
                          </p>

                          <a
                            href="https://jexi-gpt3.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Visit Project
                          </a>
                          <a
                            href="https://github.com/iamVictorSam/jexi-gpt-3"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className={`center isClickable ${styles.projectCard}`}>
                      <div>
                        <div className={styles.imgHolder}>
                          <img
                            src="/images/easybanking.png"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`center ${styles.projectInfo} `}>
                        <div className="p-4 vAlign">
                          <p className="textIsPink sectionHead--mid">
                            Easy Banking
                          </p>
                          <p className="textIsWhite">
                            An Easy Banking Landing page built with Html and
                            Sass
                          </p>

                          <a
                            href="https://jexi-bank.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Visit Project
                          </a>
                          <a
                            href="https://github.com/iamVictorSam/easy-banking"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <div className={`center isClickable ${styles.projectCard}`}>
                      <div>
                        <div className={styles.imgHolder}>
                          <img
                            src="/images/gitfinder.png"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`center ${styles.projectInfo} `}>
                        <div className="p-4 vAlign">
                          <p className="textIsPink sectionHead--mid">
                            Github Finder
                          </p>
                          <p className="textIsWhite">
                            A Finder App used for searching for users in Github
                            built with react
                          </p>

                          <a
                            href="https://jexi-git-finder.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Visit Project
                          </a>
                          <a
                            href="https://github.com/Iamvictorsam/jexi-git-finder"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <div className={`center isClickable ${styles.projectCard}`}>
                      <div>
                        <div className={styles.imgHolder}>
                          <img
                            src="/images/mapty.png"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`center ${styles.projectInfo} `}>
                        <div className="p-4 vAlign">
                          <p className="textIsPink sectionHead--mid">
                            Workout App
                          </p>
                          <p className="textIsWhite">
                            An app built to track workouts using Javascript and
                            the Leaflet Api.
                          </p>

                          <a
                            href="https://mapty-web-application.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Visit Project
                          </a>
                          <a
                            href="https://github.com/iamVictorSam/mapty-workout-app"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <div className={`center isClickable ${styles.projectCard}`}>
                      <div>
                        <div className={styles.imgHolder}>
                          <img src="/images/pig.png" className="w-100" alt="" />
                        </div>
                      </div>
                      <div className={`center ${styles.projectInfo} `}>
                        <div className="p-4 vAlign">
                          <p className="textIsPink sectionHead--mid">
                            Dice game
                          </p>
                          <p className="textIsWhite">
                            A Dice game built with Javascript.
                          </p>

                          <a
                            href="https://iamvictorsam-dice-pig-game.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Visit Project
                          </a>
                          <a
                            href="https://github.com/iamVictorSam/pig-dice-game"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6 mt-4">
                    <div className={`center isClickable ${styles.projectCard}`}>
                      <div>
                        <div className={styles.imgHolder}>
                          <img
                            src="/images/task tracker.png"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className={`center ${styles.projectInfo} `}>
                        <div className="p-4 vAlign">
                          <p className="textIsPink sectionHead--mid">
                            Task Tracker
                          </p>
                          <p className="textIsWhite">
                            A Task tracker built to learn React.
                          </p>

                          <a
                            href="https://simple-react-task-tracker.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Visit Project
                          </a>
                          <a
                            href="https://github.com/IsaacThaJunior/basic-task-tracker-app"
                            target="_blank"
                            rel="noreferrer"
                            className="textIsPink textIsBold"
                          >
                            <i className="fas fa-link mx-1"></i>
                            Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    </div>
  );
}

export default Portfolio;
