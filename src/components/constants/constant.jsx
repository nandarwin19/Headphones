import h1 from "/img/h1.jpg";
import h2 from "/img/h2.jpg";
import h3 from "/img/h3.jpg";
import h4 from "/img/h4.jpg";
import h5 from "/img/h5.jpg";
import h6 from "/img/h6.jpg";
import h8 from "/img/h8.jpg";
import h9 from "/img/h9.jpg";
import h10 from "/img/h10.jpg";
import common from "/img/headphoneCurrent.jpg";

import p1 from "/img/p1.jpg";
import p2 from "/img/p2.jpg";
import p3 from "/img/p3.jpg";
import p4 from "/img/p4.jpg";
import p5 from "/img/p5.jpg";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const products = [
  {
    id: 1,
    img: h1,
    img0: h1,
    img1: common,
    img2: h2,
    img3: h3,
    img4: h4,
    img5: h5,
  },
  {
    id: 2,
    img: h2,
    img0: h2,
    img1: common,
    img2: h2,
    img3: h3,
    img4: h4,
    img5: h5,
  },
  {
    id: 3,
    img: h3,
    img0: h3,
    img1: common,
    img2: h2,
    img3: h3,
    img4: h4,
    img5: h5,
  },
  {
    id: 4,
    img: h4,
    img0: h4,
    img1: common,
    img2: h2,
    img3: h3,
    img4: h4,
    img5: h5,
  },
  {
    id: 5,
    img: h5,
    img0: h5,
    img1: common,
    img2: h2,
    img3: h3,
    img4: h4,
    img5: h5,
  },
  {
    id: 6,
    img: h6,
    img0: h6,
    img1: common,
    img2: h2,
    img3: h3,
    img4: h4,
    img5: h5,
  },
];

export const challenges = [
  {
    id: 1,
    title: "vibe",
    text: "We start where others stop, we question the norms, we refuse to be redundant, monopo saigon seeks to deliver original creative solutions.",
    img: h8,
  },
  {
    id: 2,
    title: "fresh",
    text: "We innovate to inspire — We embrace change, we push boundaries, we strive for excellence, monopo saigon is driven to inspire through groundbreaking solutions.",
    img: h9,
  },
  {
    id: 3,
    title: "challenge",
    text: "We integrate to impact — We collaborate seamlessly, we leverage diversity, we integrate perspectives, monopo saigon aims to create solutions that make a lasting impact.",
    img: h10,
  },
];

export const teams = [
  {
    id: 1,
    name: "Davikah",
    about:
      "Dedicated to crafting pixel-perfect designs and user interfaces. With a keen eye for detail, I strive to create visually stunning and user-friendly experiences that captivate audiences.",
    role: "Back-end Developer",
    img: p1,
  },
  {
    id: 2,
    name: "John",
    about:
      "I am a software engineer with expertise in backend development. With years of experience in the industry, I specialize in designing robust and scalable backend systems that power applications and websites.",
    role: "Software Engineer",
    img: p2,
  },
  {
    id: 3,
    name: "Maria",
    about:
      "Passionate about front-end development and design. I enjoy creating intuitive user experiences that seamlessly blend functionality with aesthetics. With a focus on user-centric design, I strive to make the web a better place, one interface at a time.",
    role: "Front-end Developer",
    img: p3,
  },
  {
    id: 4,
    name: "Lira",
    about:
      "Experienced full-stack developer with a focus on modern web technologies. I specialize in building dynamic and interactive web applications that push the boundaries of what's possible on the web. With a passion for innovation, I constantly seek out new technologies and techniques to enhance the user experience.",
    role: "Full-stack Developer",
    img: p4,
  },
  {
    id: 5,
    name: "Emily",
    about:
      "Dedicated to crafting pixel-perfect designs and user interfaces. As a graphic designer, I combine creativity with technical skill to bring ideas to life. From concept to execution, I strive for excellence in every project, delivering visually stunning designs that leave a lasting impression.",
    role: "Graphic Designer",
    img: p5,
  },
];

export const SLIDE_COUNT = 18;
export const IMAGE_PATH = "/public/img/";
export const IMAGE_FORMAT = ".png";

export const socialLinks = [
  {
    href: "https://t.me/nwin2004",
    text: "telegram",
    icon: <FaTelegramPlane />,
  },
  {
    href: "https://github.com/nandarwin19",
    text: "GitHub",
    icon: <FaGithub />,
  },
  { href: "mailto:nwin21210@gmail.com", text: "email", icon: <MdEmail /> },
];

export const features = [
  "Advanced noise cancellation technology",
  "Wireless Bluetooth connectivity",
  "Rich, immersive sound quality",
  "Comfortable, ergonomic design",
  "Driver: 50mm neodymium",
  "Frequency response: 20Hz - 20kHz",
  "Battery life: Up to 30 hours",
];