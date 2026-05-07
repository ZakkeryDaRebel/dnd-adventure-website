import { useParams, useNavigate } from "react-router-dom";
import { ADVENTURE_LIST } from "..";
import type { NodeType } from "../../../shared";
import type { StoryNodeType } from "../../story";
import type { FightNodeType } from "../../fight";
import StoryPage from "../../story/pages/StoryPage";
import FightPage from "../../fight/pages/FightPage";

export default function AdventurePage() {
  const { adventureId, nodeId } = useParams();
  const navigate = useNavigate();

  const adventure = ADVENTURE_LIST[adventureId as string];

  const node = adventure.story[
    nodeId === undefined ? adventure.meta.startNode : nodeId
  ] as NodeType;

  function goTo(nextNode: string) {
    if (nextNode === "home-page") navigate("/");
    else navigate(`/adventure/${adventureId}/${nextNode}`);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      {node.type === "story" && (
        <StoryPage node={node as StoryNodeType} goTo={goTo} />
      )}
      {node.type === "fight" && (
        <FightPage node={node as FightNodeType} goTo={goTo} />
      )}
    </div>
  );
}
