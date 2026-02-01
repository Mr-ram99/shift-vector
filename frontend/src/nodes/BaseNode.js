import { Handle } from "reactflow";

export const BaseNode = ({
  title,
  children,
  handles = [],
  width = 200,
  height = "auto",
}) => {
  return (
    <div
      style={{
        width,
        minHeight: height,
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 8,
        background: "#fff",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>{title}</div>

      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
        />
      ))}

      {children}
    </div>
  );
};
