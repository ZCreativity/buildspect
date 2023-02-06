import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const EmailResult = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { success } = location.state;

	return (
		<div
			style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
		>
			<Stack gap={3} alignItems="center" justifyContent="center" style={{ textAlign: "center" }}>
				{success ? (
					<CheckCircleOutline style={{ color: "green", fontSize: "3rem" }} />
				) : (
					<ErrorOutline style={{ color: "red", fontSize: "3rem" }} />
				)}
				<Typography variant="h6" style={{ color: "black", fontSize: "1.2rem", fontWeight: 700 }}>
					{success
						? "Your request has been sent successfully!"
						: "There was an error sending your request. Please try again later."}
				</Typography>
				<Button
					variant="contained"
					color="primary"
					sx={{ height: 60, borderRadius: "1rem", width: "90%", textTransform: "none" }}
					onClick={() => navigate("/")}
				>
					Go back to home page
				</Button>
			</Stack>
		</div>
	);
};

export default EmailResult;
