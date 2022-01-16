import React from "react"
import styled from "styled-components"

const FormButton = ({ content }) => {
	return <Container>{content}</Container>
}

const Container = styled.button`
	color: white;
	padding: 0.5rem;
	background-color: var(--accent-color);
	transition: 0.3s ease;
	border-radius: 0.3rem;
	margin-top: 1.5rem;
	border: 1px solid transparent;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: white;
		color: var(--accent-color);
		border: 1px solid var(--accent-color);
	}
`

export default FormButton
