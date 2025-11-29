import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, tap } from 'rxjs';

import { routes } from '../../../app.routes';
import { Title } from '@angular/platform-browser';
import { IconComponent } from '../../../icons/icon-component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  router = inject(Router); //Esto no es un servicio es un objeto

  routes = routes
    .map((route) => ({
      path: route.path,
      title: `${route.title ?? 'Maps en Angular'}`,
      icon: route.icon,
    }))
    .filter((route) => route.path !== '**');

  // pageTitle$ = this.router.events.pipe(
  //   filter((event) => event instanceof NavigationEnd),
  //   // tap((event) => console.log(event)),
  //   map((event) => event.url),
  //   map(
  //     (url) =>
  //       routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas'
  //   )
  // );

  pageTitle = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      // tap((event) => console.log(event)),
      // map((event: NavigationEnd) => event.urlAfterRedirects),
      map((event) => event.url),
      map(
        (url) =>
          routes.find((route) => `/${route.path}` === url)?.title ?? 'Mapas'
      )
    )
  );

}
