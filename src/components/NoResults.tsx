import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NoResults = () => {
	const navigate = useNavigate();

	return (
		<Container sx={{ height: "100%", textAlign: "center", paddingTop: "2rem" }}>
			<Typography>It seems that we can't find the building you are looking for.</Typography>
			<Typography>If you want a building to be mapped, please send us a request</Typography>
			<Button variant="contained" onClick={() => navigate("/request")}>
				Send Request
			</Button>
		</Container>
	);
};

export default NoResults;
