export function formatText(text: string): string {
  const bold = /\*\*(.*?)\*\*/g;
  const italic = /\*(.*?)\*/g;

  return text
    .replace(bold, "<strong>$1</strong>")
    .replace(italic, "<em>$1</em>");
}
