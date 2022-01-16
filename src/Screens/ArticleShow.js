import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import Article from "../Components/Article"
import Loading from "../Components/Loading"
import { getArticleById } from "../Services/APIs"

const ArticleShow = () => {
	const [article, setArticle] = useState([])
	let params = useParams()
	const { id } = params

	useEffect(() => {
		const getArticle = async (token) => {
			try {
				let { data } = await getArticleById(token, id)
				setArticle(data)
			} catch (error) {
				console.log(error)
			}
		}
		const token = localStorage.getItem("token")
		getArticle(token)
	}, [id])

	if (article.length === 0) {
		return <Loading />
	}
	return (
		<div>
			<Article {...article} />
		</div>
	)
}

export default ArticleShow
