function formatText(text: string): string {
  const bold = /\*\*(.*?)\*\*/g;
  const italic = /\*(.*?)\*/g;

  return text
    .replace(bold, "<strong>$1</strong>")
    .replace(italic, "<em>$1</em>");
}

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
