// ApiNode.js
import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id }) => {
  const [url, setUrl] = useState("");

  return (
    <BaseNode
      title="API"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-payload` },
        { type: "source", position: Position.Right, id: `${id}-response` },
      ]}
    >
      <label>
        URL:
        <input
          placeholder="https://api.example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
