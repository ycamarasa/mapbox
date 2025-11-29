export interface HouseProperty {
  id: string;
  name: string;
  description: string;
  price: number;
  lngLat: LngLat;
  tags: string[];
  isNew?: boolean;
}

export interface LngLat {
  lng: number;
  lat: number;
}

export interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
  colorName?: string;
}
