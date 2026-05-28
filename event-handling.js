function App() {
  const handleClick = () => {
    alert("Butona tıklandı");
  };

  return (
    <div>
      <button onClick={handleClick}>
        Tıkla
      </button>
    </div>
  );
}

export default App;
