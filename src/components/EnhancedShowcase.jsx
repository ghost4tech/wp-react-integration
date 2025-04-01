import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CogIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Analytics",
    description: "Track user engagement with comprehensive analytics.",
    icon: ChartBarIcon,
    color: "bg-blue-500",
  },
  {
    name: "Security",
    description: "End-to-end encryption and advanced security protocols.",
    icon: LockClosedIcon,
    color: "bg-green-500",
  },
  {
    name: "Cloud Storage",
    description: "Store and access your data securely from anywhere.",
    icon: CloudArrowUpIcon,
    color: "bg-purple-500",
  },
  {
    name: "Server Monitoring",
    description: "Real-time monitoring and alerts for your servers.",
    icon: ServerIcon,
    color: "bg-yellow-500",
  },
  {
    name: "Documentation",
    description: "Comprehensive documentation and guides for users.",
    icon: DocumentTextIcon,
    color: "bg-pink-500",
  },
  {
    name: "Team Management",
    description: "Manage user roles and permissions with ease.",
    icon: UserGroupIcon,
    color: "bg-indigo-500",
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: index * 0.1,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div
          className={`${feature.color} w-12 h-12 rounded-md flex items-center justify-center mb-4`}
        >
          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const AnimatedButton = ({
  children,
  onClick,
  color = "bg-blue-600",
  hoverColor = "bg-blue-700",
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 ${color} text-white rounded-md ${hoverColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      {children}
    </motion.button>
  );
};

const LoadingSpinner = () => (
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 1,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    <ArrowPathIcon className="h-5 w-5" />
  </motion.div>
);

const SettingsIcon = () => (
  <motion.div
    animate={{
      rotate: 180,
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <CogIcon className="h-5 w-5" />
  </motion.div>
);

const EnhancedShowcase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("buttons");

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="sm:hidden">
          <select
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="buttons">Animated Buttons</option>
            <option value="features">Feature Cards</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {["buttons", "features"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize
                    ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "buttons" && (
          <motion.div
            key="buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Animated Buttons
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Basic Animation
                </h3>
                <AnimatedButton>Click Me</AnimatedButton>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Loading State
                </h3>
                <AnimatedButton
                  onClick={simulateLoading}
                  color={isLoading ? "bg-gray-400" : "bg-blue-600"}
                  hoverColor={isLoading ? "bg-gray-400" : "bg-blue-700"}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <LoadingSpinner />
                      <span className="ml-2">Loading...</span>
                    </div>
                  ) : (
                    "Process Data"
                  )}
                </AnimatedButton>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Settings Button
                </h3>
                <AnimatedButton color="bg-gray-800" hoverColor="bg-gray-900">
                  <div className="flex items-center">
                    <SettingsIcon />
                    <span className="ml-2">Settings</span>
                  </div>
                </AnimatedButton>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Success Button
                </h3>
                <AnimatedButton color="bg-green-600" hoverColor="bg-green-700">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Success</span>
                  </div>
                </AnimatedButton>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Danger Button
                </h3>
                <AnimatedButton color="bg-red-600" hoverColor="bg-red-700">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>Delete</span>
                  </div>
                </AnimatedButton>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Gradient Button
                </h3>
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md focus:outline-none"
                  whileHover={{
                    scale: 1.05,
                    backgroundPosition: ["0%", "100%"],
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    backgroundPosition: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "linear",
                    },
                  }}
                >
                  Gradient
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "features" && (
          <motion.div
            key="features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Animated Feature Cards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.name}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedShowcase;
