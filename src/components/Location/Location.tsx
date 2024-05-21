
"use client"
import { Map } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Transition } from "../Transition";
import { MarkerAlfombrando } from "./LocationAlfombrando";

export function Location() {
  const coordinatepoint = {
    lat: 4.541336442118627,
    lng: -75.66388114757103,
  };
  const centerMarker = (position: { lat: number; lng: number }, fnMap: Map) => {
    fnMap.flyTo({
      lat: position.lat,
      lng: position.lng,
    });
  };
  return (
    <Transition className="px-4 py-8 md:py-44 md:px-36">
      <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">
        Servicios disponibles para todo el eje cafetero, que esperas para
        renovar tu espacio favorito, con productos de alta calidad
      </h2>
      <h4
        className="Localization text-center text-secondary mb-4"
        id="location"
      >
        Ven y renueva tu espacio con Alfombrando nos encontramos en
        Armenia-Quindio
      </h4>
      <MapContainer
        center={coordinatepoint}
        zoom={18}
        scrollWheelZoom={false}
        className="h-[700px]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerAlfombrando selectMarker={centerMarker} />
      </MapContainer>
    </Transition>
  );
}
