import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export function ChoiceButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="block w-full bg-purple-600 hover:bg-purple-700 p-3 rounded"
    >
      {children}
    </button>
  );
}
