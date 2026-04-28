import testForestMeta from "../adventures/*test-forest/meta";
import testForestStory from "../adventures/*test-forest/story";
import goblinWestwoodMeta from "../adventures/goblin-westwood/meta";
import goblinWestwoodStory from "../adventures/goblin-westwood/story";

export const adventures = {
  [testForestMeta.id]: {
    meta: testForestMeta,
    story: testForestStory,
  },
  [goblinWestwoodMeta.id]: {
    meta: goblinWestwoodMeta,
    story: goblinWestwoodStory,
  },
};
