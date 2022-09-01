import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  return (
    <div className="App">
        <Map
            initialViewState={{
                longitude: 77.2090,
                latitude: 28.6139,
                zoom: 6
            }}
            style={{width: "100vw", height: "100vh"}}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker
                longitude={77.1855}
                latitude={28.5245}
                offsetLeft={-20}
                offsetTop={-10}
                anchor="bottom"
            >
                <LocationOnIcon sx={{ fontSize: 40 }} />
            </Marker>
        </Map>
    </div>
  );
}

export default App;
