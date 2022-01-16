import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const Article = ({ id, title, content, status, ArticleCategory, created_at, updated_at, User, show }) => {
	if (show) {
		return (
			<Wrapper>
				<Text category>#{id}</Text>
				<Container show>
					<Title>Title : {title}</Title>
					<Space>
						<Text>Content : {content}</Text>
						<Text>
							Created: {new Date(created_at).getHours()}h:{new Date(created_at).getSeconds()}
						</Text>
						<Text>
							Upadated: {new Date(updated_at).getHours()}h:{new Date(updated_at).getSeconds()}
						</Text>
						<Text>
							From {User.lastname} {User.firstname}
						</Text>
						<Text category>{ArticleCategory.name}</Text>
						{/* When creating a new article and adding it to the articleContext, it does not provide a User, so i'll hide this User */}
						{/* <Text>From: {User.firstname}</Text> */}
					</Space>
					<Button to={`/article/${id}`}>See more</Button>
				</Container>
			</Wrapper>
		)
	}
	return (
		<Container>
			<Numero>#{id}</Numero>
			<Title>{title}</Title>
			<Space>
				<Text>Content : {content}</Text>
				<Text>
					Created: {new Date(created_at).getHours()}h:{new Date(created_at).getSeconds()}
				</Text>
				<Text category>{ArticleCategory.name}</Text>
				{/* When creating a new article and adding it to the articleContext, it does not provide a User, so i'll hide this User */}
				{/* <Text>From: {User.firstname}</Text> */}
			</Space>
			<Button to={`/article/${id}`}>See more</Button>
		</Container>
	)
}

const Container = styled.div`
	padding: 0.5rem;
	background-color: var(--primary-color);
	color: white;
	border-radius: 0.4rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	flex: 20%;
	${({ show }) =>
		show &&
		css`
			width: 100%;
		`}
`

const Numero = styled.div`
	font-size: 1.1rem;
	padding-bottom: 0.4rem;
	font-style: italic;
	font-weight: bold;
	color: var(--accent-color);
`

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const Space = styled.div`
	margin: 0.5rem 0;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`

const Text = styled.p`
	font-size: 0.9rem;
	${({ category }) =>
		category &&
		css`
			color: var(--accent-color);
		`}
`

const Title = styled.p`
	font-weight: bold;
	font-size: 1.4rem;
`

const Button = styled(Link)`
	padding: 0.2rem;
	background-color: var(--accent-color);
	border-radius: 0.2rem;
	font-size: 0.9rem;
	color: white;
	text-transform: uppercase;
	text-decoration: none;
`

export default Article
