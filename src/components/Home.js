import { React } from "react";
import { Container, Grid, useMantineTheme, Paper, rem } from "@mantine/core";
import { Image, Text, Button, Divider } from "@mantine/core";

import ArtGrid from "./Art";
import GetInTouchSimple from "./ContactMe";
import CardsCarousel from "./Exhibition";

const PRIMARY_COL_HEIGHT = rem(300);

export const Home = () => {
	const theme = useMantineTheme();
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
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
	];

	return (
		<Container>
			<Grid>
				<Grid.Col span='content'>
					<Image
						height={PRIMARY_COL_HEIGHT}
						maw={240}
						mx='auto'
						radius='md'
						src='..\IMG-20221017-WA0007.jpg'
						alt='Ammu image'
						align='left'
					/>
				</Grid.Col>
				<Grid.Col span='auto'>
					<Grid>
						<Grid.Col>
							<Paper shadow='xs' p='md' height={SECONDARY_COL_HEIGHT}>
								<Text tt='uppercase' fz='2.5rem' fw={1000}>
									Aditi Vinayakan
								</Text>
							</Paper>
						</Grid.Col>
						<Grid.Col span={6}>
							<Paper shadow='xs' p='md' height={SECONDARY_COL_HEIGHT} align='center'>
								<Text fz='1.5rem' fw={1000} c='red'>
									Artist & Storyteller
								</Text>
							</Paper>
						</Grid.Col>
						<Grid.Col span={6}>
							<Paper shadow='xs' p='md' height={SECONDARY_COL_HEIGHT} align='center'>
								<a href='/contactme'>
									<Button style={{ "background-color": "#e03131" }} radius='xs' size='lg'>
										Say Hi
									</Button>
								</a>
							</Paper>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
			<Divider my='xl' size={10} label='Exhibitions' labelPosition='center' />
			<CardsCarousel data={exhibition_data} />
			<Divider my='xl' size={10} label='Work' labelPosition='center' />
			<ArtGrid data={work_data} title='Work' />
			<Paper shadow='xs' p='md' height={SECONDARY_COL_HEIGHT} align='center'>
				<a href='/work'>
					<Button style={{ "background-color": "#e03131" }} radius='xs' size='lg'>
						See More
					</Button>
				</a>
			</Paper>
			<Divider my='xs' size={10} label='Contact Me' labelPosition='center' />
			<GetInTouchSimple />
		</Container>
	);
};

export default Home;
