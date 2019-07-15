module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js",
  },
  roots: ["src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    gatsby: "<rootDir>/__mocks__/gatsby.js",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@images/(.*)": "<rootDir>/src/images/$1",
    "@state/(.*)": "<rootDir>/src/state/$1",
    "@context/(.*)": "<rootDir>/src/context/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@type/(.*)": "<rootDir>/src/type/$1",
    "@styles/(.*)": "<rootDir>/src/styles/$1",
    "@animations/(.*)": "<rootDir>/src/animations/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  setupFiles: ["<rootDir>/loadershim.js"],
}
