import React, { useState } from 'react';

const Themetoggle = (props) => {
	const [toggle, setToggle] = useState(false);

	const handleChange = () => {
		setToggle(!toggle);

		props.activate();
	};

	return (
		<div className={props.className}>
			<div
				className={`${
					toggle ? 'toggleBtnActive' : 'toggleBtn'
				} isClickable mAuto alignOnly px-1`}
				onClick={handleChange}
			>
				{toggle ? (
					<div className="toggleDotActive"></div>
				) : (
					<div className="toggleDot"></div>
				)}
			</div>
		</div>
	);
};

export default Themetoggle;
