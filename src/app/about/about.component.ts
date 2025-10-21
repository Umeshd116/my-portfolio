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
      company: 'Huntington Bank',
      position: 'JAVA FULL STACK DEVELOPER',
      time_period: 'Jan 2025 - Present' + '.' + ' 10 months',
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
          name: 'java',
          link: 'https://www.java.com/en/',
        },
        {
          name: 'SpringBoot',
          link: 'https://spring.io/projects/spring-boot',
        },
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
      position: 'Full Stack Developer',
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
          name: 'JAVA',
          link: 'https://www.java.com/en/',
        },
        {
          name: 'SpringBoot',
          link: 'https://spring.io/projects/spring-boot',
        },
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
      company: 'Takeda Pharmaceutical ',
      position: 'Java Full Stack Developer', 
      time_period: 'sep 2022 – June 2023' + '.' + ' 10 months',
      place: 'India', 
      projects: [
        {
          name: `Led migration from monolith to microservices
                 with Spring Boot and AWS, developed cross-platform UIs 
                 in Ionic, and integrated big data analytics using Spark and Kafka.`,
        },
      ],
      tech: [
        {
          name: 'JAVA',
          link: 'https://www.java.com/en/',
        },
        {
          name: 'SpringBoot',
          link: 'https://spring.io/projects/spring-boot',
        },
        {
          name: 'Hibernate',
          link: 'https://hibernate.org/',
        },
        {
          name: 'Hadoop',
          link: 'https://hadoop.apache.org/',
        },
        {
          name: 'Spark',
          link: 'https://spark.apache.org/',
        },
        {
          name: 'Kafka',
          link: 'https://kafka.apache.org/',
        },
        {
          name: 'AWS',
          link: 'https://aws.amazon.com/',
        },
        {
          name: 'Mockito',
          link: 'https://site.mockito.org/',
        },
        {
          name: 'Git',
          link: 'https://git-scm.com/'
        },
      ],
    },
    {
      company: 'Tata AIA Life Insurance',
      position: 'Software Intern', 
      time_period: 'July 2021 – Aug 2022' + '.' + '1 yr 2 months',
      place: 'India', 
      projects: [
        {
          name: `Built and secured RESTful services with Spring Boot,
                 JPA, and AWS; migrated SOAP services to REST APIs, and delivered 
                 multi-threaded modules for concurrent data processing.`,
        },
      ],
      tech: [
        {
          name: 'JAVA',
          link: 'https://www.java.com/en/',
        },
        {
          name: 'SpringBoot',
          link: 'https://spring.io/projects/spring-boot',
        },
        {
          name: 'MySQL',
          link: 'https://www.mysql.com/',
        },
        {
          name: 'AWS',
          link: 'https://aws.amazon.com/',
        },
        {
          name: 'Amazon EC2',
          link: 'https://aws.amazon.com/ec2/',
        },
        {
          name: 'Amazon Route 53',
          link: 'https://aws.amazon.com/route53/',
        }, 
        {
          name: 'MongoDB',
          link: 'https://www.mongodb.com/',
        },
        {
          name: 'Hibernate',
          link: 'https://hibernate.org/'
        },
      ],
    },
  ];

  education: Array<any> = [
    {
      studied_at: 'Western Michigan University',
      qualified: 'Master of Science: Computer Science',
      time_period: '2023 - 2024',
      place: 'Kalamazoo, Michigan, USA',
    },

  ];
}
