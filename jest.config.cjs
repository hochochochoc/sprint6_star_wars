module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transform: {
    "^.+\\.(js|jsx)$": "jest-transform-stub",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
