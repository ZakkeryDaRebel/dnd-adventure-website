import type { StoryNodeType } from "../model/node/StoryNodeType";
import type { ContentBlock } from "../model/node/ContentBlock";

import { StoryTitle } from "../components/story/StoryTitle";
import { StoryParagraph } from "../components/story/StoryParagraph";
import { StoryImage } from "../components/story/StoryImage";
import { StoryRevealText } from "../components/story/StoryRevealText";
import { ChoiceList } from "../components/story/ChoiceList";

interface Props {
  node: StoryNodeType;
  goTo: (nodeId: string) => void;
}

export default function StoryPage({ node, goTo }: Props) {
  function renderBlock(block: ContentBlock, i: number) {
    switch (block.type) {
      case "title":
        return <StoryTitle key={i} text={block.text} />;

      case "paragraph":
        return <StoryParagraph key={i} text={block.text} />;

      case "image":
        return <StoryImage key={i} src={block.src} />;

      case "reveal":
        return (
          <StoryRevealText
            key={i}
            buttonText={block.text}
            revealText={block.revealText}
          />
        );
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {node.content.map(renderBlock)}
      <ChoiceList choices={node.choices} goTo={goTo} />
    </div>
  );
}
