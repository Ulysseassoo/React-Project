import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { MapContext } from "../Providers/MapProvider"
import { UserContext } from "../Providers/UserProvider"

const Navbar = () => {
	const context = useContext(UserContext)
	const mapContext = useContext(MapContext)
	const { userInformations, setUserInformations, setUserLoading } = context
	const { setPositions } = mapContext
	if (typeof userInformations == "undefined") {
		return (
			<Header>
				<HomeLink to="/">
					<Title>Edu-Project</Title>
				</HomeLink>
				<Flex>
					<Center>
						<Button to="/login">Login</Button>
						<Button to="/register">Register</Button>
					</Center>
				</Flex>
			</Header>
		)
	}
	const { firstname } = userInformations
	const logout = () => {
		localStorage.removeItem("token")
		setUserInformations([])
		setUserLoading(true)
		setPositions([])
	}
	return (
		<Header>
			<HomeLink to="/">
				<Title>Edu-Project</Title>
			</HomeLink>
			<Flex>
				{context && (
					<Center>
						<Name>{firstname}</Name>
					</Center>
				)}
				<Center>
					{Object.keys(userInformations).length === 0 && <Button to="/login">Login</Button>}
					{Object.keys(userInformations).length === 0 && <Button to="/register">Register</Button>}
					{Object.keys(userInformations).length > 0 && (
						<>
							<Button to="/article/new">Create Article</Button>
							<Button to="/login" onClick={() => logout()}>
								Logout
							</Button>
						</>
					)}
				</Center>
			</Flex>
		</Header>
	)
}

const Header = styled.header`
	padding: 1rem;
	height: 80px;
	background-color: var(--primary-color);
	border-bottom: 1px solid rgb(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Title = styled.p`
	font-size: 2rem;
	text-transform: uppercase;
	color: var(--text-color);
	font-weight: bold;
`
const Flex = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;
`
const Center = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`
const HomeLink = styled(Link)`
	text-decoration: none;
`
const Button = styled(Link)`
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
	text-transform: uppercase;
	color: var(--primary-color);
	text-decoration: none;
	background-color: var(--text-color);
	border: 1px solid var(--text-color);
	transition: 0.3s all cubic-bezier(0.215, 0.61, 0.355, 1);
	cursor: pointer;
	&:hover {
		background-color: var(--primary-color);
		color: var(--text-color);
		border: 1px solid var(--text-color);
	}
`
const Name = styled.p`
	color: var(--text-color);
	font-size: 1.2rem;
`
// const Image = styled.img``

export default Navbar
