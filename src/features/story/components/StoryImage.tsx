interface Props {
  src: string;
}

export function StoryImage({ src }: Props) {
  return <img src={src} className="rounded-xl mx-auto" />;
}
