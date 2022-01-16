import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const Article = ({ id, title, content, status, ArticleCategory, created_at, updated_at, User }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Space>
				<Text>Content : {content}</Text>
				<Text>
					Created: {new Date(created_at).getHours()}h:{new Date(created_at).getSeconds()}
				</Text>
				<Text category>{ArticleCategory.name}</Text>
				<Text>From: {User.firstname}</Text>
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
