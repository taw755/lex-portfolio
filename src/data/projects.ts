import stegavaultImg from '../assets/Stegavaultport.png';
import nailArchitectImg from '../assets/nailarchi.png';
import brigadeImg from '../assets/brigade.png';
import nexerImg from '../assets/nexerport.png';

export interface Project {
  id: number;
  filename: string;
  title: string;
  date: string;
  category: string;
  description: string;
  whatILearned: string;
  technologies: string[];
  image: string;
  githubLink: string;
  demoLink: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    filename: "stegavault.json",
    title: "StegaVault: A Secured Multimedia Encryption and Steganography System",
    date: "December 2025 – April 2026",
    category: "Cybersecurity / Full Stack",
    description: "A forensic-grade multimedia file protection platform integrating AES-256 encryption, LSB steganographic watermarking, and tamper-resistant security mechanisms. Every downloaded file is silently stamped with the recipient's identity, enabling forensic-grade file tracing when files surface outside authorized channels.",
    whatILearned: "Applied cryptographic concepts including AES-256-CBC encryption and PBKDF2/TOTP multi-factor authentication in a production pipeline. Designed an invisible LSB steganography engine with HMAC-SHA256 integrity checks for forensic leak tracing and auditability. Engineered resilient backend APIs and server infrastructure focused on data confidentiality, performance, and reliability.",
    technologies: ["PHP", "MySQL", "AES-256-CBC", "Steganography", "HMAC-SHA256", "TOTP MFA", "Tailwind CSS", "JavaScript", "PHPMailer", "TCPDF"],
    image: stegavaultImg,
    githubLink: "#",
    demoLink: "https://stegavault-t03p.onrender.com/"
  },
  {
    id: 2,
    filename: "nail-architect.json",
    title: "Nail Architect: Salon Appointment & Management System",
    date: "April 2025 – May 2025",
    category: "Full Stack Development",
    description: "A comprehensive salon appointment scheduling and service management system. Developed both front-end and back-end components featuring user authentication, seamless appointment booking, staff scheduling, service catalog management, and an intuitive, easily navigable database architecture.",
    whatILearned: "Built end-to-end workflows for appointment scheduling, conflict prevention, and client record management using MySQL. Implemented secure user authentication with 2FA/TOTP and email verification. Developed RESTful/AJAX JSON endpoints, automated email appointment reminders via PHPMailer, and structured a navigable, optimized database schema.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "PHPMailer", "FPDF", "AJAX", "2FA/TOTP", "Google Maps API"],
    image: nailArchitectImg,
    githubLink: "#",
    demoLink: "https://host-nailarchitect.onrender.com/index.html"
  },
  {
    id: 3,
    filename: "brigade.json",
    title: "Brigade: E-Commerce & Inventory Management",
    date: "September 2024 – December 2024",
    category: "E-Commerce / Full Stack",
    description: "A full-stack e-commerce website and administrative management platform built for the Brigade clothing line. Features PayMongo payment gateway integration for secure transactions, robust product catalog management, order tracking, real-time stock and inventory control, and a responsive customer shopping experience.",
    whatILearned: "Developed server-side e-commerce features including product catalog filtering, cart logic, and checkout processing. Integrated PayMongo API for secure card, e-wallet, and COD transactions. Architected relational schemas for orders and stock control, implemented OTP email verification with CAPTCHA security, and built role-based administrative sales analytics dashboards.",
    technologies: ["PHP", "MySQL", "PayMongo API", "JavaScript", "PHPMailer", "Bootstrap", "Chart.js", "jQuery"],
    image: brigadeImg,
    githubLink: "#",
    demoLink: "https://brigade-2za5.onrender.com/"
  },
  {
    id: 4,
    filename: "nexer.json",
    title: "Nexer: Secure Media Streaming Platform",
    date: "January 2024 – March 2024",
    category: "Full Stack / Security",
    description: "A secure media streaming web application engineered with user authentication, media management, and streaming support. Implemented encrypted video delivery, multi-role access control, optimized database queries for backend performance, and secure data handling with scalable system design.",
    whatILearned: "Implemented security-focused backend architecture utilizing OpenSSL AES-256 encrypted video storage and chunked streaming delivery. Implemented multi-role access control (Owner, Admin, Member), TOTP-based multi-factor authentication with backup codes, and prepared statements via PDO for SQL injection prevention. Optimized database queries and built audit logging systems to ensure media protection and platform integrity.",
    technologies: ["PHP", "MySQL", "PDO", "OpenSSL / AES-256", "TOTP MFA", "JavaScript", "Chart.js", "PHPMailer"],
    image: nexerImg,
    githubLink: "#",
    demoLink: "https://nexer-7if6.onrender.com/"
  }
];