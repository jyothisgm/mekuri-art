import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Container, createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	card: {
		height: rem(440),
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: rem(32),
		marginTop: theme.spacing.xs,
	},

	category: {
		color: theme.white,
		opacity: 0.7,
		fontWeight: 700,
		textTransform: "uppercase",
	},
}));

const Card = ({ image, title, category }) => {
	const { classes } = useStyles();

	return (
		<Paper shadow='md' p='xl' radius='md' sx={{ backgroundImage: `url(${image})` }} className={classes.card}>
			<div>
				<Text className={classes.category} size='xs'>
					{category}
				</Text>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div>
			<Button variant='white' color='dark'>
				Visit
			</Button>
		</Paper>
	);
};

export const CardsCarousel = ({ data }) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const slides = data.map((item) => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	));

	return (
		<Container>
			<Title
				order={2}
				size='h1'
				sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
				weight={900}
				align='center'
				lineHeight={2}
			>
				Exhibitions
			</Title>
			<Carousel
				slideSize='50%'
				breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
				slideGap='xl'
				align='start'
				slidesToScroll={mobile ? 1 : 2}
			>
				{slides}
			</Carousel>
		</Container>
	);
};

export default CardsCarousel;
