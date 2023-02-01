import "@google/model-viewer";
import { Box, Modal, Typography } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import AnnotationModal from "./AnnotationModal";
import { Building } from "../data/types";

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

	useLayoutEffect(() => {
		const modelViewer = document.getElementById("model-viewer") as any;
		modelViewer.addEventListener("ar-status", (status: any) => {
			modelViewer.setAttribute("camera-orbit", "0deg 90deg 10%");
		});
	});

	return (
		<model-viewer
			id="model-viewer"
			camera-controls
			touch-action="pan-y"
			ar
			src="../assets/models/colosseo/colosseum/scene.gltf"
			ios-src="../assets/models/colosseo/colosseum.usdz"
			xr-environment
		>
			{/* <button
				className="Hotspot"
				slot="hotspot-2"
				data-surface="5 0 9600 9601 9602 0.376 0.057 0.567"
				data-visibility-attribute="visible"
			>
				<div className="HotspotAnnotation">1</div>
			</button>
			<button
				className="Hotspot"
				slot="hotspot-3"
				data-surface="5 0 3063 3063 3063 0.300 0.005 0.695"
				data-visibility-attribute="visible"
			>
				<div className="HotspotAnnotation">2</div>
			</button>
			<button
				className="Hotspot"
				slot="hotspot-4"
				data-surface="41 0 37476 37477 37478 0.058 0.318 0.624"
				data-visibility-attribute="visible"
			>
				<div className="HotspotAnnotation">3</div>
			</button> */}

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
