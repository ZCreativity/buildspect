export type Building = {
	name: string;
	city: string;
	thumbnailImage: string; // Path to thumbnail image
	model: string; // Path to 3D model file
	iosModel?: string; // Path to 3D model file for iOS
	description?: string;
	detailImage?: string; // Path to detail image
	annotations: Annotation[];
	wikipedia?: string;
	builtDate?: string;
};

export type Annotation = {
	title: string;
	description: string;
	detailImage: string;
};
