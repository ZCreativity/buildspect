import { Container, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

type NoResultsProps = {
	searchText: string;
};

const NoResults = ({ searchText }: NoResultsProps) => {
	const navigate = useNavigate();

	return (
		<Stack style={{ height: "100%", width: "100%", textAlign: "center" }} gap={3}>
			<Stack direction="row" alignItems="center" justifyContent="space-around">
				<SentimentVeryDissatisfiedIcon style={{ fontSize: "2rem", color: "black" }} />
			</Stack>
			<Typography>
				We couldn't find a match for "<span style={{ fontWeight: 500 }}>{searchText}</span>"
			</Typography>
			<Typography fontWeight={700}>
				If you want a building to be mapped, please send us a request
			</Typography>
			<Button
				fullWidth
				sx={{ height: "3rem" }}
				variant="contained"
				onClick={() => navigate("/request")}
				style={{ borderRadius: "2rem", textTransform: "capitalize" }}
			>
				Send Request
			</Button>
		</Stack>
	);
};

export default NoResults;
