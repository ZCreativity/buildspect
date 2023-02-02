import { Building } from "../data/types";
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
