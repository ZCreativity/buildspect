export type Building = {
	name: string;
	city: string;
	thumbnailImage: string; // Path to thumbnail image
	externalModel: string; // Path to 3D model file
	description?: string;
	hasInternalModel: boolean;
	annotations: Annotation[];
};

export type Annotation = {
	title: string;
	description: string;
	camPos: CamPos;
	lookAt: CamPos;
};

export type CamPos = {
	x: number;
	y: number;
	z: number;
};
