import {APIProvider, Map, useMap, Marker} from '@vis.gl/react-google-maps';
import {useMapsLibrary} from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';

function App() {
  const [request, setRequest] = useState(null)
  const map = useMap()
  const [searchResults, setSearchResults] = useState(null)
  const placesLibrary = useMapsLibrary('places')
  const [placesService, setPlacesService] = useState(null);
  useEffect(() => {
    if (!placesLibrary || !map) return;
    setPlacesService(new placesLibrary.PlacesService(map));
  }, [placesLibrary, map]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords.latitude, position.coords.longitude, callback);
    });
  }, [])

    function setLocation(latitude, longitude, callback) {
    console.log(latitude)
    console.log(longitude)
    setRequest({
      location: {
      lat: latitude,
      lng: longitude
    },
      radius: 1000
    })
  }

  function callback(results) {
    console.log(results)
    setSearchResults(results.map( result => <Marker position={{lat: result.geometry.location.lat(), lng: result.geometry.location.lng()}}></Marker>))
  }

  function fixLocation() {
    if (!placesService) return;
    placesService.nearbySearch(request, callback)
  }


  return (
    <>
    <button onClick={fixLocation}>Check location</button>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    >
      {searchResults}
    </Map>
    </>
  )
}

export default App
