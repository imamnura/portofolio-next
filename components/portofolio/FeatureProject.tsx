"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GalleryModal from "./GalleryModal";
import Image from "next/image";

interface ProjectImage {
  src: string;
  alt?: string;
}

interface Project {
  title: string;
  subtitle?: string;
  descriptionShort: string;
  description: string;
  delivery?: string[];
  deliveryPublic?: string[];
  deliveryDashboard?: string[];
  featuresPublic?: string[];
  featuresDashboard?: string[];
  images: ProjectImage[];
  thumbnail?: ProjectImage;
  tech?: string[];
  github?: string;
  live?: string;
  gradient?: string;
  category?: string;
}

const projects = [
  {
    title: "My Carrier Customer",
    subtitle: "Telkom Indonesia Wholesale Platform",
    descriptionShort:
      "A comprehensive web application designed to manage telecommunications services. This project involved developing a user-friendly interface for customers to manage their subscriptions, track usage, and access support.",
    description:
      "MyCarrier is a service for wholesale customers and prospective customers provided by Telkom Indonesia. MyCarrier delivers excellent digital experience with Telkom in explore solutions, create new service request, create trouble ticket, and monitor your services with quicker responses and continuous updates. Further, the app will be equipped more features that make you easier in monitoring your services and communicates with us.",
    deliveryPublic: [
      "User-friendly interface for managing subscriptions",
      "Real-time usage tracking and analytics",
      "Customizable service packages",
      "Form Interest Customer",
    ],
    deliveryDashboard: [
      "Real-time usage monitoring",
      "Automated alerts and notifications",
      "Advanced analytics and reporting",
      "User activity tracking",
      "Integrated support ticketing system",
    ],
    featuresPublic: [
      "Products & Services",
      "About Us",
      "General Brochure MyCarrier",
      "Login to Dashboard",
      "Register MyCarrier",
      "Article",
      "Talk To Us",
      "Help and Support",
      "FAQ",
    ],
    featuresDashboard: [
      "Dashboard Overview",
      "Service Management",
      "Usage Analytics",
      "Support Tickets",
      "Account Settings",
      "Purchase Order",
      "Monitoring",
      "Bills & Payments",
    ],
    images: [
      {
        src: "/mycarrier-customer/1.png",
        alt: "1",
      },
      {
        src: "/mycarrier-customer/2.png",
        alt: "2",
      },
      {
        src: "/mycarrier-customer/3.png",
        alt: "3",
      },
      {
        src: "/mycarrier-customer/4.png",
        alt: "4",
      },
      {
        src: "/mycarrier-customer/5.png",
        alt: "5",
      },
      {
        src: "/mycarrier-customer/6.png",
        alt: "6",
      },
      {
        src: "/mycarrier-customer/7.png",
        alt: "7",
      },
      {
        src: "/mycarrier-customer/8.png",
        alt: "8",
      },
    ],
    thumbnail: {
      src: "/mycarrier-customer/1.png",
      alt: "My Carrier Landing Page",
    },
    tech: [
      "Next.js",
      "NextUI",
      "Tailwind CSS",
      "Framer Motion",
      "Recoil",
      "MongoDB",
      "JWT Authentication",
    ],
    github: "",
    live: "https://mycarrier.telkom.co.id/en",
    gradient: "from-red-500 to-yellow-500",
    category: "Web Application",
  },
  {
    title: "My Carrier Internal Dashboard",
    subtitle: "Telkom Indonesia Wholesale Platform",
    descriptionShort:
      "A comprehensive web application designed to manage telecommunications services. This project involved developing a user-friendly interface for customers to manage their subscriptions, track usage, and access support.",
    description:
      "MyCarrier Internal Dashboard is a platform for Telkom Indonesia wholesale customers. It provides tools for managing service requests, monitoring usage, handling content, and managing purchase orders and user permissions. The dashboard streamlines operations and improves communication between customers and Telkom.",
    delivery: [
      "User-friendly interface for managing subscriptions",
      "Real-time usage tracking and analytics",
      "Customizable service packages",
      "Create Update Service Request",
      "Conten</div>t management for products, articles, events, brochures, etc.",
      "Purchase order and offering letter management",
      "LMS feature management",
      "Broadcast information settings",
      "User access and permission management",
    ],
    features: [
      "Dashboard Overview",
      "SMSA2P Management",
      "Graph Report & Analytics",
      "Create Offering Letter",
      "Create Purchase Order and Modification",
      "Digital Product Management",
      "Delivery Tracking Ticket Fault Handling",
      "Service Delivery",
      "Content Management",
      "Service Assurance",
      "Account Settings",
      "Leads Management System",
      "Promotion Program",
      "Broadcast Information",
    ],
    images: [
      {
        src: "/mycarrier-internal/1.png",
        alt: "1",
      },
      {
        src: "/mycarrier-internal/2.png",
        alt: "2",
      },
      {
        src: "/mycarrier-internal/3.png",
        alt: "3",
      },
      {
        src: "/mycarrier-internal/4.png",
        alt: "4",
      },
      {
        src: "/mycarrier-internal/5.png",
        alt: "5",
      },
      {
        src: "/mycarrier-internal/6.png",
        alt: "6",
      },
      {
        src: "/mycarrier-internal/7.png",
        alt: "7",
      },
      {
        src: "/mycarrier-internal/8.png",
        alt: "8",
      },
    ],
    thumbnail: {
      src: "/mycarrier-internal/3.png",
      alt: "My Carrier Dashboard",
    },
    tech: [
      "React JS",
      "Material UI",
      "Redux",
      "MongoDB",
      "Jest",
      "Recharts",
      "JWT Authentication",
    ],
    github: "",
    live: "",
    gradient: "from-indigo-600 via-purple-600",
    category: "CMS",
  },
  {
    title: "MoLeaWiz",
    subtitle: "Digima Asia Platform",
    descriptionShort:
      "An interactive learning media application with features like learning journey tracking, quizzes, assessments, leaderboards, and rewards. Users can monitor their progress and review their experience, while team monitoring enables oversight of all users.",
    description:
      "MoLeaWiz is a learning media app offering interactive features such as learning journey tracking, quizzes, assessments, leaderboards, and rewards for active learners. Team monitoring allows supervisors to track user progress and review feedback from customers.",
    delivery: [
      "Interactive learning journey tracking",
      "Quizzes and assessments for knowledge evaluation",
      "Leaderboards to encourage friendly competition",
      "Rewards system for active participation",
      "Team monitoring for progress oversight",
      "User feedback and experience review",
    ],
    features: [
      "My Learning Journey",
      "Quizzes and Assessments",
      "Leaderboards",
      "Content Library",
      "Rewards System",
      "Team Monitoring",
      "User Feedback and Experience Review",
      "Progress Monitoring",
      "Interactive Learning Media",
      "Help Center and Support",
    ],
    images: [
      {
        src: "/moleawiz/1.png",
        alt: "1",
      },
      {
        src: "/moleawiz/2.png",
        alt: "2",
      },
      {
        src: "/moleawiz/3.png",
        alt: "3",
      },
      {
        src: "/moleawiz/4.png",
        alt: "4",
      },
      {
        src: "/moleawiz/5.png",
        alt: "5",
      },
      {
        src: "/moleawiz/6.png",
        alt: "6",
      },
      {
        src: "/moleawiz/7.png",
        alt: "7",
      },
      {
        src: "/moleawiz/8.png",
        alt: "8",
      },
      {
        src: "/moleawiz/9.png",
        alt: "9",
      },
    ],
    thumbnail: {
      src: "/moleawiz/thumbnail.png",
      alt: "Moleawiz Application",
    },
    tech: ["React JS", "ANTD Design", "Redux", "Recharts", "SASS"],
    github: "",
    live: "https://moleawiz.com",
    gradient: "from-blue-500 to-cyan-500",
    category: "Website Learning System",
  },
];

export default function FeatureProject() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const openModal = (p: Project, i: number) => {
    setSelectedProject(p);
    setInitialIndex(i);
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
    setSelectedProject(null);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-5 md:top-20 right-2 md:right-16 w-12 sm:w-16 md:w-32 h-12 sm:h-16 md:h-32 bg-gradient-to-br from-purple-400/15 md:from-purple-400/20 to-pink-400/15 md:to-pink-400/20 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-5 md:bottom-20 left-2 md:left-16 w-16 sm:w-20 md:w-40 h-16 sm:h-20 md:h-40 bg-gradient-to-br from-blue-400/10 md:from-blue-400/15 to-cyan-400/10 md:to-cyan-400/15 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="hidden lg:block absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <SectionHeader
          tagText="Portfolio Showcase"
          tagIcon="solar:code-square-bold"
          heading="Featured Projects"
          description="A selection of my recent projects showcasing UI/UX design and development expertise. Showing only my three most recent projects. Want to see more? Contact me."
          showUnderline={true}
          centered={true}
        />

        {/* Full-Width Stacked Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Thumbnail */}
              {/* <div
                className={`h-40 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <Icon
                  icon="solar:code-square-bold"
                  className="text-white text-5xl opacity-80"
                />
              </div> */}
              <div className="h-40 w-full flex items-center justify-center relative">
                <Image
                  src={project.thumbnail?.src}
                  alt={project.thumbnail?.alt ?? ""}
                  className="h-40 w-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-1">
                  {project.descriptionShort}
                </p>
                <div
                  className={`mt-auto inline-block bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform cursor-pointer`}
                  onClick={() => openModal(project, idx)}
                >
                  View Details
                </div>
              </div>

              {isShowModal && selectedProject && (
                <GalleryModal
                  isOpen={isShowModal}
                  onClose={() => closeModal()}
                  data={selectedProject}
                  initialIndex={initialIndex}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
