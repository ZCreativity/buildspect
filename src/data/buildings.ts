import { Building } from "./types";

const THUMBNAIL_IMAGE_PATH = "../assets/thumbnails/";
const DETAIL_IMAGE_PATH = "../assets/details/";

const buildings: Building[] = [
	{
		name: "Mole Antonelliana",
		city: "Turin",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "mole.png",
		model: "",
		description: "",
		annotations: [],
	},
	{
		name: "Colosseum",
		city: "Rome",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "colosseo.jpg",
		detailImage: DETAIL_IMAGE_PATH + "colosseo.jpg",
		model: "../assets/models/colosseo/colosseo.glb",
		iosModel: "../assets/models/colosseo/colosseo.usdz",
		builtDate: "80 A.D.",
		description:
			"The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age. The Colosseum is built of travertine limestone, tuff (volcanic rock), and brick-faced concrete.",
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
		wikipedia: "https://en.wikipedia.org/wiki/Colosseum",
	},
	{
		name: "Notre Dame",
		city: "Paris",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "notre_dame.jpg",
		detailImage: DETAIL_IMAGE_PATH + "notre_dame.jpg",
		model: "../assets/models/notre_dame/notre_dame.glb",
		iosModel: "../assets/models/notre_dame/notre_dame.usdz",
		description:
			"Notre-Dame de Paris, also called Notre-Dame Cathedral, cathedral church in Paris. It is the most famous of the Gothic cathedrals of the Middle Ages and is distinguished for its size, antiquity, and architectural interest.Notre-Dame lies at the eastern end of the Île de la Cité and was built on the ruins of two earlier churches, which were themselves predated by a Gallo-Roman temple dedicated to Jupiter.",
		annotations: [],
		wikipedia: "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
		builtDate: "1163 A.D.",
	},
	{
		name: "Eiffel Tower",
		city: "Paris",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "torre_eiffel.jpg",
		model: "",
		description: "",
		annotations: [],
	},
	{
		name: "Sagrada Familia",
		city: "Barcellona",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "sagrada.jpg",
		model: "",
		description: "",
		annotations: [],
	},
	{
		name: "Leaning Tower of Pisa",
		city: "Pisa",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "torre_di_pisa.jpg",
		model: "",
		description: "",
		annotations: [],
	},
	{
		name: "Pantheon",
		city: "Rome",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "pantheon.jpg",
		model: "",
		description: "",
		annotations: [],
	},
	{
		name: "Taj Mahal",
		city: "Agra",
		thumbnailImage: THUMBNAIL_IMAGE_PATH + "taj_mahal.jpg",
		model: "",
		description: "",
		annotations: [],
	},
];

export { buildings };
