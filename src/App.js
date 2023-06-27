import { React } from "react";
import { MantineProvider } from "@mantine/core";
import HeaderSimple from "./components/HeaderSimple";
import Home from "./components/Home";
import ArtGrid from "./components/Art";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
			<HeaderSimple
				links={[
					{
						link: "/",
						label: "Home",
					},
					{
						link: "/exhibitions",
						label: "Exhibitions",
					},
					{
						link: "/work",
						label: "Work",
					},
					{
						link: "/36daysoftype",
						label: "36DaysofType",
					},
					{
						link: "/contactme",
						label: "Contact Me",
					},
				]}
			/>
			<Home />
			<Router>
				<Routes>
					<Route path='/' exact component={Home} />
					<Route path='/work' exact component={ArtGrid} />
				</Routes>
			</Router>
		</MantineProvider>
	);
};

export default App;

