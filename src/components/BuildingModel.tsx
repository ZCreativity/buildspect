import { useRef } from "react";
import { Building } from "../data/types";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html, useProgress } from "@react-three/drei";
import { ModelViewer } from "./ModelViewer";

type BuildingProps = {
	building: Building;
};

const BuildingModel = ({ building }: BuildingProps) => {
	return (
		<>
			<ModelViewer building={building} />
		</>
	);
};

export default BuildingModel;
