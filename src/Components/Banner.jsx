import React from "react";
import "../Assets/styles/Banner.scss";

export default function Banner({ bg, title }) {
	const absoluteUrl = window.location.origin + bg;

	return (
		<div className="banner">
			<img src={absoluteUrl} className="banner-img" alt="nature" />
			<h1 className="banner-title">{title}</h1>
		</div>
	);
}
