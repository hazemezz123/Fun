import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-8 px-4 mt-12 border-t border-amber-200 dark:border-amber-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      dir="rtl"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div
              className="flex items-center space-x-2 rtl:space-x-reverse"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Crescent moon icon for Ramadan */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-500 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                تم تعبئة الكرش بنجاح
              </h2>
            </motion.div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              معرض تم تعبئته بنجاح
            </p>
          </div>

          <div className="flex space-x-4 rtl:space-x-reverse">
            {/* GitHub icon */}
            <motion.a
              target="_blank"
              href="https://github.com/hazemezz123"
              className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </motion.a>
            {/* LinkedIn icon */}
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/hazem-ezz-424498285"
              className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} تم تعبئة الكرش بنجاح . جميع الحقوق
            محفوظة.
          </p>
          <p className="mt-2 text-amber-500">رمضان كريم 🌙</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
