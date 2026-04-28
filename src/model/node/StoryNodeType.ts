import type { ContentBlock } from "./ContentBlock";
import type { Choice } from "./Choice";
import type { NodeType } from "./NodeType";

export interface StoryNodeType extends NodeType {
  type: "story";
  content: ContentBlock[];
  choices: Choice[];
}
