import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Array<any> = [
    {
      name: "Portfolio",
      description: "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in Angular, and more.",
      image: "",
      github: "",
      view: "",
      status: true,
      date: "Updating",
      demo: false,
      tech: [
        {
          name: "Angular",
          image: "assets/angular17.svg",
        },
        {
          name: "tailwind",
          image: "assets/tailwindcss.svg",
        },
        {
          name: "flowbite",
          image: "assets/flowbite.svg",
        },
        {
          name: "typescript",
          image: "assets/typescript.svg",
        },
        {
          name: "figma",
          image: "assets/figma.svg",
        },
      ]
    },
    {
      name: "HealthCare Appointment System",
      description: "A full-stack healthcare booking app enabling secure user login, registration, and role-based simulating real-world use cases.",
      image: "assets/healthcareappointment.png",
      github: false,
      view: "",
      status: true,
      date: "Final Stage",
      demo: false,
      tech: [
        {
          name: "java",
          image: "assets/java.svg",
        },
        {
          name: "SpringBoot",
          image: "assets/spring-logo.png",
        },
        {
          name: "typescript",
          image: "assets/typescript.svg",
        },
        {
          name: "AWS",
          image: "assets/aws.svg",
        },
        {
          name: "bootstrap",
          image: "assets/bootstrap.svg",
        },
      ]
    },
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce app for managing products, customers, and admin operations with real-world retail flow.",
      image: "a",
      github: "",
      view: "",
      status: false,
      date: "augest - 2024",
      demo: true,
      tech: [
        {
          name: "java",
          image: "assets/java.svg",
        },
        {
          name: "SpringBoot",
          image: "assets/spring-logo.png",
        },
        {
          name: "MySQL",
          image: "assets/mysql.svg",
        },
        {
          name: "AWS RDS",
          image: "assets/aws.svg",
        },
      ]
    },
    {
      name: "Fake News Detector using Transformers",
      description: "A transformer-based NLP model that classifies news articles as real or fake, fine-tuned for high accuracy on real-world data.",
      image: "assets/img/qrcode-page.webp",
      github: "",
      view: "",
      status: false,
      date: "augest - 2024",
      demo: true,
      tech: [
        {
          name: "Python",
          image: "assets/python.svg",
        },
        {
          name: "Streamlit",
          image: "assets/streamlit.png",
        },
        {
          name: "typescript",
          image: "assets/typescript.svg",
        },
        {
          name: "openapi",
          image: "assets/ninja.png",
        },
      ]
    },
    {
      name: "Instagram",
      description: "A clone of Instagram, the popular social media platform, allowing users to browse, post, and interact with user-friendly environment.",
      image: "",
      github: "",
      view: "",
      status: true,
      date: "September - 2023",
      demo: true,
      tech: [
        {
          name: "angular",
          image: "assets/angular17.svg",
        },
        {
          name: "tailwind",
          image: "assets/tailwindcss.svg",
        },
        {
          name: "flowbite",
          image: "assets/flowbite.svg",
        },
        {
          name: "typescript",
          image: "assets/typescript.svg",
        },
        {
          name: "openai",
          image: "assets/openai.svg",
        },
      ]
    },
    {
      name: "YOUTUBE Clone",
      description: "A Youtube clone that allows browsing and viewing TV shows using data from an open API, featuring a responsive and user-friendly interface.",
      image: "assets/youtubeclone.png",
      github: "",
      view: "",
      status: false,
      date: "June - 2024",
      demo: true,
      tech: [
        {
          name: "Java",
          image: "assets/java.svg",
        },
        {
          name: "SpringBoot",
          image: "assets/spring-logo.png",
        },
        {
          name: "AWS",
          image: "assets/aws.svg",
        },
        {
          name: "Github",
          image: "assets/github.svg",
        },
        {
          name: "angular",
          image: "assets/angular17.svg",
        },
      ]
    },
    {
      name: "Game Using UNITY ",
      description: "A 3D Unity game featuring free-world exploration, coin collection, and basic enemy combat.",
      image: "",
      github: "",
      view: false,
      status: false,
      date: "April - 2024",
      demo: true,
      tech: [
        {
          name: "Unity",
          image: "assets/unity.svg",
        },
        {
          name: "CSharp",
          image: "assets/Csharp.svg",
        },
      ]
    },
    {
      name: "Pneumonia Detection using Deep Learning",
      description: "A deep learning model to detect pneumonia from chest X-rays with real-time prediction and visual insights.",
      image: "assets/pneumonia detection.png",
      github: "",
      view: false,
      status: false,
      date: "December - 2021",
      demo: false,
      tech: [
        {
          name: "Python",
          image: "assets/python.svg",
        },
        {
          name: "Tensorflow",
          image: "assets/Tensorflow.svg",
        },
        {
          name: "Keras",
          image: "assets/keras-logo.png",
        },  
        {
          name: "OpenCV",
          image: "assets/openCV.png",
        },
        {
          name: "Streamlit",
          image: "assets/streamlit.png",
        },
      ]
    },
  ]
}