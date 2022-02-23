import React from 'react';
import styles from '../styles/Landing.module.css';
import { exp } from '../utils/experience';

function Experience() {
	return (
		<div>
			<div className="">
				{exp.map((xp) => (
					<div
						className={`isRelative alignOnly sectionHeight--small ${styles.xpItem}`}
					>
						<div>
							<h2 className="sectionText textIsPink text--light mb-1">
								{xp.companyName}
							</h2>
							<p className="sectionText--mid textIsWhite text--light mb-0 mt-1">
								{xp.role}
							</p>
							<p className="mt-1 sectionText--small textIsWhite--fade text--light">
								{xp.duration}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Experience;
