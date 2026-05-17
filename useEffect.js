import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component yüklendi");
  }, []);

  return <h1>useEffect Örneği</h1>;
}

export default App;
