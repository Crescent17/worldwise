import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useEffect, useState} from "react";
import {useCities} from "../contexts/CitiesContext.jsx";

export default function Map() {
    const navigate = useNavigate()
    const {cities} = useCities()
    const [mapPosition, setMapPosition] = useState([40, 0])
    const [searchParams, setSearchParams] = useSearchParams()
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')
    return <div className={styles.mapContainer}>
        <MapContainer id='map' className={styles.map} center={mapPosition} zoom={4}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cities.map(city => <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
                <Popup>
                    <span>{city.emoji}</span> <span>{city.cityName}</span>
                </Popup>
            </Marker>)}
        </MapContainer>
    </div>
}