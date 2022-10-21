import {
    GoogleMap, Marker
} from '@react-google-maps/api';
import '../styles/global.css';

export default function MapCOmponent(props) {
    return (<div className="divContainer">
                <div className="container">
                    <div className="map">
                        <GoogleMap 
                            zoom={16} 
                            center= {{ lat: props.lat, lng: props.lng }}
                            mapContainerClassName="mapcontainer"    
                        >
                            {/* <Marker 
                                position={{ lat: props.lat, lng: props.lng }}icon='https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2014/07/cars-rayo-mcqueen.png?w=500&ssl=1'    
                            /> */}
                            {/* <Marker position={{lat: props.lat, lng: props.lng}}/> */}
                            <Marker position={{lat: props.lat, lng: props.lng}}/>
                        </GoogleMap>
                    </div>
                </div>
            </div> 
    );
}