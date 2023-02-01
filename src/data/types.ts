export type Building = {
	name: string;
	city: string;
	thumbnailImage: string; // Path to thumbnail image
	externalModel: string; // Path to 3D model file
	description?: string;
	detailImage?: string; // Path to detail image
	annotations: Annotation[];
};

export type Annotation = {
	title: string;
	description: string;
	detailImage: string;
};
