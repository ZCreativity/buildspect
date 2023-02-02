import { Button, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormElement from "../components/FormElement";
import { useConfirm } from "material-ui-confirm";
import useBackWithConfirmation from "../hooks/useBackWithConfirmation";

const RequestBuilding = () => {
	const handleBack = useBackWithConfirmation(
		"Are you sure you want to go back? You will lose all the inserted data."
	);

	const [buildingName, setBuildingName] = React.useState<string>("");
	const [buildingLocation, setBuildingLocation] = React.useState<string>("");
	const [buildingYear, setBuildingYear] = React.useState<string>("");
	const [notes, setNotes] = React.useState<string>("");
	const [senderName, setSenderName] = React.useState<string>("");

	return (
		<Stack padding={2}>
			<Stack direction="row" alignItems="center" justifyContent="flex-start" gap={2}>
				<IconButton onClick={handleBack}>
					<ArrowBackIcon style={{ color: "black", width: "2rem", height: "2rem" }} />
				</IconButton>
				<Typography style={{ color: "black" }} variant="h4" fontWeight={700}>
					Propose building
				</Typography>
			</Stack>
			<Stack gap={4} padding={2}>
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
				<Button
					fullWidth
					variant="contained"
					sx={{ borderRadius: "2rem", height: 60, textTransform: "capitalize", fontSize: "1rem" }}
				>
					Send Request
				</Button>
			</Stack>
		</Stack>
	);
};

export default RequestBuilding;
