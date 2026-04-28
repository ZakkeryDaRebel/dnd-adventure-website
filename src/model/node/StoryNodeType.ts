import type { ContentBlock } from "./ContentBlock";
import type { Choice } from "./Choice";

export interface StoryNodeType {
  type: "story";
  content: ContentBlock[];
  choices: Choice[];
}
