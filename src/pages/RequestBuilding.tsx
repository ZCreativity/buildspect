import { Button, CircularProgress, IconButton, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormElement from "../components/FormElement";
import { useConfirm } from "material-ui-confirm";
import useBackWithConfirmation from "../hooks/useBackWithConfirmation";
import emailjs from "@emailjs/browser";
import { Formik, FormikValues, useFormik } from "formik";
import * as Yup from "yup";

const SERVICE_ID = "service_gh3e35v";
const TEMPLATE_ID = "building_request_id";
const PUBLIC_KEY = "stM_D5c1vCGLFYvZu";

const RequestBuilding = () => {
	const navigate = useNavigate();
	const formRef = React.useRef<HTMLFormElement>(null);
	const handleBack = useBackWithConfirmation(
		"Are you sure you want to go back? You will lose all the inserted data."
	);

	const [loading, setLoading] = React.useState(false);

	const validationSchema = Yup.object().shape({
		building_name: Yup.string().required("Required"),
		building_location: Yup.string().required("Required"),
		sender_email: Yup.string().email("Invalid email").required("Required"),
		sender_name: Yup.string().required("Required"),
		notes: Yup.string(),
	});

	const formik = useFormik({
		initialValues: {
			building_name: "",
			building_location: "",
			sender_email: "",
			sender_name: "",
			message: "",
		},
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
			setLoading(true);
			sendEmail();
		},
	});

	const sendEmail = () => {
		if (formRef.current) {
			emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
				(result) => {
					console.log(result.text);
					setLoading(false);
					navigate("/email-result", { state: { success: true } });
				},
				(error) => {
					console.log(error.text);
					setLoading(false);
					navigate("/email-result", { state: { success: false } });
				}
			);
		}
	};

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
			<form ref={formRef} onSubmit={formik.handleSubmit}>
				<Stack gap={4} padding={2} marginTop={2}>
					<Typography variant="h5" fontWeight={500}>
						Building's info
					</Typography>
					<FormElement
						title="Name"
						name="building_name"
						value={formik.values.building_name}
						formikHandleChange={formik.handleChange}
						placeHolder="Insert building's name"
						formikError={formik.errors.building_name}
						formikTouched={formik.touched.building_name}
					/>
					<FormElement
						name="building_location"
						title="Location"
						value={formik.values.building_location}
						placeHolder="Insert building's location/city"
						formikHandleChange={formik.handleChange}
						formikError={formik.errors.building_location}
						formikTouched={formik.touched.building_location}
					/>
					<Typography variant="h5" fontWeight={500}>
						Your info
					</Typography>

					<FormElement
						name="sender_email"
						title="Email"
						value={formik.values.sender_email}
						placeHolder="youremail@exaple.com"
						formikHandleChange={formik.handleChange}
						formikError={formik.errors.sender_email}
						formikTouched={formik.touched.sender_email}
					/>
					<FormElement
						name="sender_name"
						title="Name"
						value={formik.values.sender_name}
						placeHolder="Insert your name"
						formikHandleChange={formik.handleChange}
						formikError={formik.errors.sender_name}
						formikTouched={formik.touched.sender_name}
					/>
					<FormElement
						name="message"
						title="Notes"
						value={formik.values.message}
						multiline
						placeHolder="Add some note you want to share with us"
						formikHandleChange={formik.handleChange}
						formikError={formik.errors.message}
						formikTouched={formik.touched.message}
					/>

					<Button
						fullWidth
						type="submit"
						variant="contained"
						endIcon={loading ? <CircularProgress size={20} /> : null}
						sx={{
							borderRadius: "2rem",
							height: 60,
							textTransform: "capitalize",
							fontSize: "1rem",
						}}
					>
						Send Request
					</Button>
				</Stack>
			</form>
		</Stack>
	);
};

export default RequestBuilding;
