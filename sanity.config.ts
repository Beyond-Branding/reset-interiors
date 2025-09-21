// sanity.config.ts
import projectType from "./src/schemas/project.schema";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "reset-interiors",
  title: "Reset Interiors",
  projectId: "ctni7nro",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [projectType],
  },
});
