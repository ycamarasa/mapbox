import { Route } from '@angular/router';
import { FullscreenMapPageComponent } from './pages/fullscreen-map-page/fullscreen-map-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { fullScreenIcon, houseIcon, markerIcon } from './icons/icon-data';

export interface AppRoute extends Route {
  icon?: string;
}

export const routes: AppRoute[] = [
  {
    path: 'homepage',
    component: HomepageComponent,
    title: '',
  },
  {
    path: 'fullscreen',
    component: FullscreenMapPageComponent,
    title: 'FullScreen Map',
    icon: fullScreenIcon,
  },
  {
    path: 'markers',
    component: MarkersPageComponent,
    title: 'Marker',
    icon: markerIcon,
  },
  {
    path: 'houses',
    component: HousesPageComponent,
    title: 'Properties available',
    icon: houseIcon,
  },
  {
    path: '**',
    redirectTo: 'homepage',
  },
];
