interface Props {
  text: string;
}

export function StoryTitle({ text }: Props) {
  return <h1 className="text-4xl font-bold">{text}</h1>;
}
