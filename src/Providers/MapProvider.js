import React, { createContext, useEffect, useState } from "react"
import socketIOClient from "socket.io-client"

export const MapContext = createContext({
	positions: {},
	setPositions: () => {}
})

export const MapProvider = (props) => {
	const [positions, setPositions] = useState({})
	const ENDPOINT = "http://edu.project.etherial.fr/"
	// const emitPosition = () => {
	// 	const socket = socketIOClient(ENDPOINT)
	// 	socket.emit("update_position", {
	// 		point_lat: 49.56,
	// 		point_lon: 2.587
	// 	})
	// }
	useEffect(() => {
		const socket = socketIOClient(ENDPOINT)
		socket.on("positions", (data) => {
			setPositions(data.data)
		})
		return () => {
			socket.off("positions")
		}
	}, [])

	return <MapContext.Provider value={{ positions, setPositions }}>{props.children}</MapContext.Provider>
}
