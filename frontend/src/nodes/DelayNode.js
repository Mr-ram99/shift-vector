// DelayNode.js
import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id }) => {
  const [delay, setDelay] = useState(1000);

  return (
    <BaseNode
      title="Delay"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-input` },
        { type: "source", position: Position.Right, id: `${id}-output` },
      ]}
    >
      <label>
        Delay (ms):
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
