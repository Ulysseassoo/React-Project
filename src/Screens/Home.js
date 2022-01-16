import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import Article from "../Components/Article"
import { ArticleContext } from "../Providers/ArticleProvider"
import styled from "styled-components"
import Loading from "../Components/Loading"

const Home = () => {
	const context = React.useContext(ArticleContext)
	let { articles, getArticles, pageCount, articleLoading } = context
	const token = localStorage.getItem("token")
	const limit = 10
	const [offset, setOffset] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)
	if (articleLoading) {
		return <Loading />
	}
	console.log(context)

	const handlePageChange = (selectedObject) => {
		setCurrentPage(selectedObject.selected)
		setOffset(selectedObject.selected * 11)
		handleFetch(selectedObject.selected)
	}
	const handleFetch = () => {
		getArticles(token, limit, offset)
	}
	console.log(currentPage)
	console.log(articles)
	return (
		<Container>
			<Flex>
				{articles.map((article) => {
					return <Article {...article} key={article.id} />
				})}
			</Flex>
			<ReactPaginate
				pageCount={pageCount}
				pageRange={1}
				marginPagesDisplayed={5}
				onPageChange={handlePageChange}
				containerClassName={"container"}
				previousLinkClassName={"page"}
				breakClassName={"page"}
				nextLinkClassName={"page"}
				pageClassName={"page"}
				disabledClassNae={"disabled"}
				activeClassName={"active"}
				style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
			/>
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 1.5rem;
`
const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	height: 350px;
	overflow-y: scroll;
`

export default Home
