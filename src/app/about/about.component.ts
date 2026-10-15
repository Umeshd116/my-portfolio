import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutme: string = `I’m a Java Full Stack Developer with expertise in Java, Spring Boot, AWS, and more
                     with a computer science background, I thrive on learning new technologies and build 
                     seamless solutions from scratch. I am driven by a passion for optimizing systems,
                     enhancing user experiences, and streamlining workflows to boost efficiency, scalability
                     and overall company growth. My goal is to develop robust applications that drive
                     innovation and improve business outcomes.`;

  work: Array<any> = [
    {
      company: 'Key Bank',
      position: 'FULL STACK SOFTWARE DEVELOPER',
      time_period: 'Feb 2025 - Present',
      place: 'Ohio, USA', 
      projects: [
        {
          name :`Developed cloud-native microservices and responsive 
                 React UIs, integrating AWS infrastructure, Kafka pipelines,
                 and REST APIs to modernize enterprise banking applications.`
        },
      ],
      tech: [
        {
          name: 'Kafka',
          link: 'https://kafka.apache.org/',
        },
        {
          name: 'AWS',
          link: 'https://aws.amazon.com/',
        },
        {
          name: 'MongoDB',
          link: 'https://www.mongodb.com/',
        },
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
        },
        {
          name: 'React.js',
          link: 'https://react.dev/',
        },
        {
          name: 'Spark',
          link: 'https://spark.apache.org/',
        },
        {
          name: 'Kubernetes',
          link: 'https://kubernetes.io/',
        },
       
        {
          name: 'GitHub',
          link: 'https://github.com/',
        },
        {
          name: 'Git',
          link: 'https://git-scm.com/'
        },
      ],
    },
    {
      company: 'CEVA Logistics',
      position: 'SOFTWARE DEVELOPER',
      time_period: 'FEB 2024 - DEC 2024' + '.' + ' 11 months',
      place: 'Pennsylvania, USA', 
      projects: [
        {
          name: `Engineered scalable microservices and secured 
                 REST APIs with Spring Boot and Kafka, while building 
                 reusable React components and deploying on Kubernetes and Azure.`,
        },
      ],
      tech: [
        
        {
          name: 'React.js',
          link: 'https://react.dev/',
        },
        {
          name: 'Angular',
          link: 'https://angular.dev/',
        },
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Spark',
          link: 'https://spark.apache.org/',
        },
        {
          name: 'Kubernetes',
          link: 'https://kubernetes.io/',
        },
        {
          name: 'Amazon S3',
          link: 'https://aws.amazon.com/s3/',
        },
        {
          name: 'Jenkins',
          link: 'https://www.jenkins.io/',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/',
        },
        {
          name: 'Git',
          link: 'https://git-scm.com/'
        },
      ],
    },
    {
      company: 'WESTERN MICHIGAN UNIVERSITY ',
      position: 'RESEARCH ASSISTANT', 
      time_period: 'Feb 2024 – Dec 2024' + '.' + ' 11 months',
      place: 'India', 
      
    },
    {
      company: 'High Radius',
      position: 'SOFTWARE INTERN', 
      time_period: 'Nov 2022 – May 2023' + '.' + '7 months',
      place: 'India', 
      projects: [
        {
          name: `Built and secured RESTful services with Spring Boot,
                 JPA; migrated SOAP services to REST APIs, and delivered 
                 multi-threaded modules for concurrent data processing.`,
        },
      ],
      
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
