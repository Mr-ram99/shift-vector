// MathNode.js
import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const MathNode = ({ id }) => {
  const [expression, setExpression] = useState("a + b");

  return (
    <BaseNode
      title="Math"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-a`,
          style: { top: "35%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-b`,
          style: { top: "65%" },
        },
        { type: "source", position: Position.Right, id: `${id}-result` },
      ]}
    >
      <label>
        Expression:
        <input
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
