import { ChoiceButton } from "../ChoiceButton";

interface Choice {
  text: string;
  next: string;
}

interface Props {
  choices: Choice[];
  goTo: (nodeId: string) => void;
}

export function ChoiceList({ choices, goTo }: Props) {
  return (
    <div className="space-y-3 pt-6">
      {choices.map((choice, i) => (
        <ChoiceButton key={i} onClick={() => goTo(choice.next)}>
          {choice.text}
        </ChoiceButton>
      ))}
    </div>
  );
}
