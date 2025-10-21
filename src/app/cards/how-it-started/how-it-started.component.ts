import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-started',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './how-it-started.component.html',
  styleUrl: './how-it-started.component.css',
})
export class HowItStartedComponent {
  headding: string = `My Design & Development.
           From Concept
            to
            Creation`;
  how: string = `Blending design intuition with backend logic, I build applications that not only work — they connect. My goal is to craft solutions that are scalable, user-centric, and future-ready..`;
  date: string = 'November 2024';
}
