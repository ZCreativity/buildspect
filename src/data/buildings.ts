import { Building } from "./types";

const THUMBNAIL_IMAGE_PATH = "../assets/thumbnails/";
const DETAIL_IMAGE_PATH = "../assets/details/";

const buildings: Building[] = [
	{
		name: "Mole Antonelliana",
		city: "Turin",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "mole.png",
		externalModel: "../assets/models/mole.glb",
		description: "",
		annotations: [],
	},
	{
		name: "Colosseum",
		city: "Rome",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "colosseo.jpg",
		detailImage: DETAIL_IMAGE_PATH + "colosseo.jpg",
		externalModel: "../assets/models/colosseo/colosseum/scene.gltf",
		description:
			"The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age. The Colosseum is built of travertine limestone, tuff (volcanic rock), and brick-faced concrete. It could hold an estimated 50,000 to 80,000 spectators at various points in its history, having an average audience of some 65,000; it was used for gladiatorial contests and public spectacles including animal hunts, executions, re-enactments of famous battles, and dramas based on Roman mythology, and briefly mock sea battles. The building ceased to be used for entertainment in the early medieval era. It was later reused for such purposes as housing, workshops, quarters for a religious order, a fortress, a quarry, and a Christian shrine.",
		annotations: [
			{
				title: "Podium",
				description: "Lower part of the cavea in which senators and powerfull romans seated.",
				detailImage: DETAIL_IMAGE_PATH + "colosseum_podium.jpg",
			},
			{
				title: "Hypogeum",
				description:
					"Underground area added during the reign of Domitian (81-96 A.D) where gladiators stood before the fights.",
				detailImage: DETAIL_IMAGE_PATH + "colosseum_hypogeum.jpg",
			},
			{
				title: "Maenianum Secundum",
				description:
					"Part where all regular citizens seated. Also divided in two parts por rich and poor citizens.",
				detailImage: DETAIL_IMAGE_PATH + "colosseum_maenianum.jpg",
			},
		],
	},
	{
		name: "Notre Dame",
		city: "Paris",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "notre_dame.jpg",
		externalModel: "../assets/models/notre_dame/scene.gltf",
		description: "",
		annotations: [],
	},
	{
		name: "Eiffel Tower",
		city: "Paris",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "torre_eiffel.jpg",
		externalModel: "../assets/models/eiffel_tower/scene.gltf",
		description: "",
		annotations: [],
	},
	{
		name: "Sagrada Familia",
		city: "Barcellona",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "sagrada.jpg",
		externalModel: "../assets/models/sagrada.glb",
		description: "",
		annotations: [],
	},
	{
		name: "Leaning Tower of Pisa",
		city: "Pisa",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "torre_di_pisa.jpg",
		externalModel: "../assets/models/torre_di_pisa.glb",
		description: "",
		annotations: [],
	},
	{
		name: "City Hall",
		city: "London",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "city_hall.jpg",
		externalModel: "../assets/models/city_hall.glb",
		description: "",
		annotations: [],
	},
	{
		name: "Pantheon",
		city: "Rome",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "pantheon.jpg",
		externalModel: "../assets/models/pantheon.glb",
		description: "",
		annotations: [],
	},
	{
		name: "Taj Mahal",
		city: "Agra",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "taj_mahal.jpg",
		externalModel: "../assets/models/taj_mahal.glb",
		description: "",
		annotations: [],
	},
];

export { buildings };
