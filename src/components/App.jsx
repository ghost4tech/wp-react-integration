import React from "react";
import { HeroUIProvider } from "@heroui/react";
import { Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import IntegrationTest from "./IntegrationTest";
import NextUIShowcase from "./NextUiShowcase";
import EnhancedShowcase from "./EnhancedShowcase";

/**
 * Main App component for WordPress Admin
 */
const App = () => {
  // Access WordPress localized data
  const wpData = window.myReactAppData ||
    window.wpReactData || {
      ajaxUrl: "",
      nonce: "",
      pluginUrl: "",
    };

  return (
    <HeroUIProvider>
      <motion.div
        className="max-w-6xl mx-auto px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            React + NextUI + Animations
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            A WordPress integration starter kit with modern UI components
          </p>
        </motion.div>

        {/* Tab Interface */}
        <div className="w-full">
          <Tabs aria-label="Options">
            <Tab
              key="tests"
              title={
                <div className="flex items-center space-x-2">
                  <span>Integration Tests</span>
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <div className="mb-4 text-sm text-gray-500">
                  Verify that React, Tailwind, and NextUI are working with
                  WordPress
                </div>
                <IntegrationTest />
              </motion.div>
            </Tab>

            <Tab
              key="nextui"
              title={
                <div className="flex items-center space-x-2">
                  <span>NextUI Components</span>
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <div className="mb-4 text-sm text-gray-500">
                  Explore interactive components from NextUI
                </div>
                <NextUIShowcase />
              </motion.div>
            </Tab>

            <Tab
              key="animations"
              title={
                <div className="flex items-center space-x-2">
                  <span>Animated UI</span>
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <div className="mb-4 text-sm text-gray-500">
                  Interactive components with Framer Motion animations
                </div>
                <EnhancedShowcase />
              </motion.div>
            </Tab>

            <Tab
              key="data"
              title={
                <div className="flex items-center space-x-2">
                  <span>WordPress Data</span>
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <div className="mb-4 text-sm text-gray-500">
                  View data passed from WordPress to React
                </div>
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      WordPress Data
                    </h3>
                    <div className="mt-5 border-t border-gray-200">
                      <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium text-gray-500">
                            AJAX URL
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {wpData.ajaxUrl || "Not available"}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium text-gray-500">
                            REST URL
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {wpData.restUrl || "Not available"}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium text-gray-500">
                            Nonce
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {wpData.nonce || "Not available"}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium text-gray-500">
                            Current Page
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {wpData.currentPage || "Not available"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tab>
          </Tabs>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            Edit{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-pink-500">
              src/components/App.jsx
            </code>{" "}
            to customize this app
          </p>
        </motion.div>
      </motion.div>
    </HeroUIProvider>
  );
};

export default App;
