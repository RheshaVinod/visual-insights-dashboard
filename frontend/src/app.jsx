import { useEffect, useState } from "react";
import LineChart from "./components/LineChart";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ fontSize: "28px" }}>Visual Insights Dashboard</h1>
      <p style={{ color: "#555" }}>
        A clean data storytelling dashboard built with React & D3.js.
      </p>

      <LineChart data={data} width={700} height={400} />
    </div>
  );
}

export default App;
