"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Telkom from "@/public/telkom.png";
import Blanja from "@/public/blanja.png";
import Image from "next/image";

const experience = [
  {
    role: "Frontend Developer",
    period: "November 2020 — Present",
    company: "Telkom Indonesia",
    companyLogo: (
      <Image
        src={Telkom}
        alt={`TelkomIcon`}
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    ),
    companyColor: "from-rose-200 to-rose-400",
    description:
      "Delivered high-quality web projects for Telkom's Wholesale Service Division, including the MyCarrier platform with a landing page and management dashboard.",
    achievements: [
      "Delivered a high-performance landing page and management dashboard for Telkom's Wholesale Service Division (MyCarrier) using React, Next.js, Material UI, Redux, Firebase, ensuring excellent SEO and fast load times.",
      "Implemented advanced UI/UX features, including drag-and-drop boards (Trello/Jira style), lead management, broadcast messaging, offering letter & purchase order creation, and delivery tracking—improving operational efficiency for end-users.",
      "Built robust content management capabilities for products, articles, events, banners, and homepage customization, enabling non-technical teams to manage digital content seamlessly.",
      "Developed integrated billing and payment modules (invoice, payment, claims, dunning, reconciliation, billing reminder), streamlining financial operations and reducing processing time.",
      "Ensured code quality with unit testing (Jest & Enzyme) and reusable UI components via Storybook, increasing maintainability and reducing bugs in production",
      "Optimized for scalability & maintainability, resulting in a platform capable of handling complex workflows and large datasets while maintaining a smooth user experience.",
      "Deployed with DevOps stack Jenkins for CI/CD, Docker for containerization, Kubernetes on Red Hat OpenShift for orchestration, and SonarQube for quality gates.",
      "Led the Front-End team within the “Explore” squad (3 FE, 2 BE, 1 UI/UX, 1 QA) to ship Content Management and User Permission modules to production on sprint schedule; increased team productivity and delivery predictability through disciplined Agile practices and data-driven retrospectives I facilitated.",
    ],
    technologies: [
      "Typescript",
      "React",
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Jest & Enzyme",
      "Firebase",
      "Storybook",
    ],
  },
  {
    role: "Frontend Developer",
    period: "September 2019 — November 2020",
    company: "PT. Metraplasa (Blanja.com)",
    companyLogo: (
      <Image
        src={Blanja}
        alt={`BlanjaIcon`}
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    ),
    companyColor: "from-red-100 to-red-300",
    description:
      "Blanja.com is a national e-commerce platform, a collaboration between PT Telkom Indonesia and eBay, offering products from local SMEs (UMKM) to international brands. Contributed to developing new features, implementing enhancements, and maintaining the system to ensure reliability, speed, and security for millions of users.",
    achievements: [
      "Developed and enhanced multiple core features of the Blanja.com platform, improving user experience and transaction flow.",
      "Optimized front-end performance using Vue.js and SCSS, reducing page load time and enhancing responsiveness.",
      "Collaborated with cross-functional teams (UI/UX, QA, Backend) to ensure smooth feature delivery from design to deployment.",
      "Implemented reusable components following the company’s design system, ensuring consistency and faster development cycles.",
      "Utilized automated CI/CD pipelines with Jenkins, reducing deployment errors and accelerating release schedules.",
      "Maintained and monitored platform stability, ensuring high availability during promotional campaigns and peak traffic periods.",
    ],
    technologies: [
      "Vue.js",
      "SCSS",
      "Lodash",
      "Postman",
      "Git",
      "Jenkins",
      "Jira",
      "Design System.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -90 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.3,
    },
  },
};

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 relative overflow-hidden md:mb-24 lg:mb-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          tagText="Professional Journey"
          tagIcon="solar:case-bold"
          heading="Experience"
          showUnderline={false}
          description="My journey as a Front-End Engineer delivering UI that’s fast, accessible, and business-driven."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6 md:space-y-12 px-4 md:px-6"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-8 lg:gap-12">
                <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br ${exp.companyColor} flex items-center justify-center shadow-xl md:shadow-2xl mb-3 md:mb-4 relative overflow-hidden group-hover:shadow-2xl md:group-hover:shadow-3xl transition-all duration-500`}
                  >
                    {exp.companyLogo}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.companyColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                  </motion.div>
                </div>

                <div className="flex-1 space-y-4 md:space-y-6 min-w-0">
                  <div className="space-y-1 md:space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 md:gap-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium"
                    >
                      <Icon
                        icon="solar:calendar-outline"
                        width={14}
                        height={14}
                        className="md:w-4 md:h-4"
                      />
                      <span>{exp.period}</span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
                    >
                      {exp.role}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold"
                    >
                      {exp.company}
                    </motion.p>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
                  >
                    {exp.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3 md:space-y-4"
                  >
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <Icon
                        icon="solar:cup-star-bold"
                        className="text-amber-500"
                        width={22}
                        height={22}
                      />
                      Key Achievements
                    </h4>
                    <div className="space-y-2 md:space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + achIndex * 0.1 }}
                          className="flex items-start gap-3 md:gap-4 group/achievement hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300"
                        >
                          <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mt-0.5 shadow-md md:shadow-lg group-hover/achievement:scale-110 transition-transform duration-300">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-3 md:space-y-4"
                  >
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <Icon
                        icon="solar:programming-bold"
                        className="text-purple-500"
                        width={18}
                        height={18}
                      />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100/80 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 rounded-lg md:rounded-xl font-medium text-xs md:text-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/80 dark:hover:bg-blue-900/20 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              {index < experience.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-6 md:mt-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
