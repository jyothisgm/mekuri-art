import { useState, useRef, useEffect } from "react";
import {
	createStyles,
	Header,
	Container,
	Group,
	Burger,
	Paper,
	Transition,
	rem,
	Image,
	Text,
	Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
	root: {
		position: "relative",
		zIndex: 1,
	},

	dropdown: {
		position: "absolute",
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: "hidden",

		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
	},

	links: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: `${rem(8)} ${rem(12)}`,
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? "#d10000" : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		},

		[theme.fn.smallerThan("sm")]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: "#d10000",
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
		},
	},
}));

export const HeaderSimple = ({ links }) => {
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState();
	const { classes, cx } = useStyles();
	const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
	const headerRef = useRef(null);
	console.log(window.location.pathname);

	// handle scroll event
	const handleScroll = (elTopOffset, elHeight) => {
		if (window.pageYOffset > elTopOffset + elHeight) {
			setSticky({ isSticky: true, offset: elHeight });
		} else {
			setSticky({ isSticky: false, offset: 0 });
		}
	};
	useEffect(() => {
		var header = headerRef.current.getBoundingClientRect();
		const handleScrollEvent = () => {
			handleScroll(header.top, header.height);
		};

		window.addEventListener("scroll", handleScrollEvent);

		return () => {
			window.removeEventListener("scroll", handleScrollEvent);
		};
	}, []);

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, { [classes.linkActive]: active === link.link })}
			onClick={(event) => {
				setActive(link.link);
				close();
			}}
		>
			{link.label}
		</a>
	));

	return (
		<Header
			height={HEADER_HEIGHT}
			mb={40}
			id='sticky-header'
			className={`navbar${sticky.isSticky ? " sticky" : ""}`}
			ref={headerRef}
		>
			<Container className={classes.header}>
				<Flex gap={{ base: "sm" }} justify='flex-start' align='center' direction='row'>
					<Image height={rem(50)} width={rem(50)} radius='100%' src='./Mekuri.jpeg' alt='Logo' />
					<Text size='xl' fw={700} color='#d10000'>
						Mekuri
					</Text>
				</Flex>
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>

				<Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />

				<Transition transition='pop-top-right' duration={200} mounted={opened}>
					{(styles) => (
						<Paper className={classes.dropdown} withBorder style={styles}>
							{items}
						</Paper>
					)}
				</Transition>
			</Container>
		</Header>
	);
};

export default HeaderSimple;
