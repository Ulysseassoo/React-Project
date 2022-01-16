import React, { createContext, useEffect, useState } from "react"
import { getUserInformations } from "../Services/APIs"
import { useLocation, useNavigate } from "react-router"

export const UserContext = createContext({
	userInformations: [],
	setUserInformations: () => {},
	setUserLoading: () => {},
	userLoading: true
})

export const UserProvider = (props) => {
	const [userInformations, setUserInformations] = useState([])
	const [userLoading, setUserLoading] = useState(true)

	let location = useLocation()
	let navigate = useNavigate()

	const getData = async (token) => {
		try {
			let { data } = await getUserInformations(token)
			setUserInformations(data)
			setUserLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem("token")
		if (!token && location.pathname !== "/register") {
			navigate("/login")
			return
		}
		getData(token)
	}, [navigate, location.pathname])

	return <UserContext.Provider value={{ userInformations, setUserInformations, userLoading, setUserLoading }}>{props.children}</UserContext.Provider>
}
