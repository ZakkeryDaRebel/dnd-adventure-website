import { useState } from "react";

interface Props {
  buttonText: string;
  revealText: string;
}

export function StoryRevealText({ buttonText, revealText }: Props) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        className="underline text-blue-400"
        onClick={() => setRevealed(true)}
      >
        {buttonText}
      </button>
    );
  }

  return <p className="italic">{revealText}</p>;
}
