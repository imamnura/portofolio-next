"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

// --------------------------------------------------
// Types synced with your parent component's data
// --------------------------------------------------
export type ProjectImage = { src: string; alt?: string };
export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  descriptionShort: string;
  delivery?: string[];
  deliveryPublic?: string[];
  deliveryDashboard?: string[];
  featuresPublic?: string[];
  featuresDashboard?: string[];
  features?: string[];
  images: ProjectImage[];
  thumbnail?: ProjectImage;
  tech?: string[];
  github?: string;
  live?: string;
  gradient?: string;
  category?: string;
};

export type GalleryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: Project;
  /** Optional: start from a specific image */
  initialIndex?: number;
};

// --------------------------------------------------
// Icon mapping for Technologies Used
// (fallback: generic chip with text)
// --------------------------------------------------
const techIconMap: Record<string, string> = {
  React: "logos:react",
  "Tailwind CSS": "logos:tailwindcss-icon",
  Tailwind: "logos:tailwindcss-icon",
  TypeScript: "logos:typescript-icon",
  Vite: "logos:vitejs",
  "Framer Motion": "logos:framer",
  Nextjs: "logos:nextjs-icon",
  "Next.js": "logos:nextjs-icon",
  NextUI: "simple-icons:nextui",
  MongoDB: "logos:mongodb-icon",
  Recoil: "logos:recoil",
  JWT: "mdi:lock-check-outline",
  "JWT Authentication": "mdi:lock-check-outline",
};

// --------------------------------------------------
// Component
// --------------------------------------------------
export default function GalleryModal({
  isOpen,
  onClose,
  data,
  initialIndex = 0,
}: GalleryModalProps) {
  const {
    title,
    subtitle,
    description,
    images = [],
    tech = [],
    github,
    live,
  } = data;

  const [index, setIndex] = React.useState(initialIndex);
  const [direction, setDirection] = React.useState(0); // -1 left, +1 right

  React.useEffect(() => {
    if (isOpen) setIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const goTo = React.useCallback(
    (next: number) => {
      if (!images.length) return;
      const clamped = ((next % images.length) + images.length) % images.length;
      setDirection(next > index ? 1 : -1);
      setIndex(clamped);
    },
    [images.length, index]
  );

  const next = React.useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = React.useCallback(() => goTo(index - 1), [goTo, index]);

  // Keyboard navigation
  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, next, prev]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 40 : -40, opacity: 0 }),
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(v) => !v && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                className="fixed left-1/2 top-1/2 z-50 w-[94vw] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-neutral-900/90 p-0 shadow-2xl ring-1 ring-black/5 max-w-4xl max-h-[90vh]"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                {/* Top bar */}
                <div className="flex items-start justify-between gap-4 px-5 py-4 md:px-6">
                  <div>
                    <Dialog.Title className="text-base font-semibold text-white md:text-lg">
                      {title}
                    </Dialog.Title>
                    {subtitle && (
                      <p className="mt-0.5 text-xs text-white/60 md:text-sm">
                        {subtitle}
                      </p>
                    )}
                  </div>
                  <Dialog.Close asChild>
                    <button
                      aria-label="Close"
                      className="rounded-xl p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                    >
                      <Icon
                        icon="solar:close-circle-bold"
                        className="h-6 w-6"
                      />
                    </button>
                  </Dialog.Close>
                </div>

                {/* Main image */}
                <div className="px-5 md:px-6">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/30">
                    <div className="relative aspect-video w-full">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.img
                          key={index}
                          src={images[index]?.src}
                          alt={images[index]?.alt ?? ""}
                          className={`absolute inset-0 h-full w-full ${
                            title === "Moleawiz"
                              ? "object-contain"
                              : "object-cover"
                          }`}
                          variants={slideVariants}
                          custom={direction}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        />
                      </AnimatePresence>
                    </div>

                    {/* Prev/Next controls */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
                      <button
                        onClick={prev}
                        className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-black/40 p-2 text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-black/60 hover:text-white"
                        aria-label="Previous image"
                      >
                        <Icon
                          icon="solar:alt-arrow-left-bold"
                          className="h-5 w-5"
                        />
                      </button>
                      <span className="pointer-events-auto select-none rounded-full bg-black/50 px-2 py-1 text-xs text-white/80 ring-1 ring-white/10">
                        {index + 1} / {images.length}
                      </span>
                      <button
                        onClick={next}
                        className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-black/40 p-2 text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-black/60 hover:text-white"
                        aria-label="Next image"
                      >
                        <Icon
                          icon="solar:alt-arrow-right-bold"
                          className="h-5 w-5"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="mt-3 px-5 md:px-6">
                    <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                      {images.map((img, i) => (
                        <motion.button
                          key={img.src + i}
                          onClick={() => goTo(i)}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={[
                            "group relative overflow-hidden rounded-lg border",
                            i === index
                              ? "border-sky-400/60 ring-2 ring-sky-400/40"
                              : "border-white/10",
                          ].join(" ")}
                          aria-label={`Show image ${i + 1}`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt ?? ""}
                            className={`h-16 w-full ${
                              title === "Moleawiz"
                                ? "object-contain"
                                : "object-cover"
                            } md:h-20`}
                            width={100}
                            height={64}
                          />
                          <span className="pointer-events-none absolute inset-0 rounded-lg ring-inset ring-white/0 group-focus-visible:ring-2 group-focus-visible:ring-sky-400/60" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Body (matches your screenshot layout) */}
                <div className="px-5 pb-5 pt-4 md:px-6 md:pb-6">
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-sky-300">
                    APPLICATIONS
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {description}
                  </p>

                  {tech?.length ? (
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-medium text-white/90">
                        Technologies Used:
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        {tech.map((t) => {
                          const icon = techIconMap[t] || "";
                          return (
                            <span
                              key={t}
                              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/85"
                            >
                              {icon ? (
                                <Icon icon={icon} className="h-4 w-4" />
                              ) : (
                                <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-white/10 text-[10px]">
                                  {t.charAt(0)}
                                </span>
                              )}
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  {/* Footer actions */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {live && (
                        <a
                          href={live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/85 transition hover:bg-white/10"
                        >
                          <Icon icon="solar:globe-bold" className="h-4 w-4" />{" "}
                          Live
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/85 transition hover:bg-white/10"
                        >
                          <Icon icon="mdi:github" className="h-4 w-4" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

// --------------------------------------------------
// Usage helper (optional): export the type for parent
// --------------------------------------------------
export type { GalleryModalProps as TGalleryModalProps };
