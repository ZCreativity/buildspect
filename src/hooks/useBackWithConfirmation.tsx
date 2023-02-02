import { useConfirm } from "material-ui-confirm";
import { useNavigate } from "react-router-dom";

function useBackWithConfirmation(description: string) {
	const confirm = useConfirm();
	const navigate = useNavigate();

	const handleBack = () => {
		confirm({
			description,
			dialogProps: {
				PaperProps: {
					style: {
						borderRadius: "1rem",
					},
				},
			},
			confirmationButtonProps: {
				variant: "contained",
				style: {
					borderRadius: ".75rem",
				},
			},
			cancellationButtonProps: {
				style: {
					color: "#BB2649",
				},
			},
		})
			.then(() => {
				navigate(-1);
			})
			.catch(() => {
				// do nothing
			});
	};

	return handleBack;
}

export default useBackWithConfirmation;
