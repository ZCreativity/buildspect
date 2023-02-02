import { useLocation, useNavigate } from "react-router-dom";
import BuildingModel from "../components/BuildingModel";
import { IconButton, Modal, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoCameraBackground from "../components/VideoCameraBackground";
import { Help, HelpOutline, InfoOutlined } from "@mui/icons-material";
import React from "react";
import BuildingModal from "../components/BuildingModal";
import useBackWithConfirmation from "../hooks/useBackWithConfirmation";

const Scene = () => {
	const location = useLocation();
	const { building } = location.state;

	const [open, setOpen] = React.useState(false);

	const handleBack = useBackWithConfirmation(
		"Are you sure you want to go back? The model will be reloaded and this may take a while."
	);

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
				<Stack direction="row" alignItems="center" justifyContent="space-between" padding={2}>
					<IconButton onClick={handleBack}>
						<ArrowBackIcon style={{ color: "black", width: "2rem", height: "2rem" }} />
					</IconButton>
					<Typography variant="h6" fontWeight={700}>
						{building.name}
					</Typography>
					<IconButton onClick={() => setOpen(true)}>
						<InfoOutlined style={{ color: "black", width: "2rem", height: "2rem" }} />
					</IconButton>
				</Stack>
				<BuildingModal open={open} setOpen={setOpen} building={building} />
				<BuildingModel building={building} />
			</div>
		</>
	);
};

export default Scene;
