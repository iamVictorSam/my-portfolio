import React from 'react';
import styles from '../styles/Landing.module.css';

function Skills() {
	const skills = [
		'HTML',
		'CSS',
		'JavaScript',
		'React.js',
		'Redux',
		'Next.js',
		'Bootstrap',
		'Bulma',
		'Material UI',
		'SCSS',
		'Firebase',
		'Git and Version Control',
		'Technical writing',
		'Wix',
		'WordPress',
		'Content creation',
	];
	return (
		<div className={styles.skills}>
			<ul className="mt-3 mx-2">
				{skills.map((skill) => (
					<li className="sectionText--mid text--light">{skill}</li>
				))}
			</ul>
		</div>
	);
}

export default Skills;
