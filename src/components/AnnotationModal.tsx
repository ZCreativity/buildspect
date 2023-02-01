import { Box, Modal, Typography } from "@mui/material";
import React from "react";

type AnnotationModalPropsType = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const AnnotationModal = ({ open, setOpen }: AnnotationModalPropsType) => {
	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%,-50%)",
					padding: "1rem",
					backgroundColor: "black",
					color: "white",
					fontFamily: "Poppins",
				}}
			>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Text in a modal
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</div>
		</Modal>
	);
};

export default AnnotationModal;
