import { Map } from "leaflet";

export type MarkerAlfombrandoProps = {
  selectMarker: (position: positionType, fn: fnType) => void;
};

type positionType = {
  lat: number;
  lng: number;
};

type fnType = Map;
