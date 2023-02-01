import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const VideoCameraBackground = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	function handleResize() {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}

	useEffect(() => {
		handleResize();
	}, []);

	const videoContraints: MediaTrackConstraints = {
		facingMode: { ideal: "environment" },
		height: { exact: width },
		width: { exact: height },
	};

	return <Webcam allowFullScreen videoConstraints={videoContraints} />;
};

export default VideoCameraBackground;
