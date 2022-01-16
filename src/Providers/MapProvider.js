import React, { createContext, useEffect, useState } from "react"
import socketIOClient from "socket.io-client"

export const MapContext = createContext({
	positions: {},
	setPositions: () => {}
})

export const MapProvider = (props) => {
	const [positions, setPositions] = useState({})
	const ENDPOINT = "http://edu.project.etherial.fr/"
	useEffect(() => {
		const socket = socketIOClient(ENDPOINT)
		// Authentificate
		socket.emit("auth", localStorage.getItem("token"))
		// Get Positions on the map
		socket.on("positions", (data) => {
			setPositions(data.data)
		})
		// Send positions
		if ("geolocation" in navigator) {
			navigator.permissions.query({ name: "geolocation" }).then((result) => {
				if (result.state === "granted" || result.state === "prompt") {
					navigator.geolocation.watchPosition((position) => {
						socket.emit("update_position", { point_lat: position.coords.latitude, point_lon: position.coords.longitude })
					})
				} else {
					// Send random location
					socket.emit("update_position", {
						point_lat: 49.56,
						point_lon: 2.587
					})
				}
			})
		}

		return () => {
			socket.off("positions")
		}
	}, [])

	return <MapContext.Provider value={{ positions, setPositions }}>{props.children}</MapContext.Provider>
}
