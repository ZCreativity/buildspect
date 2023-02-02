import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { buildings } from "../data/buildings";
import BuildingCard from "../components/BuildingCard";
import { Building } from "../data/types";
import NoResults from "../components/NoResults";

const Home = () => {
	const [searchText, setSearchText] = React.useState<string>("");
	const [buildingsList, setBuildingsList] = React.useState<Building[]>(
		buildings.sort(sortAlphabetically)
	);

	function sortAlphabetically(a: Building, b: Building) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	}

	useEffect(() => {
		const filteredBuildings = buildings.filter(
			(building) =>
				building.name.toLowerCase().includes(searchText.toLowerCase()) ||
				building.city.toLowerCase().includes(searchText.toLowerCase())
		);
		setBuildingsList(filteredBuildings);
	}, [searchText]);

	return (
		<div style={{ padding: "1rem 2rem" }}>
			<h1>Buildspect</h1>
			<SearchBar value={searchText} setValue={setSearchText} />
			{buildingsList &&
				buildingsList.map((building) => {
					return (
						<BuildingCard key={building.name} building={building} setSearchText={setSearchText} />
					);
				})}
			{buildingsList.length === 0 && <NoResults searchText={searchText} />}
		</div>
	);
};

export default Home;
