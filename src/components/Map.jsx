import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useState} from "react";

export default function Map() {
    const navigate = useNavigate()
    const [mapPosition, setMapPosition] = useState([40, 0])
    const [searchParams, setSearchParams] = useSearchParams()
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')
    return <div className={styles.mapContainer}>
        <MapContainer id='map' className={styles.map} center={mapPosition} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
}