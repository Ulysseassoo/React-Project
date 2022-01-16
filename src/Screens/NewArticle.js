import React from "react"
import styled from "styled-components"
import FormArticle from "../Components/FormArticle"

const NewArticle = () => {
	return (
		<Container>
			<Title>Create a new article</Title>
			<FormArticle />
		</Container>
	)
}

const Container = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
`

const Title = styled.h1`
	color: var(--primary-color);
	border-bottom: 3px solid var(--primary-color);
`

export default NewArticle
