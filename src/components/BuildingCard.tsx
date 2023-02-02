import React from "react";
import { Building } from "../data/types";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { LocationOn, LocationOnOutlined } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";

type BuildingCardProps = {
	building: Building;
	setSearchText: any;
};

const BuildingCard = ({ building, setSearchText }: BuildingCardProps) => {
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
							icon={<LocationOnOutlined style={{ color: "black", width: 20, height: 20 }} />}
							variant="filled"
							onClick={() => setSearchText(building.city)}
							style={{
								background: "white",
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
							color="primary"
							style={{ borderRadius: 999, textTransform: "capitalize" }}
							onClick={() => navigate("/scene", { state: { building } })}
						>
							View 3D
						</Button>
					</Stack>
				</div>
			</div>
		</>
	);
};

export default BuildingCard;
