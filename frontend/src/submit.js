import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodes, edges }),
    });

    const data = await res.json();
    alert(
      `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${data.is_dag}`,
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: 12 }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
