import React from "react";
import { useLocation } from "react-router-dom";
import BuildingModel from "../components/BuildingModel";
import { Typography } from "@mui/material";
import VideoCameraBackground from "../components/VideoCameraBackground";

const Scene = () => {
	const location = useLocation();
	const { building } = location.state;

	return (
		<>
			{/* <VideoCameraBackground /> */}
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					position: "absolute",
					top: 0,
					left: 0,
					flexDirection: "column",
					justifyContent: "space-between",
					zIndex: 1,
				}}
			>
				<Typography variant="h6" fontWeight={700}>
					{building.name}
				</Typography>
				<BuildingModel building={building} />
			</div>
		</>
	);
};

export default Scene;
