"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const techIconMap: Record<string, string> = {
  React: "logos:react",
  TypeScript: "logos:typescript-icon",
  "Framer Motion": "logos:framer",
  "Next JS": "logos:nextjs-icon",
  Redux: "logos:redux",
  "Material UI": "logos:material-ui",
  "Tailwind CSS": "logos:tailwindcss-icon",
  "ANTD Design": "logos:ant-design",
  Docker: "logos:docker-icon",
  Jenkins: "logos:jenkins",
  Git: "logos:git-icon",
  Jest: "logos:jest",
  NodeJS: "logos:nodejs-icon",
  Storybook: "logos:storybook-icon",
  Postman: "logos:postman-icon",
};

export default function OverviewSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const tech = [
    "React",
    "TypeScript",
    "Framer Motion",
    "Next JS",
    "Redux",
    "Material UI",
    "Tailwind CSS",
    "ANTD Design",
    "Docker",
    "Jenkins",
    "Git",
    "Jest",
    "NodeJS",
    "Storybook",
    "Postman",
  ];

  return (
    <motion.section
      id="overview"
      className="mb-16 md:mb-24 lg:mb-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-10 md:top-20 right-4 md:right-16 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue-400/20 md:from-blue-400/30 to-purple-400/20 md:to-purple-400/30 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-8 md:bottom-16 left-4 md:left-16 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-green-400/15 md:from-green-400/20 to-cyan-400/15 md:to-cyan-400/20 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "6s" }}
          className="hidden md:block absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-xl"
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
          tagText="Get To Know Me"
          tagIcon="solar:user-heart-bold"
          heading="About Me"
          description="Building seamless digital interfaces driven by passion, attention to detail, and clear purpose."
          showUnderline={true}
          centered={true}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start px-4">
          {/* Main Profile Section */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="space-y-6 md:space-y-8">
              {/* Introduction Card */}
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-3 md:w-4 h-3 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 md:top-6 right-10 md:right-14 w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <div className="hidden md:block absolute top-6 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl">
                        👋
                      </span>
                      Hello, I&apos;m Imam Nur Arifin
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                      Delivering{" "}
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        High Quality
                      </span>{" "}
                      and
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        &nbsp; User Centric websites
                      </span>{" "}
                      for more than
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {" "}
                        5 years
                      </span>{" "}
                      combining technical expertise with a commitment to
                      performance and reliability
                    </p>
                  </div>

                  {/* Expanded About Content */}
                  <div className="space-y-3 md:space-y-4 border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      I specialize in building fast, scalable, and user-focused
                      websites using React, Next.js, TypeScript, and modern web
                      technologies. I thrive on transforming complex
                      requirements into seamless, high-performing digital
                      experiences
                    </p>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Beyond work, I enjoy exploring AI-powered solutions,
                      keeping up with the latest trends in web development, and
                      continuously improving my coding craft. I believe in
                      writing clean, maintainable code and delivering products
                      that truly add value to users.
                    </p>
                  </div>

                  {/* Skills Highlight */}
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                      <Icon
                        icon="solar:lightning-bold"
                        className="text-yellow-500 w-4 md:w-5 h-4 md:h-5"
                        width={20}
                        height={20}
                      />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {tech?.length && (
                        <div className="mt-4">
                          <div className="flex flex-wrap items-center gap-3">
                            {tech.map((t, techIndex) => {
                              const icon = techIconMap[t] || "";
                              return (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.9 + techIndex * 0.05 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  className="
                                    relative
                                    text-gray-800 dark:text-gray-200
                                    font-medium text-6xl md:text-sm
                                    transition-all duration-300
                                    flex justify-center items-center group
                                    rounded-full
                                    bg-gradient-to-br
                                    from-white/80 to-blue-100/80
                                    dark:from-gray-800/80 dark:to-gray-900/80
                                    p-2
                                    shadow
                                  "
                                >
                                  <Icon
                                    icon={icon || "mdi:help-circle-outline"}
                                    className="h-8 w-8"
                                  />
                                  {/* Tooltip */}
                                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0 px-2 py-1 rounded bg-gray-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10">
                                    {t}
                                  </span>
                                </motion.span>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Sidebar */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-6 mt-6 lg:mt-0"
          >
            {/* Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/90 to-pink-50/90 dark:from-purple-950/30 dark:to-pink-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon
                  icon="solar:chat-round-dots-bold"
                  className="text-purple-500 w-5 h-5"
                  width={20}
                  height={20}
                />
                Let&apos;s Connect
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:imam.12ra.kkpi@gmail.com"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30 hover:bg-white/90 dark:hover:bg-gray-800/50 transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <div className="p-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-md group-hover:from-orange-600 group-hover:to-red-600 transition-all shadow-md">
                    <Icon
                      icon="solar:letter-bold"
                      className="text-white w-4 h-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white break-all">
                      imam.12ra.kkpi@gmail.com
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-md">
                    <Icon
                      icon="solar:global-bold"
                      className="text-white w-4 h-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      imamnura.dev
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30"
                >
                  <div className="p-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-md shadow-md border border-white/20 dark:border-gray-700/30">
                    <Icon
                      icon="solar:map-point-bold"
                      className="text-white w-4 h-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Jakarta, Indonesia
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Available for Hire */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-cyan-50/90 dark:from-emerald-950/30 dark:to-cyan-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon
                  icon="solar:rocket-bold"
                  className="text-emerald-600 w-5 h-5"
                  width={20}
                  height={20}
                />
                Available for Hire
              </h4>
              <div className="space-y-3.5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-green-600 w-5 h-5"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    Open to New Opportunities
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <Icon
                    icon="solar:planet-2-bold"
                    className="text-cyan-600 w-5 h-5"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    Open to Relocation
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <Icon
                    icon="solar:clock-circle-bold"
                    className="text-blue-600 w-5 h-5"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    Remote & On-site Available
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
