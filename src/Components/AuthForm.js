import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { login, registerUser } from "../Services/APIs"
import FormButton from "./FormButton"

const AuthForm = ({ registerForm }) => {
	const { register, handleSubmit } = useForm()
	let navigate = useNavigate()
	const onSubmit = async (form) => {
		const { password, password_verif } = form
		if (registerForm) {
			if (password !== password_verif) return
		}
		try {
			let { data } = registerForm ? await registerUser(form) : await login(form)
			let { token } = data
			localStorage.setItem("token", token)
			navigate("/")
		} catch (error) {
			console.log(error)
		}
	}
	if (registerForm) {
		return (
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" placeholder="Firstname" {...register("firstname")} />
				<Input type="text" placeholder="Lastname" {...register("lastname")} />
				<Input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
				<Input type="password" placeholder="Password" {...register("password", { required: true })} />
				<Input type="password" placeholder="Password confirmation" {...register("password_verif", { required: true })} />
				<FormButton content="Register" />
			</Form>
		)
	}
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
			<Input type="password" placeholder="Password" {...register("password", { required: true })} />
			<FormButton content="Login" />
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

export default AuthForm
