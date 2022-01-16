import React from "react"
import styled from "styled-components"
import AuthForm from "../Components/AuthForm"

const Login = () => {
	return (
		<Container>
			<Title>You can log in here !</Title>
			<AuthForm />
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

export default Login
