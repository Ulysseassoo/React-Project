import React from "react"
import styled from "styled-components"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"

const Loading = () => {
	return (
		<Center>
			<Loader type="TailSpin" color="#082032" height={200} width={200} />
		</Center>
	)
}

const Center = styled.div`
	height: 100%;
	justify-content: center;
	align-items: center;
	width: 100%;
	display: flex;
`

export default Loading
