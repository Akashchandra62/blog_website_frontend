import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  proxy: {
    "/api": {
      target: "http://localhost:8800/",
      changeOrigin: true,
    },
  },
};
