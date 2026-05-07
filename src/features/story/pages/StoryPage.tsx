import {
  ChoiceList,
  StoryImage,
  StoryParagraph,
  StoryRevealText,
  StoryTitle,
  type ContentBlock,
  type StoryNodeType,
} from "..";

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
