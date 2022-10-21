import { useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { getLatLng } from '../actions/mapsActions';
import MapCOmponent from './MapCOmponent';


export default function ContentMap() {
  

  const [location, setLocation] = useState({});

  const address = '24 de septiembre 1026';
  const province = 'Cordoba';
  const apikey = process.env.REACT_APP_API_KEY;

  const getLocation = async () => {
    const response = await getLatLng(address,province,apikey);
    console.log(response);
    setLocation(response.data.results[0].geometry.location)
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apikey
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <button onClick={getLocation}>Obtener ubicación</button>
      {location.lat !== undefined ? <MapCOmponent lat={location.lat} lng={location.lng}/> : null}
      
    </>
);
}