import { GlobalStyle } from "./Theme/global"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Screens/Home"
import Login from "./Screens/Login"
import Register from "./Screens/Register"
import { UserProvider } from "./Providers/UserProvider"
import Navbar from "./Components/Navbar"
import { ArticleProvider } from "./Providers/ArticleProvider"
import ArticleShow from "./Screens/ArticleShow"
import NewArticle from "./Screens/NewArticle"
import Map from "./Components/Map"
import styled from "styled-components"
import { MapProvider } from "./Providers/MapProvider"

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<UserProvider>
					<ArticleProvider>
						<MapProvider>
							<Container>
								<Navbar />
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/login" element={<Login />} />
									<Route path="/register" element={<Register />} />
									<Route path="/article/:id" element={<ArticleShow />} />
									<Route path="/article/new" element={<NewArticle />} />
								</Routes>
								<Map />
							</Container>
						</MapProvider>
					</ArticleProvider>
				</UserProvider>
			</BrowserRouter>
		</>
	)
}

const Container = styled.main`
	height: 100vh;
	display: flex;
	flex-direction: column;
`
export default App
