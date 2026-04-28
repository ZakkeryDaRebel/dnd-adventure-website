import { useState } from "react";
import { ChoiceButton } from "./ChoiceButton";
import type { StoryNodeType } from "../model/node/StoryNodeType";
import type { ContentBlock } from "../model/node/ContentBlock";

interface Props {
  node: StoryNodeType;
  goTo: (nodeId: string) => void;
}

function formatText(text: string): string {
  const bold = /\*\*(.*?)\*\*/g;
  const italic = /\*(.*?)\*/g;
  return text
    .replace(bold, "<strong>$1</strong>")
    .replace(italic, "<em>$1</em>");
}

export default function StoryNode({ node, goTo }: Props) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  function renderBlock(block: ContentBlock, i: number) {
    switch (block.type) {
      case "title":
        return (
          <h1 key={i} className="text-4xl font-bold">
            {block.text}
          </h1>
        );

      case "paragraph":
        return (
          <p
            key={i}
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: formatText(block.text) }}
          />
        );

      case "image":
        return <img key={i} src={block.src} className="rounded-xl mx-auto" />;

      case "reveal":
        return (
          <div key={i}>
            {!revealed[i] ? (
              <button
                className="underline text-blue-400"
                onClick={() => setRevealed({ ...revealed, [i]: true })}
              >
                {block.text}
              </button>
            ) : (
              <p className="italic">{block.revealText}</p>
            )}
          </div>
        );
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto text-center">
      {node.content.map((block, i) => renderBlock(block, i))}

      <div className="space-y-3 pt-6">
        {node.choices.map((choice, i) => (
          <ChoiceButton key={i} onClick={() => goTo(choice.next)}>
            {choice.text}
          </ChoiceButton>
        ))}
      </div>
    </div>
  );
}
