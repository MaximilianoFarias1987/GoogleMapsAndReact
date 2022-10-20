import { useState, useMemo, useCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from '@react-google-maps/api';
// import Places from './places';
// import Distance from './distance';
import '../styles/global.css';

export default function MapCOmponent(props) {
    return <div className="divContainer">
                <div className="container">
                    <div className="map">
                        <GoogleMap 
                            zoom={16} 
                            center= {{ lat: props.lat, lng: props.lng }}
                            mapContainerClassName="mapcontainer"    
                        >
                            <Marker position={{ lat: props.lat, lng: props.lng }}/>
                        </GoogleMap>
                    </div>
                </div>
            </div> 
}