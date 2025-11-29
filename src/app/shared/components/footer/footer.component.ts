import { Component, signal } from '@angular/core';
import { IconComponent } from '../../../icons/icon-component';
import { githubIcon, instagramIcon, linkedinIcon } from '../../../icons/icon-data';

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  currentYear = signal(new Date().getFullYear());
  linkedin = linkedinIcon;
  github = githubIcon;
  instagram = instagramIcon;
}
