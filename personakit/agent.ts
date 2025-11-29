import { createAgent } from "personakit";
import path from "path";

/**
 * Albert's portfolio AI agent configuration
 */
export const agent = createAgent({
  name: "Albert",

  // Load personality from file for easier editing
  personality: path.join(process.cwd(), "personakit/persona.md"),

  // Load instructions from file
  instructions: path.join(process.cwd(), "personakit/instructions.md"),

  // Enable knowledge base with RAG
  knowledgeBase: path.join(process.cwd(), "personakit/knowledge"),
});
