import React from "react";
import SearchBar from "../components/SearchBar";
import { buildings } from "../data/buildings";
import BuildingCard from "../components/BuildingCard";

const Home = () => {
	const [searchText, setSearchText] = React.useState<string>("");

	return (
		<div style={{ padding: "1rem 2rem" }}>
			<h1>Buildspect</h1>
			<SearchBar value={searchText} setValue={setSearchText} />
			{buildings
				.filter((building) => building.name.toLowerCase().includes(searchText.toLowerCase()) || building.city.toLowerCase().includes(searchText.toLowerCase()))
				.map((building) => {
					return <BuildingCard key={building.name} building={building} />;
				})}
		</div>
	);
};

export default Home;
