export type ContentBlock =
  | { type: "title"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string }
  | { type: "reveal"; text: string; revealText: string };
