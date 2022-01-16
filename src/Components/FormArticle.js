import React, { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { ArticleContext } from "../Providers/ArticleProvider"
import { createArticle, getAllArticleCategories } from "../Services/APIs"
import FormButton from "./FormButton"

const FormArticle = () => {
	const [articleCategories, setArticleCategories] = useState([])
	const context = useContext(ArticleContext)
	const { setArticles, articles } = context
	const token = localStorage.getItem("token")

	const getCategories = async (token) => {
		try {
			let { data } = await getAllArticleCategories(token)
			setArticleCategories(data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getCategories(token)
	}, [token])

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const onSubmit = async (form) => {
		console.log(form)
		try {
			let { data } = await createArticle(form, token)
			setArticles([data, ...articles])
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Input type="text" placeholder="title" {...register("title", {})} />
			<p>{errors.title && errors.title.message}</p>
			<Input type="text" placeholder="content" {...register("content", {})} />
			<p>{errors.content && errors.content.message}</p>
			<select {...register("article_category_id")}>
				{articleCategories.map(({ id, name }) => {
					return (
						<option value={parseInt(id)} key={id}>
							{name}
						</option>
					)
				})}
			</select>
			<FormButton content="Create" />
		</Form>
	)
}

const Form = styled.form`
	display: flex;
	width: 500px;
	flex-direction: column;
	gap: 1.4rem;
	padding: 1rem;
`

const Input = styled.input`
	padding: 0.35rem;
	border-radius: 0.3rem;
	border: none;
	border-bottom: 1px solid var(--primary-color);
`
export default FormArticle
