import { Building } from "./types";

const THUMBNAIL_IMAGE_PATH = "../assets/thumbnails/";

const buildings: Building[] = [
	{
		name: "Mole Antonelliana",
		city: "Torino",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "mole.png",
		externalModel: "../assets/models/mole.glb",
		description: "",
		hasInternalModel: true,
		annotations: [],
	},
	{
		name: "Colosseo",
		city: "Roma",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "colosseo.jpg",
		externalModel: "../assets/models/colosseo/colosseum/scene.gltf",
		description: "",
		hasInternalModel: true,
		annotations: [
			{
				title: "Anfiteatro",
				description: "L'anfiteatro è il luogo dove si svolgevano le gare di gladiatori.",
				camPos: {
					x: 0,
					y: 0,
					z: 0,
				},
				lookAt: {
					x: 0,
					y: 0,
					z: 0,
				},
			},
		],
	},
	{
		name: "Notre Dame",
		city: "Parigi",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "notre_dame.jpg",
		externalModel: "../assets/models/notre_dame/scene.gltf",
		description: "",
		hasInternalModel: true,
		annotations: [],
	},
	{
		name: "Torre Eiffel",
		city: "Parigi",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "torre_eiffel.jpg",
		externalModel: "../assets/models/eiffel_tower/scene.gltf",
		description: "",
		hasInternalModel: false,
		annotations: [],
	},
	{
		name: "Sagrada Familia",
		city: "Barcellona",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "sagrada.jpg",
		externalModel: "../assets/models/sagrada.glb",
		description: "",
		hasInternalModel: false,
		annotations: [],
	},
	{
		name: "Torre di Pisa",
		city: "Pisa",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "torre_di_pisa.jpg",
		externalModel: "../assets/models/torre_di_pisa.glb",
		description: "",
		hasInternalModel: true,
		annotations: [],
	},
	{
		name: "City Hall",
		city: "Londra",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "city_hall.jpg",
		externalModel: "../assets/models/city_hall.glb",
		description: "",
		hasInternalModel: true,
		annotations: [],
	},
	{
		name: "Pantheon",
		city: "Roma",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "pantheon.jpg",
		externalModel: "../assets/models/pantheon.glb",
		description: "",
		hasInternalModel: true,
		annotations: [],
	},
	{
		name: "Taj Mahal",
		city: "Agra",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "taj_mahal.jpg",
		externalModel: "../assets/models/taj_mahal.glb",
		description: "",
		hasInternalModel: true,
		annotations: [],
	},
];

export { buildings };
