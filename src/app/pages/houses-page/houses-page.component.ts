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
      id: 'uuid()',
      name: 'Villa Serenity',
      description:
        'A peaceful retreat with panoramic sea views and lush gardens.',
      price: 500000,
      lngLat: { lng: -0.861526, lat: 41.65649 },
      tags: ['Villa', 'Sea', 'Gardens'],
      isNew: true,
    },
    {
      id: 'uuid()',
      name: 'House of the Sun',
      description:
        'A bright and cozy home with spacious terraces and a private pool.',
      price: 750000,
      lngLat: { lng: -3.862, lat: 41.657 },
      tags: ['House', 'Sun', 'Terraces'],
    },
    {
      id: 'uuid()',
      name: 'Emerald Residence',
      description:
        'Elegant property with luxury finishes and modern architectural design.',
      price: 1200000,
      lngLat: { lng: 0.69187, lat: 41.647155 },
      tags: ['House', 'Emerald', 'Finishes'],
    },
    {
      id: 'uuid()',
      name: 'Loft',
      description: 'Charming loft near the peaceful La Mitjana Natural Park.',
      price: 950000,
      lngLat: { lng: 0.635429, lat: 41.624536 },
      tags: ['House', 'Lake', 'Estate'],
    },
    {
      id: 'uuid()',
      name: 'Forest Chalet',
      description:
        'Charming property surrounded by forest, with private trails and a natural pool.',
      price: 650000,
      lngLat: { lng: -1.45231, lat: 42.66234 },
      tags: ['Chalet', 'Forest', 'Pool'],
    },
    {
      id: 'uuid()',
      name: 'Horizon Apartment',
      description:
        'Modern high-rise apartment with city views and contemporary finishes.',
      price: 420000,
      lngLat: { lng: -0.7412, lat: 46.6495 },
      tags: ['Apartment', 'Horizon', 'Modern'],
    },
  ]);
}
