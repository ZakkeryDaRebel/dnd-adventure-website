import { formatText } from "..";

interface Props {
  text: string;
}

export function StoryParagraph({ text }: Props) {
  return (
    <p
      className="text-lg"
      dangerouslySetInnerHTML={{ __html: formatText(text) }}
    />
  );
}
