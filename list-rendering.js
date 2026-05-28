function App() {
  const fruits = ["Elma", "Muz", "Çilek"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default App;
