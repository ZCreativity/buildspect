import { useRef } from "react";
import { Building } from "../data/types";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html, useProgress } from "@react-three/drei";
import { ModelViewer } from "./ModelViewer";

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

const Model = ({ building }: BuildingProps) => {
	const gltf = useLoader(GLTFLoader, building.externalModel);
	return <primitive object={gltf.scene} scale={0.4} />;
};

type BuildingProps = {
	building: Building;
};

const BuildingModel = ({ building }: BuildingProps) => {
	const ref = useRef<any | null>();

	return (
		<>
			{/* <Canvas camera={{ position: [3, 2, -3] }}>
				<Suspense fallback={<Loader />}>
					<ambientLight intensity={0.8} />
					<Model building={building} />
					<OrbitControls makeDefault ref={ref} />
				</Suspense>
			</Canvas> */}
			<ModelViewer building={building} />
		</>
	);
};

export default BuildingModel;
