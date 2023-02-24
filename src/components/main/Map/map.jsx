import React from "react";
import Button from "../Button/button";
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';
const containerStyle = {
    width: '400px',
        height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAGOfVn7F9higuOt7TK7c2wan7mDqbSpbE"
    });
    if (!isLoaded) return <div>Loading...</div>
    return (
        <section className="map section">
            <div className="map__container container">
                <h2 className="map__title section__title">Map</h2>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                // onLoad={onLoad}
                // onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
                <Button content={'watch online'} />
            </div>
        </section>
    )
}

export default Map;
