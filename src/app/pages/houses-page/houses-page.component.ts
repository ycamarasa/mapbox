import { Component, signal } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { MiniMapComponent } from '../../maps/components/mini-map/mini-map.component';
import { HouseProperty } from '../../interfaces/map.interface';

@Component({
  selector: 'app-houses-page',
  imports: [MiniMapComponent],
  templateUrl: './houses-page.component.html',
  styleUrl: './houses-page.component.css',
})
export class HousesPageComponent {
  houses = signal<HouseProperty[]>([
    {
      id: uuid(),
      name: 'Villa Serenidad',
      description:
        'Un refugio tranquilo con vistas panorámicas al mar y jardines exuberantes.',
      price: 500_000,
      lngLat: { lng: -0.861526, lat: 41.65649 },
      tags: ['Villa', 'Mar', 'Jardines'],
      isNew: true,
    },
    {
      id: uuid(),
      name: 'Casa del Sol',
      description:
        'Una casa luminosa y acogedora con amplias terrazas y piscina privada.',
      price: 750_000,
      lngLat: { lng: -3.862, lat: 41.657 },
      tags: ['Casa', 'Sol', 'Terrazas'],
    },
    {
      id: uuid(),
      name: 'Residencia Esmeralda',
      description:
        'Elegante propiedad con acabados de lujo y un diseño arquitectónico moderno.',
      price: 1_200_000,
      lngLat: { lng: 0.69187, lat: 41.647155 },
      tags: ['Casa', 'Esmeralda', 'Acabados'],
    },
    {
      id: uuid(),
      name: 'Loft',
      description:
        'Encantador loft cerca del tranquilo parque natural La Mitjana.',
      price: 950_000,
      lngLat: { lng: 0.635429, lat: 41.624536 },
      tags: ['Casa', 'Lago', 'Hacienda'],
    },
    {
      id: uuid(),
      name: 'Chalet el Bosque',
      description:
        'Encantadora propiedad rodeada de bosque, con senderos privados y piscina natural.',
      price: 650_000,
      lngLat: { lng: -1.45231, lat: 42.66234 },
      tags: ['Chalet', 'Bosque', 'Piscina'],
    },
    {
      id: uuid(),
      name: 'Apartamento Horizonte',
      description:
        'Moderno apartamento en altura con vistas a la ciudad y acabados contemporáneos.',
      price: 420_000,
      lngLat: { lng: -0.7412, lat: 46.6495 },
      tags: ['Apartamento', 'Horizonte', 'Moderno'],
    },
  ]);
}
