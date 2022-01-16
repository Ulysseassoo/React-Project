import React, { useContext, useState } from "react"
import ReactPaginate from "react-paginate"
import Article from "../Components/Article"
import { ArticleContext } from "../Providers/ArticleProvider"
import styled from "styled-components"
import Loading from "../Components/Loading"

const Home = () => {
	const context = useContext(ArticleContext)
	let { articles, getArticles, pageCount, articleLoading } = context
	const token = localStorage.getItem("token")
	const limit = 10
	const [offset, setOffset] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)
	if (articleLoading) {
		return <Loading />
	}

	const handlePageChange = (selectedObject) => {
		setCurrentPage(selectedObject.selected)
		setOffset(selectedObject.selected * 10)
		handleFetch(selectedObject.selected * 10)
	}
	const handleFetch = (offset) => {
		getArticles(token, limit, offset)
	}
	return (
		<Container>
			<Flex>
				{articles.map((article) => {
					return <Article {...article} key={article.id} />
				})}
			</Flex>
			<PaginationContainer>
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
					nextLabel=">"
					previousLabel="<"
					renderOnZeroPageCount={null}
					style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
				/>
			</PaginationContainer>
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

const PaginationContainer = styled.div`
	width: 500px;
	margin: auto;
	& .container {
		display: flex;
		justify-content: space-evenly;
		list-style: none;
		gap: 0.5rem;
		& li {
			cursor: pointer;
			padding: 0.2rem;
			background-color: var(--primary-color);
			color: white;
			border-radius: 0.3rem;
			width: 30px;
			height: 30px;
			text-align: center;
			transition: 0.3s ease;

			&.disabled {
				background-color: gray;
			}
			&.active {
				background-color: var(--accent-color);
				scale: 1.25;
			}
		}
	}
`

export default Home
