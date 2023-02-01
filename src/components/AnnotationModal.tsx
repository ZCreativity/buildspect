import { CloseOutlined } from "@mui/icons-material";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import React from "react";

type AnnotationModalPropsType = {
	open: boolean;
	setOpen: (open: boolean) => void;
	title: string;
	imageUrl?: string;
	description: string;
};

const AnnotationModal = ({
	open,
	setOpen,
	title,
	imageUrl,
	description,
}: AnnotationModalPropsType) => {
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
							{title}
						</Typography>
						<IconButton onClick={() => setOpen(false)}>
							<CloseOutlined style={{ color: "black" }} />
						</IconButton>
					</Stack>
					{imageUrl && (
						<div
							style={{
								width: "100%",
								height: "50%",
								backgroundImage: `url(${imageUrl})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								aspectRatio: "16/9",
								borderRadius: "1rem",
							}}
						/>
					)}
					<Typography color="black" variant="body1" fontWeight={500}>
						{description}
					</Typography>
				</Stack>
			</div>
		</Modal>
	);
};

export default AnnotationModal;
