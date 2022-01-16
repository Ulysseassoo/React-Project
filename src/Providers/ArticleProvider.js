import React, { createContext, useEffect, useState } from "react"
import { getAllArticles } from "../Services/APIs"

export const ArticleContext = createContext({
	pageCount: 0,
	articleLoading: true,
	articles: [],
	getArticles: () => {}
})

export const ArticleProvider = (props) => {
	const [articles, setArticles] = useState([])
	const [articleLoading, setArticleLoading] = useState(true)
	const [pageCount, setPageCount] = useState(1)

	const getArticles = async (token, limit = 10, offset = 0) => {
		try {
			let { data, count } = await getAllArticles(token, limit, offset)
			setArticles(data)
			setPageCount(count / limit)
			setArticleLoading(false)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		const token = localStorage.getItem("token")
		getArticles(token)
	}, [])

	return <ArticleContext.Provider value={{ articles, getArticles, pageCount, articleLoading }}>{props.children}</ArticleContext.Provider>
}
