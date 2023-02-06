import "@google/model-viewer";
import { Box, Modal, Typography } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import AnnotationModal from "./AnnotationModal";
import { Building } from "../data/types";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"model-viewer": MyElementAttributes;
		}
		interface MyElementAttributes {
			src: string;
			ar: boolean;
			children: any;
			id: string;
			loading: string;
		}
	}
}

type ModelViewerPropsType = {
	building: Building;
};

export const ModelViewer = ({ building }: ModelViewerPropsType) => {
	const [modal, setModal] = useState(false);
	const [annotationTitle, setAnnotationTitle] = useState("");
	const [annotationDescription, setAnnotationDescription] = useState("");
	const [annotationImageUrl, setAnnotationImageUrl] = useState("");

	window.addEventListener("beforeunload", () => {
		return "";
	});

	return (
		<model-viewer
			id="model-viewer"
			camera-controls
			loading="eager"
			touch-action="pan-y"
			ar
			src={building.model}
			ios-src={building.iosModel}
			xr-environment
		>
			<button
				className="Hotspot"
				slot="hotspot-1"
				// data-surface="52 0 30633 30634 30635 0.300 0.005 0.695"
				data-position="2 0 0"
				data-visibility-attribute="visible"
				onClick={() => {
					setAnnotationTitle(building.annotations[0].title);
					setAnnotationDescription(building.annotations[0].description);
					setAnnotationImageUrl(building.annotations[0].detailImage);
					setModal(true);
				}}
			>
				<div className="HotspotAnnotation">1</div>
			</button>
			<button
				className="Hotspot"
				slot="hotspot-2"
				// data-surface="5 0 9600 9601 9602 0.376 0.057 0.567"
				data-position="0 0 0"
				data-visibility-attribute="visible"
				onClick={() => {
					setAnnotationTitle(building.annotations[1].title);
					setAnnotationDescription(building.annotations[1].description);
					setAnnotationImageUrl(building.annotations[1].detailImage);
					setModal(true);
				}}
			>
				<div className="HotspotAnnotation">2</div>
			</button>
			<button
				className="Hotspot"
				slot="hotspot-3"
				// data-surface="5 0 9600 9601 9602 0.376 0.057 0.567"
				data-position="0 1 -2"
				data-visibility-attribute="visible"
				onClick={() => {
					setAnnotationTitle(building.annotations[2].title);
					setAnnotationDescription(building.annotations[2].description);
					setAnnotationImageUrl(building.annotations[2].detailImage);
					setModal(true);
				}}
			>
				<div className="HotspotAnnotation">3</div>
			</button>
			<button
				slot="ar-button"
				className="ar-button"
				style={{
					position: "absolute",
					bottom: 10,
					right: 10,
					background: "#009384",
					color: "white",
					padding: 10,
					borderRadius: 90,
					border: "none",
					boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
					width: 150,
					height: 50,
					fontFamily: "Poppins",
					fontSize: 16,
					fontWeight: 500,
					display: "flex",
					alignItems: "center",
					textAlign: "center",
					justifyContent: "center",
				}}
			>
				<ViewInArIcon style={{ marginRight: 7 }} /> View in AR
			</button>
			<AnnotationModal
				open={modal}
				setOpen={setModal}
				title={annotationTitle}
				description={annotationDescription}
				imageUrl={annotationImageUrl}
			/>
		</model-viewer>
	);
};
