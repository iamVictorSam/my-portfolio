import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Landing.module.css';
import Layout from '../reusables/Layout';
import { animtionValues, transitionValues } from '../utils/pageAnimation';

function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<Layout bgText="Hit me up.">
				<motion.div
					initial="out"
					animate="in"
					exit="out"
					variants={animtionValues}
					transition={transitionValues}
				>
					<div className={`sectionHeight alignOnly ${styles.contact}`}>
						<div className="container">
							<h2 className="sectionHead--mid textIsPink text--light">
								Leave a message.
							</h2>
							<p className="sectionText--mid textIsWhite text--light mt-2 mb-0">
								I'll be in touch, that's a promise!
							</p>

							<form className="mt-4" onSubmit={handleSubmit}>
								<div className="">
									<input
										type="text"
										className={styles.inputField}
										placeholder="Full Name"
									/>
								</div>

								<div className="row">
									<div className="mt-3 col-md-6">
										<input
											type="text"
											className={styles.inputField}
											placeholder="Email"
										/>
									</div>

									<div className="mt-3 col-md-6">
										<input
											type="text"
											className={styles.inputField}
											placeholder="Phone Number"
										/>
									</div>
								</div>

								<div className="mt-3">
									<textarea
										className={`sectionHeight--small ${styles.inputField}`}
										placeholder="Message"
									/>
								</div>

								<button className="defaultBtn mt-3">
									Send Message
									<i className="fas fa-angle-right"></i>
								</button>
							</form>
						</div>
					</div>
				</motion.div>
			</Layout>
		</div>
	);
}

export default Contact;
