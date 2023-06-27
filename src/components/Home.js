import { React } from "react";
import { Container, Grid, useMantineTheme, Paper, rem } from "@mantine/core";
import { Image, Text, Button, Divider, Title } from "@mantine/core";

import ArtGrid from "./Art";
import GetInTouchSimple from "./ContactMe";
import CardsCarousel from "./Exhibition";

const PRIMARY_COL_HEIGHT = rem(300);

export const Home = () => {
	const theme = useMantineTheme();
	const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

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
								<Button color='red' radius='xs' size='lg'>
									Say Hi
								</Button>
							</Paper>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
			<Divider my='xl' size={10} label='Exhibitions' labelPosition='center' />
			<CardsCarousel />
			<Divider my='xl' size={10} label='Work' labelPosition='center' />
			<ArtGrid />
			<Divider my='xs' size={10} label='Contact Me' labelPosition='center' />
			<GetInTouchSimple />
		</Container>
	);
};

export default Home;
