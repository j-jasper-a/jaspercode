import { Job } from "@/types";

export const jobs: Job[] = [
  {
    id: "1",
    company: {
      name: "Grey Stone International",
      url: "https://www.greystoneintl.com/",
      logoUrl: "/assets/experience/grey-stone-international-logo.webp",
      location: "Dhaka, Bangladesh",
    },
    position: "Technical Operations Manager",
    type: "Full-time",
    startDate: "2018-01-01T00:00:00+06:00",
    endDate: "2021-02-01T00:00:00+06:00",
    accomplishments: [
      "Managed the company`s email server and website, ensuring reliable communication and a smooth online presence.",
      "Monitored and resolved technical issues, maintaining optimal system performance and minimizing downtime.",
      "Facilitated communication with buyers and suppliers, ensuring smooth coordination for orders and shipments.",
    ],
  },
  {
    id: "2",
    company: {
      name: "Grey Stone International",
      url: "https://www.greystoneintl.com/",
      logoUrl: "/assets/experience/grey-stone-international-logo.webp",
      location: "Dhaka, Bangladesh",
    },
    position: "Software Engineer",
    type: "Full-time",
    startDate: "2021-03-01T00:00:00+06:00",
    endDate: "2023-05-01T00:00:00+06:00",
    accomplishments: [
      "Developed the landing page and dashboard for an international fintech startup, contributing to a successful launch.",
      "Refactored an international mid-scale ad optimization company's website for mobile responsiveness and enhanced performance.",
      "Integrated third-party APIs for an international client to improve site functionality and user experience.",
    ],
  },
  {
    id: "3",
    company: {
      name: "Canvas Developers",
      url: "https://www.canvasdevelopers.com/",
      logoUrl: "/assets/experience/canvas-developers-logo.webp",
    },
    position: "Senior Software Engineer",
    type: "Full-time",
    startDate: "2023-06-01T00:00:00+06:00",
    accomplishments: [
      "Led the development of a multi-tenant sports management SaaS platform for international users, optimizing performance and scalability.",
      "Developed a centralized REST API to manage authentication, database operations, and third-party API integrations, enhancing system efficiency.",
      "Built an intuitive, custom admin panel to streamline administrative operations, reducing manual processes and improving overall management.",
    ],
  },
];
