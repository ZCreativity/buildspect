import { FormControl, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import React from "react";

type FormElementProps = {
	title: string;
	placeHolder?: string;
	multiline?: boolean;
	value: string;
	name: string;
	required?: boolean;
	formikHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	formikError: string | undefined;
	formikTouched: boolean | undefined;
};

const FormElement = ({
	title,
	multiline = false,
	value,
	placeHolder = "",
	name,
	formikError,
	formikHandleChange,
	formikTouched,
}: FormElementProps) => {
	return (
		<>
			<Stack gap={1}>
				<Typography variant="h6" style={{ color: "black", fontSize: "1.1rem", fontWeight: 400 }}>
					{title}
				</Typography>
				<>
					<TextField
						name={name}
						onChange={formikHandleChange}
						fullWidth
						placeholder={placeHolder}
						variant="outlined"
						value={value}
						multiline={multiline}
						rows={multiline ? 6 : 1}
						sx={{
							"& .MuiOutlinedInput-root": {
								border: "none",
								fontFamily: "Poppins",
								color: "black",
								fontSize: "1rem",
								padding: multiline ? "1rem 1.75rem" : "0.5rem 1rem",
							},

							"& .MuiOutlinedInput-notchedOutline": {
								border: "none",
								borderRadius: 10,
								WebkitBoxShadow: "0px 0px 50px -20px rgba(0,0,0,0.63)",
								boxShadow: "0px 0px 50px -20px rgba(0,0,0,0.63)",
							},
						}}
					></TextField>
					{formikError && formikTouched && (
						<Typography color="red" variant="caption">
							{formikError}
						</Typography>
					)}
				</>
			</Stack>
		</>
	);
};

export default FormElement;
