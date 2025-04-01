import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";

/**
 * Simple integration test component to verify WordPress + React + Tailwind + NextUI integration
 */
const IntegrationTest = () => {
  const [testResults, setTestResults] = useState({
    react: { passed: false, message: "Testing React..." },
    tailwind: { passed: false, message: "Testing Tailwind CSS..." },
    wordpress: { passed: false, message: "Testing WordPress data..." },
  });

  useEffect(() => {
    // Test React - If this component renders, React is working
    setTestResults((prev) => ({
      ...prev,
      react: { passed: true, message: "React is working correctly" },
    }));

    // Test Tailwind - Create a test element with Tailwind classes
    const tailwindTestEl = document.createElement("div");
    tailwindTestEl.className = "bg-blue-500";
    document.body.appendChild(tailwindTestEl);
    const tailwindStyle = window.getComputedStyle(tailwindTestEl);
    const isTailwindWorking =
      !!tailwindStyle.backgroundColor &&
      tailwindStyle.backgroundColor !== "rgba(0, 0, 0, 0)";
    document.body.removeChild(tailwindTestEl);

    setTestResults((prev) => ({
      ...prev,
      tailwind: {
        passed: isTailwindWorking,
        message: isTailwindWorking
          ? "Tailwind CSS is working correctly"
          : "Tailwind CSS is not applying styles correctly",
      },
    }));

    // Test WordPress data
    const wpData = window.myReactAppData || window.wpReactData;
    const isWordPressDataAvailable = !!wpData && !!wpData.ajaxUrl;
    setTestResults((prev) => ({
      ...prev,
      wordpress: {
        passed: isWordPressDataAvailable,
        message: isWordPressDataAvailable
          ? "WordPress data is available to React"
          : "WordPress data is not available to React",
      },
    }));
  }, []);

  // Count passed tests
  const passedCount = Object.values(testResults).filter(
    (test) => test.passed
  ).length;
  const totalTests = Object.keys(testResults).length;

  return (
    <motion.div
      className="bg-white rounded-lg shadow overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Integration Tests
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {passedCount === totalTests
            ? "All systems are functioning correctly! 🎉"
            : `${passedCount}/${totalTests} tests passed. Some components may not be working properly.`}
        </p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          {Object.entries(testResults).map(([testName, result], index) => (
            <motion.div
              key={testName}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <dt className="text-sm font-medium text-gray-500 capitalize">
                {testName}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="flex items-center">
                  {result.passed ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        delay: index * 0.1 + 0.3,
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        delay: index * 0.1 + 0.3,
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-red-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </motion.div>
                  )}
                  <span>{result.message}</span>
                </div>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
};

export default IntegrationTest;
