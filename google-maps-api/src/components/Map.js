import { useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { getLatLng } from '../actions/mapsActions';
import MapCOmponent from './MapCOmponent';


export default function ContentMap() {
  

  const [location, setLocation] = useState({});

  const address = 'utn frc';
  const province = 'Cordoba';
  const apikey = 'AIzaSyCj7jve3wn3l_c-ZLDwYOO_bx3UaoO-dig';

  const getLocation = async () => {
    const response = await getLatLng(address,province,apikey);
    console.log(response);
    setLocation(response.data.results[0].geometry.location)
  }
  console.log(location.lat);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCj7jve3wn3l_c-ZLDwYOO_bx3UaoO-dig',
    libraries: ['places']
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <button onClick={getLocation}>Obtener ubicación</button>
      {/* <br/>
      <br/>
      <li><strong>LATITUD:</strong> {location.lat}</li>
      <li><strong>LONGITUD:</strong> {location.lng}</li> */}
      {location.lat !== undefined ? <MapCOmponent lat={location.lat} lng={location.lng}/> : null}
      
    </>
);
}