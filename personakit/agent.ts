import { createAgent } from "personakit";

/**
 * Albert's portfolio AI agent configuration
 */
export const agent = createAgent({
  name: "Albert",

  // Load personality from file for easier editing
  personality: "./personakit/persona.md",

  // Load instructions from file
  instructions: "./personakit/instructions.md",

  // Enable knowledge base with RAG
  knowledgeBase: "./personakit/knowledge",
});
