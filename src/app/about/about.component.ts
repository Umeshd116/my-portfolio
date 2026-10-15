import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutme: string = `I’m a Software Developer with expertise in Java, Spring Boot, AWS, and more
                     with a computer science background, I thrive on learning new technologies and build 
                     seamless solutions from scratch. I am driven by a passion for optimizing systems,
                     enhancing user experiences, and streamlining workflows to boost efficiency, scalability
                     and overall company growth. My goal is to develop robust applications that drive
                     innovation and improve business outcomes.`;

  work: Array<any> = [
    {
      company: 'WESTERN MICHIGAN UNIVERSITY ',
      position: 'RESEARCH ASSISTANT', 
      time_period: 'Jan 2024 – March 2025' + '.' + ' 15 months',
      place: 'Kalamazoo, MI', 
      
    },
    {
      company: 'High Radius',
      position: 'SOFTWARE INTERN', 
      time_period: 'Aug 2022 – May 2023' + '.' + '9 months',
      place: 'India', 
      
      
    },
  ];

  education: Array<any> = [
    {
      studied_at: 'Western Michigan University',
      qualified: 'Master of Science: Computer Science',
      time_period: '2023 - 2025',
      place: 'Kalamazoo, Michigan, USA',
    },

  ];
}
