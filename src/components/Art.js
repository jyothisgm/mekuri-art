import { Card, Text, createStyles, getStylesRef, rem, Grid, Container, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
	card: {
		position: "relative",
		height: rem(500),
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],

		[`&:hover .${getStylesRef("image")}`]: {
			transform: "scale(1.03)",
		},
	},

	image: {
		...theme.fn.cover(),
		ref: getStylesRef("image"),
		backgroundSize: "cover",
		transition: "transform 500ms ease",
	},

	overlay: {
		position: "absolute",
		top: "20%",
		left: 0,
		right: 0,
		bottom: 0,
		backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
	},

	content: {
		height: "100%",
		position: "relative",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		zIndex: 1,
	},

	title: {
		color: theme.white,
		marginBottom: rem(5),
	},

	bodyText: {
		color: theme.colors.dark[2],
		marginLeft: rem(7),
	},

	author: {
		color: theme.colors.dark[2],
	},
}));

const ImageCard = ({ image, title, link }) => {
	const { classes } = useStyles();

	return (
		<Card p='lg' shadow='lg' className={classes.card} radius='md' component='a' href={link} target='_blank'>
			<div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
			<div className={classes.overlay} />

			<div className={classes.content}>
				<div>
					<Text size='lg' className={classes.title} weight={500}>
						{title}
					</Text>
				</div>
			</div>
		</Card>
	);
};

const ArtGrid = ({ data, title }) => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const images = data.map((item) => (
		<Grid.Col key={item.title} span={mobile ? 12 : 6} style={{ minHeight: rem(500) }}>
			<ImageCard {...item} />
		</Grid.Col>
	));
	return (
		<Container>
			<Title
				order={2}
				size='h1'
				sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
				weight={900}
				align='center'
			>
				{title}
			</Title>
			<Grid>{images}</Grid>
		</Container>
	);
};

export default ArtGrid;
