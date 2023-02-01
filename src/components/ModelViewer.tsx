import "@google/model-viewer";
import { Box, Modal, Typography } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import AnnotationModal from "./AnnotationModal";

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

export const ModelViewer = function () {
	const [modal, setModal] = useState(false);

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
			<button
				className="Hotspot"
				slot="hotspot-2"
				data-surface="4 0 58422 58423 58424 0.178 0.001 0.821"
				data-visibility-attribute="visible"
				onClick={() => {
					setModal(true);
				}}
			>
				<div className="HotspotAnnotation">1</div>
			</button>
			<AnnotationModal open={modal} setOpen={setModal} />
		</model-viewer>
	);
};
