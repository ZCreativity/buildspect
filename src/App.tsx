import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import Scene from "./pages/Scene";
import RequestBuilding from "./pages/RequestBuilding";
import { ConfirmProvider } from "material-ui-confirm";
import EmailResult from "./pages/EmailResult";

let theme = createTheme({
	palette: {
		primary: {
			main: "#009384",
		},
	},
	typography: {
		fontFamily: "Poppins",
	},
});

theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ConfirmProvider>
				<div style={{ width: "100%", height: "100%", background: "#FEFEFE" }}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/scene" element={<Scene />} />
							<Route path="/request" element={<RequestBuilding />} />
							<Route path="/email-result" element={<EmailResult />} />
							<Route path="*" element={<Home />} />
						</Routes>
					</BrowserRouter>
				</div>
			</ConfirmProvider>
		</ThemeProvider>
	);
}

export default App;
