import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

  tools: string = `Java is a powerful, object-oriented programming language know for its platform independence,
                   scalability, and security. It is widely used for enterprise applications, web development,
                   mobile apps, and cloud-based solutions, making it a versatile choice for building high-performance
                   and reliable software.🚀`
  items: Array<any> = [
    {
      name: "Java",
      description: 'Java is a powerful, object-oriented language know for its scalability, security and platform independence, making it ideal for enterprise applications, App development, web development, and cloud solutions.🚀',
      link: 'https://java.com/',
      image: 'assets/java.svg'
    },
    {
      name: "Python",
      description: 'Python is a powerful language known for its simplicity, versatility, and efficiency, making it ideal for web development, data science, AI, and automation.',
      link: 'https://www.python.com/',
      image: 'assets/python.svg'
    },
    {
      name: "AWS",
      description: 'Amazon Web Services (AWS) offers a comprehensive suite of cloud services for computing, storage, and networking.',
      link: 'https://aws.amazon.com/',
      image: 'assets/aws.svg'
    },
    {
      name: "SringBoot",
      description: 'Spring Boot is a powerful framework that simplifies java-based backend development, enabling rapid, scalable, and production-ready applications with minimal configuration.',
      link: 'https://springboot.io/',
      image: 'assets/spring-logo.png'
    },
    {
      name: "UNITY",
      description: 'Unity - a real-time development platform known for its versatility, cross-platform support, and high-performance rendering, making it ideal for game development, AR/VR, and interactice experiences.',
      link: 'https://unity.com/',
      image: 'assets/unity.svg'
    },
    {
      name: "HTML5",
      description: 'HTML5 is the latest version of HyperText Markup Language, the standard for creating web pages and applications.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      image: 'assets/html5.svg'
    },
    {
      name: "CSS3",
      description: 'CSS3 is the latest standard for Cascading Style Sheets, adding new features and improvements over previous versions.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      image: 'assets/css3.svg'
    },
    {
      name: "GitHub",
      description: 'GitHub is a platform for version control and collaboration, allowing multiple people to work on projects simultaneously.',
      link: 'https://github.com/',
      image: 'assets/github.svg'
    },
    {
      name: "MySQL",
      description: 'MySQL is an open-source relational database management system based on SQL (Structured Query Language).',
      link: 'https://www.mysql.com/',
      image: 'assets/mysql.svg'
    },
    {
      name: "JavaScript",
      description: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, and much more.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      image: 'assets/js.svg'
    },
    
    {
      name: "Linux",
      description: 'Linux is a free and open-source operating system kernel used in many distributions for servers, desktops, and embedded systems.',
      link: 'https://www.kernel.org/',
      image: 'assets/linux.svg'
    },
    {
      name: "Visual Studio Code",
      description: 'Visual Studio Code is a source-code editor developed by Microsoft with support for debugging, syntax highlighting, and version control.',
      link: 'https://code.visualstudio.com/',
      image: 'assets/vscode.svg'
    },
    {
      name: "OpenAI",
      description: 'OpenAI is an AI research lab that aims to ensure that artificial general intelligence benefits all of humanity.',
      link: 'https://www.openai.com/',
      image: 'assets/openai.svg'
    },
    {
      name: "Vercel",
      description: 'Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web',
      link: 'https://vercel.com',
      image: 'assets/vercel-icon-dark.svg'
    },
    {
      name: "TypeScript",
      description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript and provides static types.',
      link: 'https://www.typescriptlang.org/',
      image: 'assets/typescript.svg'
    },
    
    
  ];
}