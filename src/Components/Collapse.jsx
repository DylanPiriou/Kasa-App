import React, { useState } from "react";
import "../Assets/styles/Collapse.scss";

export default function Collapse({ title, content, index }) {
	const [isActive, setIsActive] = useState(false);

	const handleCollapse = () => {
		setIsActive((current) => !current);
	};

	return (
		<div className="collapse" id={"collapse-" + index}>
			<button className="collapse-btn" onClick={() => handleCollapse()}>
				<h2 className="collapse-title">{title}</h2>
				{isActive ? (
					<i className="fa-solid fa-chevron-up"></i>
				) : (
					<i className="fa-solid fa-chevron-down"></i>
				)}
			</button>
			{isActive && <div className="collapse-content">{content}</div>}
		</div>
	);
}
