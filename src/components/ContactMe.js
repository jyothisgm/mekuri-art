import { TextInput, Textarea, SimpleGrid, Group, Title, Button, ActionIcon, Container } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

export const GetInTouchSimple = () => {
	const form = useForm({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validate: {
			name: (value) => value.trim().length < 2,
			email: (value) => !/^\S+@\S+$/.test(value),
			subject: (value) => value.trim().length === 0,
		},
	});

	return (
		<Container>
			<form onSubmit={form.onSubmit(() => {})}>
				<Title
					order={2}
					size='h1'
					sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
					weight={900}
					align='center'
				>
					Get in touch
				</Title>
				<Group mt='xl' align='center'>
					<a href='https://twitter.com/' target='_blank' rel='noreferrer'>
						<ActionIcon key={1} size={28} variant='transparent'>
							<IconBrandTwitter size='1.4rem' stroke={1.5} />
						</ActionIcon>
					</a>
					<a href='https://youtube.com/' target='_blank' rel='noreferrer'>
						<ActionIcon key={2} size={28} variant='transparent'>
							<IconBrandYoutube size='1.4rem' stroke={1.5} />
						</ActionIcon>
					</a>
					<a href='https://www.instagram.com/_mekuri/' target='_blank' rel='noreferrer'>
						<ActionIcon key={3} size={28} variant='transparent'>
							<IconBrandInstagram size='1.4rem' stroke={1.5} />
						</ActionIcon>
					</a>
				</Group>
				<SimpleGrid cols={2} mt='xl' breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
					<TextInput
						label='Name'
						placeholder='Your name'
						name='name'
						variant='filled'
						{...form.getInputProps("name")}
					/>
					<TextInput
						label='Email'
						placeholder='Your email'
						name='email'
						variant='filled'
						{...form.getInputProps("email")}
					/>
				</SimpleGrid>

				<TextInput
					label='Subject'
					placeholder='Subject'
					mt='md'
					name='subject'
					variant='filled'
					{...form.getInputProps("subject")}
				/>
				<Textarea
					mt='md'
					label='Message'
					placeholder='Your message'
					maxRows={10}
					minRows={5}
					autosize
					name='message'
					variant='filled'
					{...form.getInputProps("message")}
				/>

				<Group position='center' mt='xl'>
					<Button type='submit' size='md'>
						Send message
					</Button>
				</Group>
			</form>
		</Container>
	);
};

export default GetInTouchSimple;
