import { Container } from "./styles";

export function Button({ isDelete, title, icon: Icon, ...rest }) {
	return (
		<Container isDelete={isDelete} {...rest}>
			{Icon && <Icon size={22} />}
			{title}
		</Container>
	);
}
