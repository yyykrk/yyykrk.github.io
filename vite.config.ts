import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const repository = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
const base = repository ? `/${repository}/` : "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});
