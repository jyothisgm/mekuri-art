import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import HeaderSimple from "./components/HeaderSimple";
import Home from "./components/Home";
import ArtGrid from "./components/Art";
import CardsCarousel from "./components/Exhibition";
import GetInTouchSimple from "./components/ContactMe";

const App = () => {
	const exhibition_data = [
		{
			image: "../events/E1.jpg",
			title: "Nrithya Culture",
			category: "Exhibition",
		},
		{
			image: "../events/E1a.jpg",
			title: "Nrithya Culture",
			category: "Exhibition",
		},
		{
			image: "../events/E2.jpg",
			title: "Safar Collective",
			category: "Exhibition",
		},
		{
			image: "../events/E3.jpg",
			title: "Nrithya Culture",
			category: "Exhibition",
		},
	];
	const type_data = [
		{
			image: "../Art/36DaysofFont/a.jpg",
			title: "#36_type_A",
			link: "/Art/36DaysofFont/a.jpg",
		},
		{
			image: "../Art/36DaysofFont/b.jpg",
			title: "#36_type_B",
			link: "/Art/36DaysofFont/b.jpg",
		},
		{
			image: "../Art/36DaysofFont/c.jpg",
			title: "#36_type_C",
			link: "/Art/36DaysofFont/c.jpg",
		},
		{
			image: "../Art/36DaysofFont/d.jpg",
			title: "#36_type_D",
			link: "/Art/36DaysofFont/d.jpg",
		},
		{
			image: "../Art/36DaysofFont/e.jpg",
			title: "#36_type_E",
			link: "/Art/36DaysofFont/e.jpg",
		},
		{
			image: "../Art/36DaysofFont/f.jpg",
			title: "#36_type_F",
			link: "/Art/36DaysofFont/f.jpg",
		},
		{
			image: "../Art/36DaysofFont/g.jpg",
			title: "#36_type_G",
			link: "/Art/36DaysofFont/g.jpg",
		},
		{
			image: "../Art/36DaysofFont/h.jpg",
			title: "#36_type_H",
			link: "/Art/36DaysofFont/h.jpg",
		},
		{
			image: "../Art/36DaysofFont/i.jpg",
			title: "#36_type_I",
			link: "/Art/36DaysofFont/i.jpg",
		},
		{
			image: "../Art/36DaysofFont/j.jpg",
			title: "#36_type_J",
			link: "/Art/36DaysofFont/j.jpg",
		},
		{
			image: "../Art/36DaysofFont/k.jpg",
			title: "#36_type_K",
			link: "/Art/36DaysofFont/k.jpg",
		},
		{
			image: "../Art/36DaysofFont/l.jpg",
			title: "#36_type_L",
			link: "/Art/36DaysofFont/l.jpg",
		},
		{
			image: "../Art/36DaysofFont/m.jpg",
			title: "#36_type_M",
			link: "/Art/36DaysofFont/m.jpg",
		},
		{
			image: "../Art/36DaysofFont/n.jpg",
			title: "#36_type_N",
			link: "/Art/36DaysofFont/n.jpg",
		},
		{
			image: "../Art/36DaysofFont/o.jpg",
			title: "#36_type_O",
			link: "/Art/36DaysofFont/o.jpg",
		},
		{
			image: "../Art/36DaysofFont/p.jpg",
			title: "#36_type_P",
			link: "/Art/36DaysofFont/p.jpg",
		},
		{
			image: "../Art/36DaysofFont/q.jpg",
			title: "#36_type_Q",
			link: "/Art/36DaysofFont/q.jpg",
		},
		{
			image: "../Art/36DaysofFont/r.jpg",
			title: "#36_type_R",
			link: "/Art/36DaysofFont/r.jpg",
		},
		{
			image: "../Art/36DaysofFont/s.jpg",
			title: "#36_type_S",
			link: "/Art/36DaysofFont/s.jpg",
		},
		{
			image: "../Art/36DaysofFont/t.jpg",
			title: "#36_type_T",
			link: "/Art/36DaysofFont/t.jpg",
		},
		{
			image: "../Art/36DaysofFont/u.jpg",
			title: "#36_type_U",
			link: "/Art/36DaysofFont/u.jpg",
		},
		{
			image: "../Art/36DaysofFont/v.jpg",
			title: "#36_type_V",
			link: "/Art/36DaysofFont/v.jpg",
		},
		{
			image: "../Art/36DaysofFont/w.jpg",
			title: "#36_type_W",
			link: "/Art/36DaysofFont/w.jpg",
		},
		{
			image: "../Art/36DaysofFont/x.jpg",
			title: "#36_type_X",
			link: "/Art/36DaysofFont/x.jpg",
		},
		{
			image: "../Art/36DaysofFont/y.jpg",
			title: "#36_type_Y",
			link: "/Art/36DaysofFont/y.jpg",
		},
		{
			image: "../Art/36DaysofFont/z.jpg",
			title: "#36_type_Z",
			link: "/Art/36DaysofFont/z.jpg",
		},
		{
			image: "../Art/36DaysofFont/0.jpg",
			title: "#36_type_0",
			link: "/Art/36DaysofFont/0.jpg",
		},
		{
			image: "../Art/36DaysofFont/1.jpg",
			title: "#36_type_1",
			link: "/Art/36DaysofFont/1.jpg",
		},
		{
			image: "../Art/36DaysofFont/2.jpg",
			title: "#36_type_2",
			link: "/Art/36DaysofFont/2.jpg",
		},
		{
			image: "../Art/36DaysofFont/3.jpg",
			title: "#36_type_3",
			link: "/Art/36DaysofFont/3.jpg",
		},
		{
			image: "../Art/36DaysofFont/4.jpg",
			title: "#36_type_4",
			link: "/Art/36DaysofFont/4.jpg",
		},
		{
			image: "../Art/36DaysofFont/5.jpg",
			title: "#36_type_5",
			link: "/Art/36DaysofFont/5.jpg",
		},
		{
			image: "../Art/36DaysofFont/6.jpg",
			title: "#36_type_6",
			link: "/Art/36DaysofFont/6.jpg",
		},
		{
			image: "../Art/36DaysofFont/7.jpg",
			title: "#36_type_7",
			link: "/Art/36DaysofFont/7.jpg",
		},
		{
			image: "../Art/36DaysofFont/8.jpg",
			title: "#36_type_8",
			link: "/Art/36DaysofFont/8.jpg",
		},
		{
			image: "../Art/36DaysofFont/9.jpg",
			title: "#36_type_9",
			link: "/Art/36DaysofFont/9.jpg",
		},
	];
	const work_data = [
		{
			image: "../Art/A1.jpg",
			title: "",
			link: "/Art/A1.jpg",
		},
		{
			image: "../Art/A2.jpg",
			title: "",
			link: "/Art/A2.jpg",
		},
		{
			image: "../Art/B1.jpg",
			title: "",
			link: "/Art/B1.jpg",
		},
		{
			image: "../Art/B2.jpg",
			title: "",
			link: "/Art/B2.jpg",
		},
		{
			image: "../Art/R1.jpg",
			title: "",
			link: "/Art/R1.jpg",
		},
		{
			image: "../Art/R2.jpg",
			title: "",
			link: "/Art/R2.jpg",
		},
		{
			image: "../Art/R3.jpg",
			title: "",
			link: "/Art/R3.jpg",
		},
		{
			image: "../Art/R4.jpg",
			title: "",
			link: "/Art/R4.jpg",
		},
		{
			image: "../Art/A3.jpg",
			title: "",
			link: "/Art/A3.jpg",
		},
		{
			image: "../Art/A4.jpg",
			title: "",
			link: "/Art/A4.jpg",
		},
		{
			image: "../Art/B3.jpg",
			title: "",
			link: "/Art/B3.jpg",
		},
		{
			image: "../Art/B4.jpg",
			title: "",
			link: "/Art/B4.jpg",
		},
		{
			image: "../Art/R5.jpg",
			title: "",
			link: "/Art/R5.jpg",
		},
		{
			image: "../Art/R6.jpg",
			title: "",
			link: "/Art/R6.jpg",
		},
		{
			image: "../Art/R7.jpg",
			title: "",
			link: "/Art/R7.jpg",
		},
		{
			image: "../Art/R8.jpg",
			title: "",
			link: "/Art/R8.jpg",
		},
		{
			image: "../Art/A5.jpg",
			title: "",
			link: "/Art/A5.jpg",
		},
		{
			image: "../Art/A6.jpg",
			title: "",
			link: "/Art/A6.jpg",
		},
		{
			image: "../Art/B5.jpg",
			title: "",
			link: "/Art/B5.jpg",
		},
		{
			image: "../Art/R9.jpg",
			title: "",
			link: "/Art/R9.jpg",
		},
		{
			image: "../Art/R10.jpg",
			title: "",
			link: "/Art/R10.jpg",
		},
		{
			image: "../Art/R11.jpg",
			title: "",
			link: "b/Art/R11.jpgeach",
		},
		{
			image: "../Art/R12.jpg",
			title: "",
			link: "/Art/R12.jpg",
		},
		{
			image: "../Art/R13.jpg",
			title: "",
			link: "/Art/R13.jpg",
		},
		{
			image: "../Art/R14.jpg",
			title: "",
			link: "/Art/R14.jpg",
		},
		{
			image: "../Art/R15.jpg",
			title: "",
			link: "/Art/R15.jpg",
		},
		{
			image: "../Art/R16.jpg",
			title: "",
			link: "/Art/R16.jpg",
		},
		{
			image: "../Art/R17.jpg",
			title: "",
			link: "/Art/R17.jpg",
		},
		{
			image: "../Art/A9.jpg",
			title: "",
			link: "/Art/A9.jpg",
		},
		{
			image: "../Art/3D/D1.jpg",
			title: "",
			link: "/Art/3D/D1.jpg",
		},
		{
			image: "../Art/3D/D2.jpg",
			title: "",
			link: "/Art/3D/D2.jpg",
		},
		{
			image: "../Art/3D/D3.jpg",
			title: "",
			link: "/Art/3D/D3.jpg",
		},
	];
	return (
		<Router>
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
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='exhibitions' element={<CardsCarousel data={exhibition_data} />} />
					<Route exact path='work' component={<ArtGrid data={work_data} title='Work' />} />
					<Route exact path='36daysoftype' element={<ArtGrid data={type_data} title='36 Days of Type' />} />
					<Route exact path='contactme' component={<GetInTouchSimple />} />
				</Routes>
			</MantineProvider>
		</Router>
	);
};

export default App;
