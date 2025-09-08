const axios = require("axios");

/**
 * Logging Middleware function
 * @param {string} stack - "frontend" ya "backend"
 * @param {string} level - "debug" | "info" | "warn" | "error" | "fatal"
 * @param {string} packageName - "component" | "page" | "api" (frontend ke liye)
 * @param {string} message - Log message
 * @param {string} token - Authorization token (Bearer token)
 */
async function log(stack, level, packageName, message, token) {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("✅ Log Created:", response.data);
  } catch (error) {
    console.error("❌ Error sending log:", error.message);
  }
}

// Example Usage (jab tumhara token aa jaye):
// log("frontend", "error", "component", "Button click failed", "<ACCESS_TOKEN>");

module.exports = log;

