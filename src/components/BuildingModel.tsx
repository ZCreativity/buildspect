import { Button, Stack, Typography } from "@mui/material";
import { Building } from "../data/types";
import { ModelViewer } from "./ModelViewer";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useNavigate } from "react-router-dom";

type BuildingProps = {
	building: Building;
};

const BuildingModel = ({ building }: BuildingProps) => {
	const navigate = useNavigate();

	console.log(building.model);

	return (
		<>
			{building.model ? (
				<ModelViewer building={building} />
			) : (
				<Stack
					style={{
						height: "100%",
						width: "100%",
						textAlign: "center",
						justifyContent: "center",
						flex: 1,
					}}
					gap={3}
				>
					<Stack direction="row" alignItems="center" justifyContent="space-around">
						<SentimentVeryDissatisfiedIcon style={{ fontSize: "2rem", color: "black" }} />
					</Stack>

					<Typography fontWeight={700} padding={3}>
						We're sorry, this is a demo version and we don't have this model available yet.
					</Typography>
					<Button
						sx={{ height: "3rem", width: "50%" }}
						variant="contained"
						onClick={() => navigate("/")}
						style={{ borderRadius: "2rem", textTransform: "none", alignSelf: "center" }}
					>
						Go back to home page
					</Button>
				</Stack>
			)}
		</>
	);
};

export default BuildingModel;
