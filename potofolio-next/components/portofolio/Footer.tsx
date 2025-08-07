"use client";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="py-8 border-t border-gray-300/50 dark:border-gray-800/50">
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© {getCurrentYear()} Imam Nur Arifin. All rights reserved.</p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Tailwind CSS
          </a>
          , and{" "}
          <a
            href="https://framer.com/motion/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Framer Motion
          </a>
        </p>
      </div>
    </footer>
  );
}
