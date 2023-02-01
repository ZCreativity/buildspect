import { Html } from "@react-three/drei";
import { Annotation } from "../data/types";

type AnnotationPropsType = {
	annotations: Annotation[];
	selected: number;
	gotoAnnotation: (index: number) => void;
};

function Annotations({ annotations, selected, gotoAnnotation }: AnnotationPropsType) {
	return (
		<>
			{annotations.map((a: Annotation, i: number) => {
				return (
					<Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
						<svg
							height="34"
							width="34"
							transform="translate(-16 -16)"
							style={{ cursor: "pointer" }}
						>
							<circle
								cx="17"
								cy="17"
								r="16"
								stroke="white"
								strokeWidth="2"
								fill="rgba(0,0,0,.66)"
								onClick={() => gotoAnnotation(i)}
							/>
							<text
								x="12"
								y="22"
								fill="white"
								fontSize={17}
								fontFamily="monospace"
								style={{ pointerEvents: "none" }}
							>
								{i + 1}
							</text>
						</svg>
						{a.description && i === selected && (
							<div
								id={"desc_" + i}
								className="annotationDescription"
								dangerouslySetInnerHTML={{ __html: a.description }}
							/>
						)}
					</Html>
				);
			})}
		</>
	);
}

export default Annotations;
