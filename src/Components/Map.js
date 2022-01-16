import React, { useContext } from "react"
import styled from "styled-components"
import { MapContainer, TileLayer, Popup } from "react-leaflet"
import ReactLeafletDriftMarker from "react-leaflet-drift-marker"
import { UserContext } from "../Providers/UserProvider"
import { MapContext } from "../Providers/MapProvider"

const Map = () => {
	const context = useContext(UserContext)
	const mapContext = useContext(MapContext)
	const { positions } = mapContext
	const { userLoading } = context
	if (userLoading) {
		return <></>
	}
	if (positions.length === 0) {
		return <Container>...Loading the map</Container>
	}
	return (
		<Container>
			<MapContainer center={[48.8, 2.26]} zoom={10} scrollWheelZoom={false} style={{ height: "100%" }}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{Object.entries(positions).map((position, index) => {
					return (
						<ReactLeafletDriftMarker
							duration={500}
							position={[position[1].location.latitude, position[1].location.longitude]}
							rotationAngle={45}
							key={index}>
							<Popup>{position[0]}</Popup>
						</ReactLeafletDriftMarker>
					)
				})}
			</MapContainer>
		</Container>
	)
}

const Container = styled.div`
	height: 300px;
	width: 300px;
	border: 1px solid black;
	position: fixed;
	bottom: 5px;
	right: 10px;
`

export default Map
