import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import Scene from "./pages/Scene";
import RequestBuilding from "./pages/RequestBuilding";

let theme = createTheme({
	typography: {
		fontFamily: "Poppins",
	},
});

theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div style={{ width: "100%", height: "100%", background: "#FEFEFE" }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/scene" element={<Scene />} />
						<Route path="/request" element={<RequestBuilding />} />
					</Routes>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
