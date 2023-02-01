import { IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormElement from "../components/FormElement";

const RequestBuilding = () => {
	const navigate = useNavigate();

	const [buildingName, setBuildingName] = React.useState<string>("");
	const [buildingLocation, setBuildingLocation] = React.useState<string>("");
	const [buildingYear, setBuildingYear] = React.useState<string>("");
	const [notes, setNotes] = React.useState<string>("");
	const [senderName, setSenderName] = React.useState<string>("");

	return (
		<div style={{ padding: "2rem" }}>
			<Stack gap={4}>
				<Stack direction="row" alignItems="center" justifyContent="flex-start" gap={2}>
					<IconButton onClick={() => navigate(-1)}>
						<ArrowBackIcon style={{ color: "black", width: "2rem", height: "2rem" }} />
					</IconButton>
					<Typography style={{ color: "black" }} variant="h4" fontWeight={700}>
						Propose a new building
					</Typography>
				</Stack>
				<FormElement
					title="Building's name"
					value={buildingName}
					setValue={setBuildingName}
					placeHolder="Insert building's name"
				/>
				<FormElement
					title="Location"
					value={buildingLocation}
					setValue={setBuildingLocation}
					placeHolder="Insert building's location/city"
				/>
				<FormElement
					title="Year of construction"
					value={buildingName}
					setValue={setBuildingName}
					placeHolder="Insert building's year of construction"
				/>
				<FormElement
					title="Your name"
					value={senderName}
					setValue={setSenderName}
					placeHolder="Insert your name"
				/>
				<FormElement
					title="Notes"
					value={notes}
					multiline
					setValue={setNotes}
					placeHolder="Add some note you want to share with us"
				/>
			</Stack>
		</div>
	);
};

export default RequestBuilding;
