import { useMemo, useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

const extractVars = (text) =>
  [...text.matchAll(/{{\s*([a-zA-Z_$][\w$]*)\s*}}/g)].map((m) => m[1]);

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");

  const variables = useMemo(() => extractVars(text), [text]);

  return (
    <BaseNode
      title="Text"
      width={200 + Math.min(text.length * 2, 200)}
      handles={[
        ...variables.map((v, i) => ({
          type: "target",
          position: Position.Left,
          id: `${id}-${v}`,
          style: { top: `${30 + i * 20}px` },
        })),
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <textarea
        value={text}
        rows={Math.max(2, text.split("\n").length)}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
