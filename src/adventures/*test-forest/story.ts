export default {
  start: {},
  enter: {
    type: "story",
    content: [
      { type: "title", text: "The Dark Forest" },
      { type: "paragraph", text: "You step into the forest." },
      { type: "paragraph", text: "The air is *cold* and **quiet**." },
      { type: "image", src: "https://picsum.photos/600/300" },
      {
        type: "reveal",
        text: "Look closer at the ground",
        revealText: "You find strange claw marks in the dirt.",
      },
    ],
    choices: [
      { text: "Follow the tracks", next: "tracks" },
      { text: "Run away", next: "start" },
    ],
  },
  fight_wolf: {
    type: "fight",
    enemy: "Wolf",
    enemyHP: 12,
    enemyAttack: 4,
    winNode: "afterWolf",
    loseNode: "death",
  },

  afterWolf: {
    type: "story",
    content: [
      { type: "title", text: "Victory!" },
      { type: "paragraph", text: "You defeated the wolf!" },
    ],
    choices: [{ text: "Continue", next: "cave" }],
  },

  cave: {
    type: "story",
    content: [{ type: "pagaraph", text: "Treasure! You win." }],
    choices: [{ text: "Home Page", next: "home-page" }],
  },

  death: {
    type: "story",
    content: [{ type: "paragraph", text: "You died." }],
    choices: [{ text: "Home Page", next: "home-page" }],
  },
};
