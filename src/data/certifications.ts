export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link: string;
  badgeImage: string;
  description: string;
}

export const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "Verified",
    link: "https://www.credly.com/badges/c800d945-a86f-4507-b5ad-21140c04bc91/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/242902b5-f527-42ad-865e-977c9e1b5b58/linkedin_thumb_image.png",
    description: "Proficient in scoping, executing, reporting vulnerability assessments, and recommending mitigation strategies using Kali Linux, WebSploit, and other tools."
  },
  {
    id: 2,
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    date: "Verified",
    link: "https://www.credly.com/badges/479bcbb8-21f1-4728-9467-208ae67cd97e/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/linkedin_thumb_EndpointSecurity.png",
    description: "Broad understanding of basic concepts of network security, as well as operating systems and endpoint security."
  },
  {
    id: 3,
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    date: "Verified",
    link: "https://www.credly.com/badges/ea687621-a779-4f6d-80d1-9e2cec4202c2/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/linkedin_thumb_image.png",
    description: "Familiar with cybersecurity policies, governance, network vulnerability assessment, risk management planning, and post-incident response."
  },
  {
    id: 4,
    title: "Digital Awareness",
    issuer: "Cisco Networking Academy",
    date: "Verified",
    link: "https://www.credly.com/badges/e5f7b1fc-c48e-4f99-8707-207240881647/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/29e7c859-4719-4081-a12f-6bdc073a43d2/linkedin_thumb_image.png",
    description: "Entry-level understanding of digital tools and technologies, responsible digital content navigation, and online presence management."
  },
  {
    id: 5,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Verified",
    link: "https://www.credly.com/badges/c154a1dd-20b4-44ba-ac74-b81d23d5ed41/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/linkedin_thumb_image.png",
    description: "Knowledge of AI concepts including NLP, computer vision, machine learning, deep learning, chatbots, neural networks, and AI ethics."
  }
];
