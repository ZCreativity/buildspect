import { CloseOutlined, LocationOnOutlined } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Button, Chip, IconButton, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { Building } from "../data/types";

type BuildingModalPropsType = {
	open: boolean;
	setOpen: (open: boolean) => void;
	building: Building;
};

const BuildingModal = ({ open, setOpen, building }: BuildingModalPropsType) => {
	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<div
				style={{
					width: "80%",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%,-50%)",
					padding: "1rem",
					backgroundColor: "white",
					color: "white",
					fontFamily: "Poppins",
					borderRadius: "1rem",
				}}
			>
				<Stack gap={2}>
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Typography variant="h5" fontWeight={700} color="black">
							{building.name}
						</Typography>
						<IconButton onClick={() => setOpen(false)}>
							<CloseOutlined style={{ color: "black" }} />
						</IconButton>
					</Stack>
					{building.detailImage && (
						<div
							style={{
								width: "100%",
								height: "50%",
								backgroundImage: `url(${building.detailImage})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								aspectRatio: "16/9",
								borderRadius: "1rem",
							}}
						/>
					)}
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Chip
							label={building.city}
							icon={
								<LocationOnOutlined style={{ color: "white", width: "20px", height: "20px" }} />
							}
							variant="filled"
							color="primary"
							style={{
								fontFamily: "Poppins",
								fontWeight: 500,
							}}
						/>
						<Chip
							label={"Built in " + building.builtDate}
							icon={<AccessTimeIcon style={{ color: "black", width: 20, height: 20 }} />}
							variant="filled"
							color="default"
							style={{
								fontFamily: "Poppins",
								fontWeight: 500,
							}}
						/>
					</Stack>
					<Typography color="black" variant="body1" fontWeight={400} fontSize={14}>
						{building.description}
					</Typography>
					{building.wikipedia && (
						<Button
							variant="contained"
							color="primary"
							style={{
								width: "100%",
								textTransform: "none",
								borderRadius: ".5rem",
								backgroundColor: "black",
							}}
							onClick={() => window.open(building.wikipedia, "_blank")}
						>
							Read More on Wikipedia
							<img
								src="../assets/svg/wikipedia.svg"
								style={{ width: "1.25rem", marginLeft: ".5rem" }}
							/>
						</Button>
					)}
				</Stack>
			</div>
		</Modal>
	);
};

export default BuildingModal;
