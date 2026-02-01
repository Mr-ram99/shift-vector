// MergeNode.js
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-in-1`,
          style: { top: "30%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-in-2`,
          style: { top: "60%" },
        },
        { type: "source", position: Position.Right, id: `${id}-out` },
      ]}
    >
      <div>Merge multiple inputs</div>
    </BaseNode>
  );
};
