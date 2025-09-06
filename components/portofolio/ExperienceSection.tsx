"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Telkom from "@/public/telkom.png";
import Blanja from "@/public/blanja.png";
import Juke from "@/public/logo-juke.png";
import Salt from "@/public/logo-salt.png";
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
      "Built advanced UI (drag-and-drop boards, lead/broadcast, offer/PO, delivery tracking), resulting in a 25% reduction in end-to-end processing time and enhanced operational efficiency.",
      "Built integrated billing & payments (invoicing, claims, dunning, reconciliation, reminders), reducing processing time 30–40% and lowering manual errors.",
      "Enhanced quality by implementing Jest/Enzyme tests and developing Storybook components, leading to >80% reduction in defects and increased component reuse.",
      "Automated releases with Jenkins CI/CD, Docker, and SonarQube quality gates.",
      "Led the Front-End team to deliver CMS and User Permissions on schedule, improving squad throughput by 20–30% through disciplined Agile methodologies, effective retrospective meetings, and clear communication.",
      "Bug-fixing & stability: prioritized high-impact issues in key user journeys; cut customer-facing errors by 35% and improved task success rates through tight collaboration with QA and backend.",
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
      "Google Analytics",
      "Git",
      "Jenkins",
      "REST API",
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
      "Optimized Vue/SCSS frontend, cutting page load time by 25–35% (Lighthouse/PageSpeed) and improving responsiveness on low-end devices.",
      "Shipped reusable, design system based components, accelerating feature delivery by 20% and reducing recurring UI defects.",
      "Aligned cross functional teams (UI/UX, Backend, QA) through clear communication and clean handoffs, maintained a strong user experience focus from design to release.",
      "Automated CI/CD with Jenkins, reducing release errors by 40–60% and keeping release cycles on schedule.",
      "Monitored stability during campaigns/peak traffic, proactively triaged issues to keep the user experience smooth.",
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
      "BEM Methodology",
    ],
  },
  {
    role: "Frontend Developer",
    period: "January 2019 — September 2019",
    company: "SALT Indonesia",
    companyLogo: (
      <Image
        src={Salt}
        alt={`SALTIcon`}
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    ),
    companyColor: "from-red-100 to-red-300",
    description:
      "SALT delivers smart engineering solutions that integrate intelligence and cutting-edge technology to drive efficiency, adaptability, and innovation. With a future-oriented approach, SALT empowers industries to transform and thrive in the digital era.",
    achievements: [
      "Delivered high-traffic landing pages & PDPs (Nutriclub, Bebelac, SGM, BTPN) end-to-end, responsive, pixel perfect UI with Lighthouse scores up 15–25 pts.",
      "Built the BTPN Tariff Calculator with robust validation and error states maintained accuracy and increased form completion by 10–20%.",
      "Structured SCSS + BEM for modular, low conflict CSS, speed up iteration by 20% and reduced styling regressions.",
      "Improved perceived performance via responsive images, lazy loading, minification, and reflow minimization with a mobile first UX focus.",
      "Collaborated effectively with designers and backend engineers, clear specs and API contracts enabled smooth integrations.",
    ],
    technologies: [
      "Javascript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "BEM Methodology",
      "Git",
      "Jenkins",
      "Jira",
      "Design System.",
    ],
  },
  {
    role: "Junior Software Engineer",
    period: "September 2017 — January 2019",
    company: "PT. JUKE Solusi Teknologi",
    companyLogo: (
      <Image
        src={Juke}
        alt={`JUKE`}
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    ),
    companyColor: "from-blue-300 to-blue-500",
    description:
      "SALT delivers smart engineering solutions that integrate intelligence and cutting-edge technology to drive efficiency, adaptability, and innovation. With a future-oriented approach, SALT empowers industries to transform and thrive in the digital era.",
    achievements: [
      "Shipped MORULA IVF Clinic Information System (patient registration, appointment scheduling, treatment workflows, billing interfaces)  reduced manual re-entry by 30% and improved staff turnaround by 20%",
      "Built Auto2000 CMS (pages, banners, assets) with role-based permissions and reusable UI—shortened publishing time by 25% and improved content consistency.",
      "Optimized Laravel/Eloquent + MySQL (indexes, N+1 fixes), cutting key view response times by 35%.",
      "Delivered responsive, accessible front-end (HTML5, CSS3/Bootstrap, JavaScript), raising mobile form completion by 10–15% and improving UX.",
      "Collaborated & communicated effectively with designers, backend engineers, and business stakeholders to clarify specs and API contracts—smoother handoffs and fewer rework cycles.",
      "Strengthened reliability with input validation, error handling, and code reviews—20% fewer production defects in critical flows.",
    ],
    technologies: [
      "mySQL",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Javascript",
      "Git",
      "REST API",
      "Laravel",
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
