
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["src/**/*.js", "tests/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                console: "readonly",
                document: "readonly",
                window: "readonly",
                fetch: "readonly",
                alert: "readonly",
                crypto: "readonly",
                describe: "readonly",
                test: "readonly",
                expect: "readonly"
            }
        }
    }
];
