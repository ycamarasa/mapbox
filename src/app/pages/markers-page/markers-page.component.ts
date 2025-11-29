import {
  AfterViewInit,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';
import { v4 as UuidV4 } from 'uuid';
import { CommonModule } from '@angular/common';
import { Marker } from '../../interfaces/map.interface';

mapboxgl.accessToken = environment.MAPBOX_KEY;

@Component({
  selector: 'app-markers-page',
  imports: [CommonModule],
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  markers = signal<Marker[]>([]);

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [0.808334, 41.799146], // starting position [lng, lat]
      zoom: 13, // starting zoom
      dragRotate: true,
      keyboard: true,
      touchZoomRotate: true, // Enable touch zoom & rotation
      // pitch: 60, // inclinación 3D
      // bearing: -17, // rotación inicial
      // antialias: true,
    });

    this.mapListeners(map);
  }

  selectedMarker: any = null;

  // selectMarker(marker: any) {
  //   this.selectedMarker = marker;
  //   this.flyToMarker(marker.mapboxMarker.getLngLat());
  // }

  mapListeners(map: mapboxgl.Map) {
    map.on('click', (event) => this.mapClick(event));
    this.map.set(map);
  }

  mapClick(event: mapboxgl.MapMouseEvent) {
    console.log('map on click: ', event.lngLat);

    if (!this.map()) return;

    const map = this.map()!;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const coord = event.lngLat;

    const mapboxMarker = new mapboxgl.Marker({
      draggable: false,
      color: color,
    })
      .setLngLat(coord)
      .addTo(map);

    const newMarker: Marker = {
      id: UuidV4(),
      mapboxMarker: mapboxMarker,
    };

    this.markers.set([newMarker, ...this.markers()]);
    // this.markers.update((markers) => [newMarker, ...markers]);

    console.log('Listado Marcadores: ', this.markers());
  }

  flyToMarker(lngLat: LngLatLike) {
    if (!this.map()) return;

    this.map()?.flyTo({
      center: lngLat,
    });
  }

  deleteMarker(marker: Marker) {
    if (!this.map()) return;

    const map = this.map()!;
    marker.mapboxMarker.remove();
    this.markers.update((markers) => markers.filter((m) => m.id !== marker.id));
  }
}
