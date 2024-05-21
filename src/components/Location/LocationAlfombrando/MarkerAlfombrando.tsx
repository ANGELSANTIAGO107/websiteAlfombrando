import { icon } from "leaflet";
import { MarkerAlfombrandoProps } from "./MarkerAlfombrando.types";
import { Marker, Popup, useMap } from "react-leaflet";
import { AlfombrandoData } from "./MarkerAlfombrando.data";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export function MarkerAlfombrando(props: MarkerAlfombrandoProps) {
  const { selectMarker } = props;
  const fnMap = useMap();
  const customIcon = icon({
    iconUrl: "/assets/marker.svg",
    iconSize: [40, 40],
  });
  return AlfombrandoData.map(({ id, name, position, image }) => (
    <Marker
      key={id}
      position={position}
      icon={customIcon}
      eventHandlers={{
        click: () => {
          selectMarker(position, fnMap);
        },
      }}
    >
      <Popup>
        <div className="flex items-center mb-2">
          <span className="mr-4 text-secondary">
            <FaMapMarkerAlt />
          </span>
          <h5 className="text-md text-secondary">{name}</h5>
        </div>
        <Image
          src={`/assets/Servicios/${image}`}
          alt={name}
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </Popup>
    </Marker>
  ));
}
