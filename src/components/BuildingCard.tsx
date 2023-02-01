import React from "react";
import { Building } from "../data/types";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { LocationOn, LocationOnOutlined } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";

type BuildingCardProps = {
	building: Building;
};

const BuildingCard = ({ building }: BuildingCardProps) => {
	const navigate = useNavigate();

	return (
		<>
			<div
				style={{
					width: "100%",
					height: "50%",
					backgroundImage: `url(${building.thumbnailImage})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					aspectRatio: "16/9",
					borderRadius: "1rem",
					marginBottom: "2rem",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						padding: "1.2rem",
						background:
							"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0) 50%)",
						height: "100%",
						borderRadius: "1rem",
					}}
				>
					<Stack direction="row" justifyContent="flex-start">
						<Chip
							label={building.city}
							icon={<LocationOnOutlined />}
							variant="filled"
							style={{
								background: "white",
								padding: "0.25rem",
								fontFamily: "Poppins",
								fontWeight: 500,
							}}
						/>
					</Stack>
					<Stack direction="row" justifyContent="space-between" alignItems="end">
						<Typography color="white" variant="h4" fontWeight={700}>
							{building.name}
						</Typography>
						<Button
							variant="contained"
							color="info"
							style={{ borderRadius: 999 }}
							onClick={() => navigate("/scene", { state: { building } })}
						>
							View
						</Button>
					</Stack>
				</div>
			</div>
		</>
	);
};

export default BuildingCard;
